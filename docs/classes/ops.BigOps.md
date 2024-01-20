[nacci](../README.md) / [ops](../modules/ops.md) / BigOps

# Class: BigOps

[ops](../modules/ops.md).BigOps

## Implements

- [`Ops`](../interfaces/ops.Ops.md)\<`bigint`\>

## Table of contents

### Constructors

- [constructor](ops.BigOps.md#constructor)

### Methods

- [cast](ops.BigOps.md#cast)
- [dividedBy](ops.BigOps.md#dividedby)
- [equal](ops.BigOps.md#equal)
- [half](ops.BigOps.md#half)
- [isOdd](ops.BigOps.md#isodd)
- [larger](ops.BigOps.md#larger)
- [largerEq](ops.BigOps.md#largereq)
- [minus](ops.BigOps.md#minus)
- [minus1](ops.BigOps.md#minus1)
- [mod](ops.BigOps.md#mod)
- [negative](ops.BigOps.md#negative)
- [plus](ops.BigOps.md#plus)
- [plus1](ops.BigOps.md#plus1)
- [sign](ops.BigOps.md#sign)
- [smaller](ops.BigOps.md#smaller)
- [smallerEq](ops.BigOps.md#smallereq)
- [square](ops.BigOps.md#square)
- [times](ops.BigOps.md#times)
- [toNumber](ops.BigOps.md#tonumber)
- [trunc](ops.BigOps.md#trunc)

## Constructors

### constructor

• **new BigOps**(): [`BigOps`](ops.BigOps.md)

#### Returns

[`BigOps`](ops.BigOps.md)

## Methods

### cast

▸ **cast**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `string` \| `number` \| `bigint` \| `boolean` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[cast](../interfaces/ops.Ops.md#cast)

#### Defined in

[src/ops/bigOps.ts:4](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L4)

___

### dividedBy

▸ **dividedBy**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[dividedBy](../interfaces/ops.Ops.md#dividedby)

#### Defined in

[src/ops/bigOps.ts:7](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L7)

___

### equal

▸ **equal**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[equal](../interfaces/ops.Ops.md#equal)

#### Defined in

[src/ops/bigOps.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L10)

___

### half

▸ **half**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[half](../interfaces/ops.Ops.md#half)

#### Defined in

[src/ops/bigOps.ts:13](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L13)

___

### isOdd

▸ **isOdd**(`a`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[isOdd](../interfaces/ops.Ops.md#isodd)

#### Defined in

[src/ops/bigOps.ts:16](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L16)

___

### larger

▸ **larger**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[larger](../interfaces/ops.Ops.md#larger)

#### Defined in

[src/ops/bigOps.ts:19](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L19)

___

### largerEq

▸ **largerEq**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[largerEq](../interfaces/ops.Ops.md#largereq)

#### Defined in

[src/ops/bigOps.ts:22](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L22)

___

### minus

▸ **minus**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[minus](../interfaces/ops.Ops.md#minus)

#### Defined in

[src/ops/bigOps.ts:25](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L25)

___

### minus1

▸ **minus1**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[minus1](../interfaces/ops.Ops.md#minus1)

#### Defined in

[src/ops/bigOps.ts:28](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L28)

___

### mod

▸ **mod**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[mod](../interfaces/ops.Ops.md#mod)

#### Defined in

[src/ops/bigOps.ts:31](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L31)

___

### negative

▸ **negative**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[negative](../interfaces/ops.Ops.md#negative)

#### Defined in

[src/ops/bigOps.ts:34](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L34)

___

### plus

▸ **plus**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[plus](../interfaces/ops.Ops.md#plus)

#### Defined in

[src/ops/bigOps.ts:37](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L37)

___

### plus1

▸ **plus1**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[plus1](../interfaces/ops.Ops.md#plus1)

#### Defined in

[src/ops/bigOps.ts:40](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L40)

___

### sign

▸ **sign**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`number`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[sign](../interfaces/ops.Ops.md#sign)

#### Defined in

[src/ops/bigOps.ts:43](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L43)

___

### smaller

▸ **smaller**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[smaller](../interfaces/ops.Ops.md#smaller)

#### Defined in

[src/ops/bigOps.ts:46](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L46)

___

### smallerEq

▸ **smallerEq**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`boolean`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[smallerEq](../interfaces/ops.Ops.md#smallereq)

#### Defined in

[src/ops/bigOps.ts:49](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L49)

___

### square

▸ **square**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[square](../interfaces/ops.Ops.md#square)

#### Defined in

[src/ops/bigOps.ts:52](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L52)

___

### times

▸ **times**(`a`, `b`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |
| `b` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[times](../interfaces/ops.Ops.md#times)

#### Defined in

[src/ops/bigOps.ts:55](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L55)

___

### toNumber

▸ **toNumber**(`a`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`number`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[toNumber](../interfaces/ops.Ops.md#tonumber)

#### Defined in

[src/ops/bigOps.ts:58](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L58)

___

### trunc

▸ **trunc**(`a`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Ops](../interfaces/ops.Ops.md).[trunc](../interfaces/ops.Ops.md#trunc)

#### Defined in

[src/ops/bigOps.ts:61](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/bigOps.ts#L61)
