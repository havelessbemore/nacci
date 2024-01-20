[nacci](../README.md) / [enc](../modules/enc.md) / TermEncoding

# Class: TermEncoding\<T\>

[enc](../modules/enc.md).TermEncoding

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Encoding`](../interfaces/enc.Encoding.md)\<`T`, `T`[]\>

## Table of contents

### Constructors

- [constructor](enc.TermEncoding.md#constructor)

### Properties

- [\_0](enc.TermEncoding.md#_0)
- [\_1](enc.TermEncoding.md#_1)
- [\_2](enc.TermEncoding.md#_2)
- [\_neg1](enc.TermEncoding.md#_neg1)
- [format](enc.TermEncoding.md#format)
- [ops](enc.TermEncoding.md#ops)

### Methods

- [genK](enc.TermEncoding.md#genk)
- [genNegK](enc.TermEncoding.md#gennegk)
- [genNegOne](enc.TermEncoding.md#gennegone)
- [genOne](enc.TermEncoding.md#genone)
- [genZero](enc.TermEncoding.md#genzero)
- [pow](enc.TermEncoding.md#pow)
- [shift](enc.TermEncoding.md#shift)
- [square](enc.TermEncoding.md#square)
- [times](enc.TermEncoding.md#times)
- [toValue](enc.TermEncoding.md#tovalue)

## Constructors

### constructor

• **new TermEncoding**\<`T`\>(`ops`): [`TermEncoding`](enc.TermEncoding.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ops` | [`Ops`](../interfaces/ops.Ops.md)\<`T`\> |

#### Returns

[`TermEncoding`](enc.TermEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L17)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:13](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L13)

___

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L14)

___

### \_2

• `Private` **\_2**: `T`

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:15](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L15)

___

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:12](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L12)

___

### format

• `Readonly` **format**: ``"term"``

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L10)

___

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L17)

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

[src/kbonacci/encoding/term/termEncoding.ts:24](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L24)

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

[src/kbonacci/encoding/term/termEncoding.ts:32](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L32)

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

[src/kbonacci/encoding/term/termEncoding.ts:43](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L43)

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

[src/kbonacci/encoding/term/termEncoding.ts:52](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L52)

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

[src/kbonacci/encoding/term/termEncoding.ts:60](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L60)

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

[src/kbonacci/encoding/term/termEncoding.ts:68](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L68)

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

[src/kbonacci/encoding/term/termEncoding.ts:86](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L86)

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

[src/kbonacci/encoding/term/termEncoding.ts:112](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L112)

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

[src/kbonacci/encoding/term/termEncoding.ts:116](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L116)

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

[src/kbonacci/encoding/term/termEncoding.ts:120](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/term/termEncoding.ts#L120)
