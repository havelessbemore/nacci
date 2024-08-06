[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [ops](../README.md) / BigOps

# Class: BigOps

## Implements

- [`Ops`](../interfaces/Ops.md)\<`bigint`\>

## Constructors

### new BigOps()

> **new BigOps**(): [`BigOps`](BigOps.md)

#### Returns

[`BigOps`](BigOps.md)

## Methods

### cast()

> **cast**(`a`): `bigint`

#### Parameters

• **a**: `string` \| `number` \| `bigint` \| `boolean`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`cast`](../interfaces/Ops.md#cast)

#### Defined in

[src/ops/bigOps.ts:4](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L4)

***

### dividedBy()

> **dividedBy**(`a`, `b`): `bigint`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`dividedBy`](../interfaces/Ops.md#dividedby)

#### Defined in

[src/ops/bigOps.ts:7](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L7)

***

### equal()

> **equal**(`a`, `b`): `boolean`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`equal`](../interfaces/Ops.md#equal)

#### Defined in

[src/ops/bigOps.ts:10](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L10)

***

### half()

> **half**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`half`](../interfaces/Ops.md#half)

#### Defined in

[src/ops/bigOps.ts:13](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L13)

***

### isOdd()

> **isOdd**(`a`): `boolean`

#### Parameters

• **a**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`isOdd`](../interfaces/Ops.md#isodd)

#### Defined in

[src/ops/bigOps.ts:16](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L16)

***

### larger()

> **larger**(`a`, `b`): `boolean`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`larger`](../interfaces/Ops.md#larger)

#### Defined in

[src/ops/bigOps.ts:19](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L19)

***

### largerEq()

> **largerEq**(`a`, `b`): `boolean`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`largerEq`](../interfaces/Ops.md#largereq)

#### Defined in

[src/ops/bigOps.ts:22](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L22)

***

### minus()

> **minus**(`a`, `b`): `bigint`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`minus`](../interfaces/Ops.md#minus)

#### Defined in

[src/ops/bigOps.ts:25](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L25)

***

### minus1()

> **minus1**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`minus1`](../interfaces/Ops.md#minus1)

#### Defined in

[src/ops/bigOps.ts:28](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L28)

***

### mod()

> **mod**(`a`, `b`): `bigint`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`mod`](../interfaces/Ops.md#mod)

#### Defined in

[src/ops/bigOps.ts:31](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L31)

***

### negative()

> **negative**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`negative`](../interfaces/Ops.md#negative)

#### Defined in

[src/ops/bigOps.ts:34](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L34)

***

### plus()

> **plus**(`a`, `b`): `bigint`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`plus`](../interfaces/Ops.md#plus)

#### Defined in

[src/ops/bigOps.ts:37](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L37)

***

### plus1()

> **plus1**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`plus1`](../interfaces/Ops.md#plus1)

#### Defined in

[src/ops/bigOps.ts:40](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L40)

***

### sign()

> **sign**(`a`): `number`

#### Parameters

• **a**: `bigint`

#### Returns

`number`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`sign`](../interfaces/Ops.md#sign)

#### Defined in

[src/ops/bigOps.ts:43](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L43)

***

### smaller()

> **smaller**(`a`, `b`): `boolean`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`smaller`](../interfaces/Ops.md#smaller)

#### Defined in

[src/ops/bigOps.ts:46](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L46)

***

### smallerEq()

> **smallerEq**(`a`, `b`): `boolean`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`boolean`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`smallerEq`](../interfaces/Ops.md#smallereq)

#### Defined in

[src/ops/bigOps.ts:49](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L49)

***

### square()

> **square**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`square`](../interfaces/Ops.md#square)

#### Defined in

[src/ops/bigOps.ts:52](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L52)

***

### times()

> **times**(`a`, `b`): `bigint`

#### Parameters

• **a**: `bigint`

• **b**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`times`](../interfaces/Ops.md#times)

#### Defined in

[src/ops/bigOps.ts:55](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L55)

***

### toNumber()

> **toNumber**(`a`): `number`

#### Parameters

• **a**: `bigint`

#### Returns

`number`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`toNumber`](../interfaces/Ops.md#tonumber)

#### Defined in

[src/ops/bigOps.ts:58](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L58)

***

### trunc()

> **trunc**(`a`): `bigint`

#### Parameters

• **a**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Ops`](../interfaces/Ops.md).[`trunc`](../interfaces/Ops.md#trunc)

#### Defined in

[src/ops/bigOps.ts:61](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/ops/bigOps.ts#L61)
