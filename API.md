# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataPipelineBackup <a name="DataPipelineBackup" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup"></a>

- *Implements:* aws-cdk-lib.ITaggable

#### Initializers <a name="Initializers" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer"></a>

```typescript
import { DataPipelineBackup } from '@pepperize/cdk-dynamodb-backup'

new DataPipelineBackup(scope: Construct, id: string, props: DataPipelineBackupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps">DataPipelineBackupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps">DataPipelineBackupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.isConstruct"></a>

```typescript
import { DataPipelineBackup } from '@pepperize/cdk-dynamodb-backup'

DataPipelineBackup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.instanceProfile">instanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.CfnInstanceProfile</code> | The instance profile of the emr cluster resources. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.resourceRole">resourceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the emr cluster resources. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by datapipelines service. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.CfnInstanceProfile

The instance profile of the emr cluster resources.

---

##### `resourceRole`<sup>Required</sup> <a name="resourceRole" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.resourceRole"></a>

```typescript
public readonly resourceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the emr cluster resources.

---

##### `role`<sup>Required</sup> <a name="role" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by datapipelines service.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackup.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


### DataPipelineRestore <a name="DataPipelineRestore" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore"></a>

- *Implements:* aws-cdk-lib.ITaggable

#### Initializers <a name="Initializers" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer"></a>

```typescript
import { DataPipelineRestore } from '@pepperize/cdk-dynamodb-backup'

new DataPipelineRestore(scope: Construct, id: string, props: DataPipelineRestoreProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.props">props</a></code> | <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps">DataPipelineRestoreProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.Initializer.parameter.props"></a>

- *Type:* <a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps">DataPipelineRestoreProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.isConstruct"></a>

```typescript
import { DataPipelineRestore } from '@pepperize/cdk-dynamodb-backup'

DataPipelineRestore.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.instanceProfile">instanceProfile</a></code> | <code>aws-cdk-lib.aws_iam.CfnInstanceProfile</code> | The instance profile of the emr cluster resources. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.resourceRole">resourceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the emr cluster resources. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.role">role</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by datapipelines service. |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.tags">tags</a></code> | <code>aws-cdk-lib.TagManager</code> | TagManager to set, remove and format tags. |

---

##### `node`<sup>Required</sup> <a name="node" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `instanceProfile`<sup>Required</sup> <a name="instanceProfile" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.instanceProfile"></a>

```typescript
public readonly instanceProfile: CfnInstanceProfile;
```

- *Type:* aws-cdk-lib.aws_iam.CfnInstanceProfile

The instance profile of the emr cluster resources.

---

##### `resourceRole`<sup>Required</sup> <a name="resourceRole" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.resourceRole"></a>

```typescript
public readonly resourceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the emr cluster resources.

---

##### `role`<sup>Required</sup> <a name="role" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.role"></a>

```typescript
public readonly role: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by datapipelines service.

---

##### `tags`<sup>Required</sup> <a name="tags" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestore.property.tags"></a>

```typescript
public readonly tags: TagManager;
```

- *Type:* aws-cdk-lib.TagManager

TagManager to set, remove and format tags.

---


## Structs <a name="Structs" id="Structs"></a>

### DataPipelineBackupOptions <a name="DataPipelineBackupOptions" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.Initializer"></a>

```typescript
import { DataPipelineBackupOptions } from '@pepperize/cdk-dynamodb-backup'

const dataPipelineBackupOptions: DataPipelineBackupOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.dynamoDbThroughputRatio">dynamoDbThroughputRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.schedule">schedule</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |

---

##### `dynamoDbThroughputRatio`<sup>Optional</sup> <a name="dynamoDbThroughputRatio" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.dynamoDbThroughputRatio"></a>

```typescript
public readonly dynamoDbThroughputRatio: number;
```

- *Type:* number

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupOptions.property.schedule"></a>

```typescript
public readonly schedule: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

### DataPipelineBackupProps <a name="DataPipelineBackupProps" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.Initializer"></a>

```typescript
import { DataPipelineBackupProps } from '@pepperize/cdk-dynamodb-backup'

const dataPipelineBackupProps: DataPipelineBackupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.dynamoDbThroughputRatio">dynamoDbThroughputRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.Duration</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.backupBucket">backupBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |

---

##### `dynamoDbThroughputRatio`<sup>Optional</sup> <a name="dynamoDbThroughputRatio" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.dynamoDbThroughputRatio"></a>

```typescript
public readonly dynamoDbThroughputRatio: number;
```

- *Type:* number

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.schedule"></a>

```typescript
public readonly schedule: Duration;
```

- *Type:* aws-cdk-lib.Duration

---

##### `backupBucket`<sup>Required</sup> <a name="backupBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.backupBucket"></a>

```typescript
public readonly backupBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `table`<sup>Required</sup> <a name="table" id="@pepperize/cdk-dynamodb-backup.DataPipelineBackupProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---

### DataPipelineRestoreOptions <a name="DataPipelineRestoreOptions" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.Initializer"></a>

```typescript
import { DataPipelineRestoreOptions } from '@pepperize/cdk-dynamodb-backup'

const dataPipelineRestoreOptions: DataPipelineRestoreOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.dynamoDbThroughputRatio">dynamoDbThroughputRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |

---

##### `dynamoDbThroughputRatio`<sup>Optional</sup> <a name="dynamoDbThroughputRatio" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.dynamoDbThroughputRatio"></a>

```typescript
public readonly dynamoDbThroughputRatio: number;
```

- *Type:* number

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreOptions.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

### DataPipelineRestoreProps <a name="DataPipelineRestoreProps" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps"></a>

#### Initializer <a name="Initializer" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.Initializer"></a>

```typescript
import { DataPipelineRestoreProps } from '@pepperize/cdk-dynamodb-backup'

const dataPipelineRestoreProps: DataPipelineRestoreProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.dynamoDbThroughputRatio">dynamoDbThroughputRatio</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.logsBucket">logsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.restoreBucket">restoreBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.restoreFolder">restoreFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.table">table</a></code> | <code>aws-cdk-lib.aws_dynamodb.ITable</code> | *No description.* |

---

##### `dynamoDbThroughputRatio`<sup>Optional</sup> <a name="dynamoDbThroughputRatio" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.dynamoDbThroughputRatio"></a>

```typescript
public readonly dynamoDbThroughputRatio: number;
```

- *Type:* number

---

##### `logsBucket`<sup>Optional</sup> <a name="logsBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.logsBucket"></a>

```typescript
public readonly logsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `pipelineName`<sup>Optional</sup> <a name="pipelineName" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `restoreBucket`<sup>Required</sup> <a name="restoreBucket" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.restoreBucket"></a>

```typescript
public readonly restoreBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `restoreFolder`<sup>Required</sup> <a name="restoreFolder" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.restoreFolder"></a>

```typescript
public readonly restoreFolder: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@pepperize/cdk-dynamodb-backup.DataPipelineRestoreProps.property.table"></a>

```typescript
public readonly table: ITable;
```

- *Type:* aws-cdk-lib.aws_dynamodb.ITable

---



