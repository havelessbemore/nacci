[nacci](../README.md) / [enc](../modules/enc.md) / RevSumEncoding

# Class: RevSumEncoding\<T\>

[enc](../modules/enc.md).RevSumEncoding

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Encoding`](../interfaces/enc.Encoding.md)\<`T`, `T`[]\>

## Table of contents

### Constructors

- [constructor](enc.RevSumEncoding.md#constructor)

### Properties

- [\_0](enc.RevSumEncoding.md#_0)
- [\_1](enc.RevSumEncoding.md#_1)
- [\_neg1](enc.RevSumEncoding.md#_neg1)
- [format](enc.RevSumEncoding.md#format)
- [ops](enc.RevSumEncoding.md#ops)

### Methods

- [genK](enc.RevSumEncoding.md#genk)
- [genNegK](enc.RevSumEncoding.md#gennegk)
- [genNegOne](enc.RevSumEncoding.md#gennegone)
- [genOne](enc.RevSumEncoding.md#genone)
- [genZero](enc.RevSumEncoding.md#genzero)
- [get](enc.RevSumEncoding.md#get)
- [pow](enc.RevSumEncoding.md#pow)
- [shift](enc.RevSumEncoding.md#shift)
- [square](enc.RevSumEncoding.md#square)
- [times](enc.RevSumEncoding.md#times)
- [toValue](enc.RevSumEncoding.md#tovalue)

## Constructors

### constructor

• **new RevSumEncoding**\<`T`\>(`ops`): [`RevSumEncoding`](enc.RevSumEncoding.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | [`Ops`](../interfaces/ops.Ops.md)\<`T`\> |

#### Returns

[`RevSumEncoding`](enc.RevSumEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L14)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:11](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L11)

___

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:12](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L12)

___

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L10)

___

### format

• `Readonly` **format**: ``"rsum"``

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:8](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L8)

___

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L14)

## Methods

### genK

▸ **genK**(`K`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genK](../interfaces/enc.Encoding.md#genk)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:20](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L20)

___

### genNegK

▸ **genNegK**(`K`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegK](../interfaces/enc.Encoding.md#gennegk)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:31](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L31)

___

### genNegOne

▸ **genNegOne**(`K`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegOne](../interfaces/enc.Encoding.md#gennegone)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:39](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L39)

___

### genOne

▸ **genOne**(`K`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genOne](../interfaces/enc.Encoding.md#genone)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:47](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L47)

___

### genZero

▸ **genZero**(`K`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genZero](../interfaces/enc.Encoding.md#genzero)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:51](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L51)

___

### get

▸ **get**(`A`, `y`, `x`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `T`[] |
| `y` | `number` |
| `x` | `number` |

#### Returns

`T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:59](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L59)

___

### pow

▸ **pow**(`A`, `n`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `T`[] |
| `n` | `T` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[pow](../interfaces/enc.Encoding.md#pow)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:75](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L75)

___

### shift

▸ **shift**(`A`, `delta`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `T`[] |
| `delta` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[shift](../interfaces/enc.Encoding.md#shift)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:93](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L93)

___

### square

▸ **square**(`A`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `T`[] |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[square](../interfaces/enc.Encoding.md#square)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:111](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L111)

___

### times

▸ **times**(`A`, `B`): `T`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `T`[] |
| `B` | `T`[] |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[times](../interfaces/enc.Encoding.md#times)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:115](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L115)

___

### toValue

▸ **toValue**(`data`, `delta?`, `terms?`): `T`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `T`[] | `undefined` |
| `delta` | `number` | `0` |
| `terms?` | `T`[] | `undefined` |

#### Returns

`T`

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[toValue](../interfaces/enc.Encoding.md#tovalue)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:134](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/revSum/revSumEncoding.ts#L134)
