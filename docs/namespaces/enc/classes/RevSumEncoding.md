[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [enc](../README.md) / RevSumEncoding

# Class: RevSumEncoding\<T\>

## Type Parameters

• **T**

## Implements

- [`Encoding`](../interfaces/Encoding.md)\<`T`, `T`[]\>

## Constructors

### new RevSumEncoding()

> **new RevSumEncoding**\<`T`\>(`ops`): [`RevSumEncoding`](RevSumEncoding.md)\<`T`\>

#### Parameters

• **ops**: [`Ops`](../../ops/interfaces/Ops.md)\<`T`\>

#### Returns

[`RevSumEncoding`](RevSumEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:14](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L14)

## Properties

### format

> `readonly` **format**: `"rsum"` = `EncodingFormat.RevSum`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`format`](../interfaces/Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:8](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L8)

## Methods

### genK()

> **genK**(`K`): `T`[]

#### Parameters

• **K**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genK`](../interfaces/Encoding.md#genk)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:20](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L20)

***

### genNegK()

> **genNegK**(`K`): `T`[]

#### Parameters

• **K**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genNegK`](../interfaces/Encoding.md#gennegk)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:31](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L31)

***

### genNegOne()

> **genNegOne**(`K`): `T`[]

#### Parameters

• **K**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genNegOne`](../interfaces/Encoding.md#gennegone)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:39](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L39)

***

### genOne()

> **genOne**(`K`): `T`[]

#### Parameters

• **K**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genOne`](../interfaces/Encoding.md#genone)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:47](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L47)

***

### genZero()

> **genZero**(`K`): `T`[]

#### Parameters

• **K**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genZero`](../interfaces/Encoding.md#genzero)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:51](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L51)

***

### get()

> **get**(`A`, `y`, `x`): `T`

#### Parameters

• **A**: `T`[]

• **y**: `number`

• **x**: `number`

#### Returns

`T`

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:59](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L59)

***

### pow()

> **pow**(`A`, `n`): `T`[]

#### Parameters

• **A**: `T`[]

• **n**: `T`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`pow`](../interfaces/Encoding.md#pow)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:75](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L75)

***

### shift()

> **shift**(`A`, `delta`): `T`[]

#### Parameters

• **A**: `T`[]

• **delta**: `number`

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`shift`](../interfaces/Encoding.md#shift)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:93](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L93)

***

### square()

> **square**(`A`): `T`[]

#### Parameters

• **A**: `T`[]

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`square`](../interfaces/Encoding.md#square)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:111](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L111)

***

### times()

> **times**(`A`, `B`): `T`[]

#### Parameters

• **A**: `T`[]

• **B**: `T`[]

#### Returns

`T`[]

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`times`](../interfaces/Encoding.md#times)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:115](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L115)

***

### toValue()

> **toValue**(`data`, `delta`, `terms`?): `T`

#### Parameters

• **data**: `T`[]

• **delta**: `number` = `0`

• **terms?**: `T`[]

#### Returns

`T`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`toValue`](../interfaces/Encoding.md#tovalue)

#### Defined in

[src/kbonacci/encoding/revSum/revSumEncoding.ts:134](https://github.com/havelessbemore/nacci/blob/419f197f5b23c39cb7eb82ae19af760497a0d10d/src/kbonacci/encoding/revSum/revSumEncoding.ts#L134)
