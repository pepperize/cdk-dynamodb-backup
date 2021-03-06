import { PrivateBucket } from "@pepperize/cdk-private-bucket";
import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import { DataPipelineRestore } from "../../src";

describe("DataPipelineRestore", () => {
  it("Should match snapshot", () => {
    // Given
    const app = new App();
    const stack = new Stack(app, "Stack");

    const table = new dynamodb.Table(stack, "Table", {
      partitionKey: { name: "id", type: dynamodb.AttributeType.STRING },
    });
    const bucket = new PrivateBucket(stack, "Bucket", {});

    // When
    new DataPipelineRestore(stack, "Restore", {
      table: table,
      restoreBucket: bucket,
      restoreFolder: "/my-ddb-backup",
    });

    // Then
    const template = Template.fromStack(stack);
    expect(template).toMatchSnapshot();
  });
});
