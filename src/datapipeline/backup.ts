import { PrivateBucket } from "@pepperize/cdk-private-bucket";
import { Duration, ITaggable, RemovalPolicy, TagManager, TagType } from "aws-cdk-lib";
import * as datapipeline from "aws-cdk-lib/aws-datapipeline";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as iam from "aws-cdk-lib/aws-iam";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface DataPipelineBackupOptions {
  readonly schedule?: Duration;
  readonly pipelineName?: string;
  readonly dynamoDbThroughputRatio?: number;
  readonly logsBucket?: s3.IBucket;
}

export interface DataPipelineBackupProps extends DataPipelineBackupOptions {
  readonly table: dynamodb.ITable;
  readonly backupBucket: s3.IBucket;
}

enum Parameters {
  DDB_REGION = "DDBRegion",
  DDB_TABLE = "DDBTable",
  DDB_READ_THROUGHPUT_RATIO = "DDBReadThroughputRatio",
  S3_OUTPUT_LOCATION = "S3OutputLocation",
}

const DEFAULT_DDB_READ_THROUGHPUT_RATIO = 0.5;

export class DataPipelineBackup extends Construct implements ITaggable {
  /**
   * The role used by datapipelines service.
   */
  public readonly role: iam.IRole;
  /**
   * The role used by the emr cluster resources.
   */
  public readonly resourceRole: iam.IRole;
  /**
   * The instance profile of the emr cluster resources.
   */
  public readonly instanceProfile: iam.CfnInstanceProfile;

  readonly tags = new TagManager(TagType.STANDARD, "AWS::DataPipeline::Pipeline");

  public constructor(scope: Construct, id: string, props: DataPipelineBackupProps) {
    super(scope, id);

    const logsBucket =
      props.logsBucket ??
      new PrivateBucket(this, "LogBucket", {
        lifecycleRules: [
          {
            expiration: Duration.days(14),
          },
        ],
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      });

    this.role = new iam.Role(this, "Role", {
      assumedBy: new iam.CompositePrincipal(
        new iam.ServicePrincipal("elasticmapreduce.amazonaws.com"),
        new iam.ServicePrincipal("datapipeline.amazonaws.com")
      ),
      managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName("AWSDataPipelineRole")],
    });

    this.resourceRole = new iam.Role(this, "ResourceRole", {
      assumedBy: new iam.ServicePrincipal("ec2.amazonaws.com"),
      managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonEC2RoleforDataPipelineRole")],
    });
    props.table.grantReadData(this.resourceRole);
    props.backupBucket.grantWrite(this.resourceRole);
    logsBucket.grantWrite(this.resourceRole);

    this.instanceProfile = new iam.CfnInstanceProfile(this, "InstanceProfile", {
      roles: [this.resourceRole.roleName],
    });

    const pipelineName =
      props.pipelineName ??
      `dynamodb-backup-${props.table.tableName}-${props.table.env.account}-${props.table.env.region}`;
    const schedule = props.schedule ?? Duration.days(1);
    const throughput = props.dynamoDbThroughputRatio ?? DEFAULT_DDB_READ_THROUGHPUT_RATIO;

    new datapipeline.CfnPipeline(this, "Pipeline", {
      name: pipelineName,
      description: `Backup DynamoDB Table ${props.table.tableName} ${props.table.env.account} ${props.table.env.region} to S3`,
      activate: true,
      parameterValues: [
        {
          id: Parameters.DDB_REGION,
          stringValue: props.table.env.region,
        },
        {
          id: Parameters.DDB_TABLE,
          stringValue: props.table.tableName,
        },
        {
          id: Parameters.DDB_READ_THROUGHPUT_RATIO,
          stringValue: `${throughput}`,
        },
        {
          id: Parameters.S3_OUTPUT_LOCATION,
          stringValue: props.backupBucket.s3UrlForObject("/"),
        },
      ],
      parameterObjects: [
        {
          id: Parameters.DDB_REGION,
          attributes: [
            {
              key: "default",
              stringValue: props.table.env.region,
            },
            {
              key: "watermark",
              stringValue: "Enter DynamoDB table region",
            },
            {
              key: "description",
              stringValue: "Region of the DynamoDB table",
            },
            {
              key: "type",
              stringValue: "string",
            },
          ],
        },
        {
          id: Parameters.DDB_TABLE,
          attributes: [
            {
              key: "watermark",
              stringValue: "Enter DynamoDB table name",
            },
            {
              key: "description",
              stringValue: "Name of the source DynamoDB table",
            },
            {
              key: "type",
              stringValue: "string",
            },
          ],
        },
        {
          id: Parameters.DDB_READ_THROUGHPUT_RATIO,
          attributes: [
            {
              key: "default",
              stringValue: `${DEFAULT_DDB_READ_THROUGHPUT_RATIO}`,
            },
            {
              key: "watermark",
              stringValue: "Enter value between 0.1 and 1.0",
            },
            {
              key: "description",
              stringValue: "DynamoDB read throughput ratio",
            },
            {
              key: "type",
              stringValue: "Double",
            },
          ],
        },
        {
          id: Parameters.S3_OUTPUT_LOCATION,
          attributes: [
            {
              key: "watermark",
              stringValue: "Select the output S3 folder",
            },
            {
              key: "description",
              stringValue: "Output S3 folder",
            },
            {
              key: "type",
              stringValue: "AWS::S3::ObjectKey",
            },
          ],
        },
      ],
      pipelineObjects: [
        {
          id: "Schedule",
          name: `Every ${schedule.formatTokenToNumber()}`,
          fields: [
            {
              key: "period",
              stringValue: schedule.formatTokenToNumber(),
            },
            {
              key: "type",
              stringValue: "Schedule",
            },
            {
              key: "startAt",
              stringValue: "FIRST_ACTIVATION_DATE_TIME",
            },
          ],
        },
        {
          id: "Default",
          name: "Default",
          fields: [
            {
              key: "type",
              stringValue: "Default",
            },
            {
              key: "failureAndRerunMode",
              stringValue: "CASCADE",
            },
            {
              key: "schedule",
              refValue: "DefaultSchedule",
            },
            {
              key: "scheduleType",
              refValue: "cron",
            },
            {
              key: "resourceRole",
              stringValue: `${this.instanceProfile.instanceProfileName}`,
            },
            {
              key: "role",
              stringValue: `${this.role.roleName}`,
            },
            {
              key: "pipelineLogUri",
              stringValue: `${logsBucket.s3UrlForObject("/dynamodb/backup")}`,
            },
          ],
        },
        {
          id: "EmrClusterForBackup",
          name: "EmrClusterForBackup",
          fields: [
            {
              key: "coreInstanceCount",
              stringValue: "1",
            },
            {
              key: "coreInstanceType",
              stringValue: "m3.xlarge",
            },
            {
              key: "releaseLabel",
              stringValue: "emr-5.23.0",
            },
            {
              key: "masterInstanceType",
              stringValue: "m3.xlarge",
            },
            {
              key: "region",
              stringValue: `#{${Parameters.DDB_REGION}}`,
            },
            {
              key: "type",
              stringValue: "EmrCluster",
            },
            {
              key: "terminateAfter",
              stringValue: `${Duration.hours(1).formatTokenToNumber()}`,
            },
          ],
        },
        {
          id: "TableBackupActivity",
          name: "TableBackupActivity",
          fields: [
            {
              key: "output",
              refValue: "S3BackupLocation",
            },
            {
              key: "input",
              refValue: "DDBSourceTable",
            },
            {
              key: "maximumRetries",
              stringValue: "2",
            },
            {
              key: "step",
              stringValue: `s3://dynamodb-dpl-#{${Parameters.DDB_REGION}/emr-ddb-storage-handler/4.11.0/emr-dynamodb-tools-4.11.0-SNAPSHOT-jar-with-dependencies.jar,org.apache.hadoop.dynamodb.tools.DynamoDBExport,#{output.directoryPath},#{input.tableName},#{input.readThroughputPercent}`,
            },
            {
              key: "runsOn",
              refValue: "EmrClusterForBackup",
            },
            {
              key: "type",
              stringValue: "EmrActivity",
            },
            {
              key: "resizeClusterBeforeRunning",
              stringValue: "true",
            },
          ],
        },
        {
          id: "DDBSourceTable",
          name: "DDBSourceTable",
          fields: [
            {
              key: "readThroughputPercent",
              stringValue: `#{${Parameters.DDB_READ_THROUGHPUT_RATIO}`,
            },
            {
              key: "type",
              stringValue: "DynamoDBDataNode",
            },
            {
              key: "tableName",
              stringValue: `#{${Parameters.DDB_TABLE}`,
            },
            {
              key: "region",
              stringValue: `#{${Parameters.DDB_REGION}`,
            },
          ],
        },
        {
          id: "S3BackupLocation",
          name: "S3BackupLocation",
          fields: [
            {
              key: "directoryPath",
              stringValue: `${Parameters.S3_OUTPUT_LOCATION}/dynamodb/backup-#{${Parameters.DDB_TABLE}-#{${Parameters.DDB_REGION}}/#{format(@scheduledStartTime, 'YYYY-MM-dd-HH-mm-ss')}`,
            },
            {
              key: "type",
              stringValue: "S3DataNode",
            },
          ],
        },
      ],
      pipelineTags: this.tags.renderTags(),
    });
  }
}
