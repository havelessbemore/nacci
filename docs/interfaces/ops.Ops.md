[nacci](../README.md) / [ops](../modules/ops.md) / Ops

# Interface: Ops\<T\>

[ops](../modules/ops.md).Ops

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `T`  | `unknown` |

## Implemented by

- [`BigOps`](../classes/ops.BigOps.md)
- [`NumOps`](../classes/ops.NumOps.md)
- [`SafeNumOps`](../classes/ops.SafeNumOps.md)

## Table of contents

### Methods

- [cast](ops.Ops.md#cast)
- [dividedBy](ops.Ops.md#dividedby)
- [equal](ops.Ops.md#equal)
- [half](ops.Ops.md#half)
- [isOdd](ops.Ops.md#isodd)
- [larger](ops.Ops.md#larger)
- [largerEq](ops.Ops.md#largereq)
- [minus](ops.Ops.md#minus)
- [minus1](ops.Ops.md#minus1)
- [mod](ops.Ops.md#mod)
- [negative](ops.Ops.md#negative)
- [plus](ops.Ops.md#plus)
- [plus1](ops.Ops.md#plus1)
- [sign](ops.Ops.md#sign)
- [smaller](ops.Ops.md#smaller)
- [smallerEq](ops.Ops.md#smallereq)
- [square](ops.Ops.md#square)
- [times](ops.Ops.md#times)
- [toNumber](ops.Ops.md#tonumber)
- [trunc](ops.Ops.md#trunc)

## Methods

### cast

▸ **cast**(`value`): `T`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `unknown` |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:3](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L3)

---

### dividedBy

▸ **dividedBy**(`dividend`, `divisor`): `T`

#### Parameters

| Name       | Type |
| :--------- | :--- |
| `dividend` | `T`  |
| `divisor`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:15](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L15)

---

### equal

▸ **equal**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:8](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L8)

---

### half

▸ **half**(`value`): `T`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:16](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L16)

---

### isOdd

▸ **isOdd**(`value`): `boolean`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L17)

---

### larger

▸ **larger**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:9](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L9)

---

### largerEq

▸ **largerEq**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L10)

---

### minus

▸ **minus**(`minuend`, `subtrahend`): `T`

#### Parameters

| Name         | Type |
| :----------- | :--- |
| `minuend`    | `T`  |
| `subtrahend` | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:18](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L18)

---

### minus1

▸ **minus1**(`a`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:19](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L19)

---

### mod

▸ **mod**(`dividend`, `divisor`): `T`

#### Parameters

| Name       | Type |
| :--------- | :--- |
| `dividend` | `T`  |
| `divisor`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:20](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L20)

---

### negative

▸ **negative**(`a`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:21](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L21)

---

### plus

▸ **plus**(`a`, `b`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:22](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L22)

---

### plus1

▸ **plus1**(`a`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:23](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L23)

---

### sign

▸ **sign**(`a`): `number`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |

#### Returns

`number`

#### Defined in

[src/ops/ops.ts:24](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L24)

---

### smaller

▸ **smaller**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:11](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L11)

---

### smallerEq

▸ **smallerEq**(`a`, `b`): `boolean`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`boolean`

#### Defined in

[src/ops/ops.ts:12](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L12)

---

### square

▸ **square**(`value`): `T`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:25](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L25)

---

### times

▸ **times**(`a`, `b`): `T`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |
| `b`  | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:26](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L26)

---

### toNumber

▸ **toNumber**(`a`): `number`

#### Parameters

| Name | Type |
| :--- | :--- |
| `a`  | `T`  |

#### Returns

`number`

#### Defined in

[src/ops/ops.ts:4](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L4)

---

### trunc

▸ **trunc**(`value`): `T`

#### Parameters

| Name    | Type |
| :------ | :--- |
| `value` | `T`  |

#### Returns

`T`

#### Defined in

[src/ops/ops.ts:27](https://github.com/havelessbemore/nacci/blob/13a7465/src/ops/ops.ts#L27)
