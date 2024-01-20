[nacci](../README.md) / [enc](../modules/enc.md) / SumEncoding

# Class: SumEncoding\<T\>

[enc](../modules/enc.md).SumEncoding

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Encoding`](../interfaces/enc.Encoding.md)\<`T`, `T`[]\>

## Table of contents

### Constructors

- [constructor](enc.SumEncoding.md#constructor)

### Properties

- [\_0](enc.SumEncoding.md#_0)
- [\_1](enc.SumEncoding.md#_1)
- [\_2](enc.SumEncoding.md#_2)
- [\_neg1](enc.SumEncoding.md#_neg1)
- [format](enc.SumEncoding.md#format)
- [ops](enc.SumEncoding.md#ops)

### Methods

- [genK](enc.SumEncoding.md#genk)
- [genNegK](enc.SumEncoding.md#gennegk)
- [genNegOne](enc.SumEncoding.md#gennegone)
- [genOne](enc.SumEncoding.md#genone)
- [genZero](enc.SumEncoding.md#genzero)
- [get](enc.SumEncoding.md#get)
- [pow](enc.SumEncoding.md#pow)
- [shift](enc.SumEncoding.md#shift)
- [square](enc.SumEncoding.md#square)
- [times](enc.SumEncoding.md#times)
- [toValue](enc.SumEncoding.md#tovalue)

## Constructors

### constructor

• **new SumEncoding**\<`T`\>(`ops`): [`SumEncoding`](enc.SumEncoding.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | [`Ops`](../interfaces/ops.Ops.md)\<`T`\> |

#### Returns

[`SumEncoding`](enc.SumEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L14)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L10)

___

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:11](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L11)

___

### \_2

• `Private` **\_2**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:12](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L12)

___

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:9](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L9)

___

### format

• `Readonly` **format**: ``"sum"``

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:7](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L7)

___

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L14)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:21](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L21)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:33](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L33)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:41](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L41)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:51](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L51)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:59](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L59)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:63](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L63)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:77](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L77)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:95](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L95)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:113](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L113)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:117](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L117)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:135](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/sum/sumEncoding.ts#L135)
