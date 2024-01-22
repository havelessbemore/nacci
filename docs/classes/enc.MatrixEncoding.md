[nacci](../README.md) / [enc](../modules/enc.md) / MatrixEncoding

# Class: MatrixEncoding\<T\>

[enc](../modules/enc.md).MatrixEncoding

## Type parameters

| Name |
| :--- |
| `T`  |

## Implements

- [`Encoding`](../interfaces/enc.Encoding.md)\<`T`, [`Matrix`](../README.md#matrix)\<`T`\>\>

## Table of contents

### Constructors

- [constructor](enc.MatrixEncoding.md#constructor)

### Properties

- [\_0](enc.MatrixEncoding.md#_0)
- [\_1](enc.MatrixEncoding.md#_1)
- [\_2](enc.MatrixEncoding.md#_2)
- [\_neg1](enc.MatrixEncoding.md#_neg1)
- [format](enc.MatrixEncoding.md#format)
- [ops](enc.MatrixEncoding.md#ops)

### Methods

- [genK](enc.MatrixEncoding.md#genk)
- [genNegK](enc.MatrixEncoding.md#gennegk)
- [genNegOne](enc.MatrixEncoding.md#gennegone)
- [genOne](enc.MatrixEncoding.md#genone)
- [genZero](enc.MatrixEncoding.md#genzero)
- [pow](enc.MatrixEncoding.md#pow)
- [shift](enc.MatrixEncoding.md#shift)
- [square](enc.MatrixEncoding.md#square)
- [times](enc.MatrixEncoding.md#times)
- [toValue](enc.MatrixEncoding.md#tovalue)

## Constructors

### constructor

• **new MatrixEncoding**\<`T`\>(`ops`): [`MatrixEncoding`](enc.MatrixEncoding.md)\<`T`\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Parameters

| Name  | Type                                     |
| :---- | :--------------------------------------- |
| `ops` | [`Ops`](../interfaces/ops.Ops.md)\<`T`\> |

#### Returns

[`MatrixEncoding`](enc.MatrixEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:31](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L31)

## Properties

### \_0

• `Private` **\_0**: `T`

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:27](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L27)

---

### \_1

• `Private` **\_1**: `T`

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:28](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L28)

---

### \_2

• `Private` **\_2**: `T`

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:29](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L29)

---

### \_neg1

• `Private` **\_neg1**: `T`

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:26](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L26)

---

### format

• `Readonly` **format**: `"mat"`

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[format](../interfaces/enc.Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:24](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L24)

---

### ops

• `Private` **ops**: [`Ops`](../interfaces/ops.Ops.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:31](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L31)

## Methods

### genK

▸ **genK**(`K`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genK](../interfaces/enc.Encoding.md#genk)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:38](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L38)

---

### genNegK

▸ **genNegK**(`K`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegK](../interfaces/enc.Encoding.md#gennegk)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:64](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L64)

---

### genNegOne

▸ **genNegOne**(`K`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genNegOne](../interfaces/enc.Encoding.md#gennegone)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:82](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L82)

---

### genOne

▸ **genOne**(`K`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genOne](../interfaces/enc.Encoding.md#genone)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:97](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L97)

---

### genZero

▸ **genZero**(`K`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `K`  | `number` |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[genZero](../interfaces/enc.Encoding.md#genzero)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:112](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L112)

---

### pow

▸ **pow**(`A`, `n`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `A`  | [`Matrix`](../README.md#matrix)\<`T`\> |
| `n`  | `T`                                    |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[pow](../interfaces/enc.Encoding.md#pow)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:127](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L127)

---

### shift

▸ **shift**(`A`, `delta`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name    | Type                                   |
| :------ | :------------------------------------- |
| `A`     | [`Matrix`](../README.md#matrix)\<`T`\> |
| `delta` | `number`                               |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[shift](../interfaces/enc.Encoding.md#shift)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:145](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L145)

---

### square

▸ **square**(`A`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `A`  | [`Matrix`](../README.md#matrix)\<`T`\> |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[square](../interfaces/enc.Encoding.md#square)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:174](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L174)

---

### times

▸ **times**(`A`, `B`): [`Matrix`](../README.md#matrix)\<`T`\>

#### Parameters

| Name | Type                                   |
| :--- | :------------------------------------- |
| `A`  | [`Matrix`](../README.md#matrix)\<`T`\> |
| `B`  | [`Matrix`](../README.md#matrix)\<`T`\> |

#### Returns

[`Matrix`](../README.md#matrix)\<`T`\>

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[times](../interfaces/enc.Encoding.md#times)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:178](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L178)

---

### toValue

▸ **toValue**(`data`, `delta?`, `terms?`): `T`

#### Parameters

| Name     | Type                                   | Default value |
| :------- | :------------------------------------- | :------------ |
| `data`   | [`Matrix`](../README.md#matrix)\<`T`\> | `undefined`   |
| `delta`  | `number`                               | `0`           |
| `terms?` | `T`[]                                  | `undefined`   |

#### Returns

`T`

#### Implementation of

[Encoding](../interfaces/enc.Encoding.md).[toValue](../interfaces/enc.Encoding.md#tovalue)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:182](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/encoding/matrix/matrixEncoding.ts#L182)
