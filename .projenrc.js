const { AwsCdkConstructLibrary } = require("@pepperize/projen-awscdk-construct");
const { javascript } = require("projen");
const project = new AwsCdkConstructLibrary({
  author: "Patrick Florek",
  authorAddress: "patrick.florek@gmail.com",
  cdkVersion: "2.278.0",
  jsiiVersion: "~6.0.0",
  defaultReleaseBranch: "main",
  name: "@pepperize/cdk-dynamodb-backup",
  description: "Backup and restore AWS DynamoDB Table to AWS S3 Bucket with AWS Data Pipeline.",
  keywords: ["aws", "cdk", "dynamodb", "table", "s3", "bucket", "data pipeline", "emr", "backup", "restore"],
  repositoryUrl: "https://github.com/pepperize/cdk-dynamodb-backup.git",

  minNodeVersion: "22.13.0",
  workflowNodeVersion: "24.x",
  jestOptions: {
    jestVersion: "^30",
  },
  packageManager: javascript.NodePackageManager.YARN_CLASSIC,

  devDeps: ["@pepperize/projen-awscdk-construct@~0.1.2", "@types/node@^22", "typescript@~6.0"],
  peerDeps: ["@pepperize/cdk-private-bucket@^0.0.599"],
  deps: ["@pepperize/cdk-private-bucket"],

  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  publishToNuget: {
    dotNetNamespace: "Pepperize.CDK",
    packageId: "Pepperize.CDK.DynamodbBackup",
  },
  publishToPypi: {
    distName: "pepperize.cdk-dynamodb-backup",
    module: "pepperize_cdk_dynamodb_backup",
  },
  publishToMaven: {
    mavenGroupId: "com.pepperize",
    mavenArtifactId: "cdk-dynamodb-backup",
    javaPackage: "com.pepperize.cdk.dynamodb_backup",
  },

  gitpod: true,
});

project.gitpod.addCustomTask({
  name: "setup",
  init: "yarn install && npx projen build",
  command: "npx projen watch",
});

project.gitpod.addVscodeExtensions("dbaeumer.vscode-eslint");

project.synth();
