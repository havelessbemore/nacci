[nacci](../README.md) / [enc](../modules/enc.md) / SumEncoding

# Class: SumEncoding\<T\>

[enc](../modules/enc.md).SumEncoding

## Type parameters

| Name |
| :--- |
| `T`  |

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
| :--- |
| `T`  |

#### Parameters

| Name  | Type                                     |
| :---- | :--------------------------------------- |
| `ops` | [`Ops`](../interfaces/ops.Ops.md)\<`T`\> |

#### Returns

[`SumEncoding`](enc.SumEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:15](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L15)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:11](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L11)

---

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:12](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L12)

---

### \_2

• `Private` **\_2**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:13](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L13)

---

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L10)

---

### format

• `Readonly` **format**: `"sum"`

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:8](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L8)

---

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:15](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L15)

## Methods

### genK

▸ **genK**(`K`): `T`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genK](../interfaces/enc.Encoding.md#genk)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:22](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L22)

---

### genNegK

▸ **genNegK**(`K`): `T`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegK](../interfaces/enc.Encoding.md#gennegk)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:34](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L34)

---

### genNegOne

▸ **genNegOne**(`K`): `T`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegOne](../interfaces/enc.Encoding.md#gennegone)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:42](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L42)

---

### genOne

▸ **genOne**(`K`): `T`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genOne](../interfaces/enc.Encoding.md#genone)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:52](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L52)

---

### genZero

▸ **genZero**(`K`): `T`[]

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genZero](../interfaces/enc.Encoding.md#genzero)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:60](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L60)

---

### get

▸ **get**(`A`, `y`, `x`): `T`

#### Parameters

| Name | Type     |
| :--- | :------- |
| `A`  | `T`[]    |
| `y`  | `number` |
| `x`  | `number` |

#### Returns

`T`

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:64](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L64)

---

### pow

▸ **pow**(`A`, `n`): `T`[]

#### Parameters

| Name | Type  |
| :--- | :---- |
| `A`  | `T`[] |
| `n`  | `T`   |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[pow](../interfaces/enc.Encoding.md#pow)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:78](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L78)

---

### shift

▸ **shift**(`A`, `delta`): `T`[]

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `A`     | `T`[]    |
| `delta` | `number` |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[shift](../interfaces/enc.Encoding.md#shift)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:96](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L96)

---

### square

▸ **square**(`A`): `T`[]

#### Parameters

| Name | Type  |
| :--- | :---- |
| `A`  | `T`[] |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[square](../interfaces/enc.Encoding.md#square)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:114](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L114)

---

### times

▸ **times**(`A`, `B`): `T`[]

#### Parameters

| Name | Type  |
| :--- | :---- |
| `A`  | `T`[] |
| `B`  | `T`[] |

#### Returns

`T`[]

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[times](../interfaces/enc.Encoding.md#times)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:118](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L118)

---

### toValue

▸ **toValue**(`data`, `delta?`, `terms?`): `T`

#### Parameters

| Name     | Type     | Default value |
| :------- | :------- | :------------ |
| `data`   | `T`[]    | `undefined`   |
| `delta`  | `number` | `0`           |
| `terms?` | `T`[]    | `undefined`   |

#### Returns

`T`

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[toValue](../interfaces/enc.Encoding.md#tovalue)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:136](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/encoding/sum/sumEncoding.ts#L136)
