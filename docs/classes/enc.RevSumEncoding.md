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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:13](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L13)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L10)

___

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:11](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L11)

___

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:9](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L9)

___

### format

• `Readonly` **format**: ``"rsum"``

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:7](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L7)

___

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:13](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L13)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:19](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L19)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:30](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L30)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:38](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L38)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:46](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L46)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:50](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L50)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:58](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L58)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:74](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L74)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:92](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L92)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:110](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L110)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:114](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L114)

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

[src/kbonacci/encoding/revSum/revSumEncoding.ts:133](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/revSum/revSumEncoding.ts#L133)
