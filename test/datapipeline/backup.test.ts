import { PrivateBucket } from "@pepperize/cdk-private-bucket";
import { App, Stack, Tags } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { DataPipelineBackup } from "../../src";

describe("DataPipelineBackup", () => {
  it("Should match snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");
    Tags.of(stack).add("app", "backup");

    const table = new dynamodb.Table(stack, "Table", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
    });
    const bucket = new PrivateBucket(stack, "Bucket", {});

    // When
    new DataPipelineBackup(stack, "Account", {
      table: table,
      backupBucket: bucket,
    });

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
