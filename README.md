[![GitHub](https://img.shields.io/github/license/pepperize/cdk-dynamodb-backup?style=flat-square)](https://github.com/pepperize/cdk-dynamodb-backup/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@pepperize/cdk-dynamodb-backup?style=flat-square)](https://www.npmjs.com/package/@pepperize/cdk-dynamodb-backup)
[![PyPI](https://img.shields.io/pypi/v/pepperize.cdk-dynamodb-backup?style=flat-square)](https://pypi.org/project/pepperize.cdk-dynamodb-backup/)
[![Nuget](https://img.shields.io/nuget/v/Pepperize.CDK.DynamodbBackup?style=flat-square)](https://www.nuget.org/packages/Pepperize.CDK.DynamodbBackup/)
[![Sonatype Nexus (Releases)](https://img.shields.io/nexus/r/com.pepperize/cdk-dynamodb-backup?server=https%3A%2F%2Fs01.oss.sonatype.org%2F&style=flat-square)](https://s01.oss.sonatype.org/content/repositories/releases/com/pepperize/cdk-dynamodb-backup/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/pepperize/cdk-dynamodb-backup/release/main?label=release&style=flat-square)](https://github.com/pepperize/cdk-dynamodb-backup/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/pepperize/cdk-dynamodb-backup?sort=semver&style=flat-square)](https://github.com/pepperize/cdk-dynamodb-backup/releases)
[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod&style=flat-square)](https://gitpod.io/#https://github.com/pepperize/cdk-dynamodb-backup)

# CDK DynamoDB Backup & Restore

Backup and restore AWS DynamoDB Table with AWS Data Pipeline.

## Install

### TypeScript

```shell
npm install @pepperize/cdk-dynamodb-backup
```

or

```shell
yarn add @pepperize/cdk-dynamodb-backup
```

### Python

```shell
pip install pepperize.cdk-dynamodb-backup
```

### C\# / .Net

```
dotnet add package Pepperize.CDK.DynamodbBackup
```

### Java

```xml
<dependency>
  <groupId>com.pepperize</groupId>
  <artifactId>cdk-dynamodb-backup</artifactId>
  <version>${cdkDynamodbBackup.version}</version>
</dependency>
```

## Usage

See [API.md](https://github.com/pepperize/cdk-dynamodb-backup/blob/main/API.md).

### Backup

Export data from AWS DynamoDB to AWS S3

```typescript
const table = new aws_dynamodb.Table(stack, "Table", {
  partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
});
const bucket = new aws_s3.Bucket(stack, "Bucket", {});

// When
new DataPipelineBackup(stack, "Account", {
  table: table,
  backupBucket: bucket,
});
```

See [Exporting Data From DynamoDB to Amazon S3](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html#DataPipelineExportImport.Exporting)

### Restore

Import data from AWS S3 into AWS DynamoDB

```typescript
const table = new aws_dynamodb.Table(stack, "Table", {
  partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
});
const bucket = new aws_s3.Bucket(stack, "Bucket", {});

// When
new DataPipelineRestore(stack, "Restore", {
  table: table,
  restoreBucket: bucket,
  restoreFolder: "/prefix/to/folder/with/manifest",
});
```

See [Importing Data From Amazon S3 to DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBPipeline.html#DataPipelineExportImport.Importing)
