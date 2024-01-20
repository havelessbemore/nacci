[nacci](../README.md) / [enc](../modules/enc.md) / Encoding

# Interface: Encoding\<V, D\>

[enc](../modules/enc.md).Encoding

## Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `V` |
| `D` | `unknown` |

## Implemented by

- [`MatrixEncoding`](../classes/enc.MatrixEncoding.md)
- [`RevSumEncoding`](../classes/enc.RevSumEncoding.md)
- [`SumEncoding`](../classes/enc.SumEncoding.md)
- [`TermEncoding`](../classes/enc.TermEncoding.md)

## Table of contents

### Properties

- [format](enc.Encoding.md#format)

### Methods

- [genK](enc.Encoding.md#genk)
- [genNegK](enc.Encoding.md#gennegk)
- [genNegOne](enc.Encoding.md#gennegone)
- [genOne](enc.Encoding.md#genone)
- [genZero](enc.Encoding.md#genzero)
- [pow](enc.Encoding.md#pow)
- [shift](enc.Encoding.md#shift)
- [square](enc.Encoding.md#square)
- [times](enc.Encoding.md#times)
- [toValue](enc.Encoding.md#tovalue)

## Properties

### format

• `Readonly` **format**: `string`

#### Defined in

[src/kbonacci/encoding/encoding.ts:9](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L9)

## Methods

### genK

▸ **genK**(`K`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:10](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L10)

___

### genNegK

▸ **genNegK**(`K`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:11](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L11)

___

### genNegOne

▸ **genNegOne**(`K`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:12](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L12)

___

### genOne

▸ **genOne**(`K`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:13](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L13)

___

### genZero

▸ **genZero**(`K`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:14](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L14)

___

### pow

▸ **pow**(`A`, `n`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `D` |
| `n` | `V` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:15](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L15)

___

### shift

▸ **shift**(`A`, `delta`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `D` |
| `delta` | `number` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:16](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L16)

___

### square

▸ **square**(`A`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `D` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:17](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L17)

___

### times

▸ **times**(`A`, `B`): `D`

#### Parameters

| Name | Type |
| :------ | :------ |
| `A` | `D` |
| `B` | `D` |

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:18](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L18)

___

### toValue

▸ **toValue**(`data`, `delta?`, `customTerms?`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `D` |
| `delta?` | `number` |
| `customTerms?` | `V`[] |

#### Returns

`V`

#### Defined in

[src/kbonacci/encoding/encoding.ts:19](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/encoding/encoding.ts#L19)
