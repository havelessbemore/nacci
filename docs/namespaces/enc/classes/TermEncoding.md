[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [enc](../README.md) / TermEncoding

# Class: TermEncoding\<T\>

## Type Parameters

• **T**

## Implements

- [`Encoding`](../interfaces/Encoding.md)\<`T`, `T`[]\>

## Constructors

### new TermEncoding()

> **new TermEncoding**\<`T`\>(`ops`): [`TermEncoding`](TermEncoding.md)\<`T`\>

#### Parameters

• **ops**: [`Ops`](../../ops/interfaces/Ops.md)\<`T`\>

#### Returns

[`TermEncoding`](TermEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:17](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L17)

## Properties

### format

> `readonly` **format**: `"term"` = `EncodingFormat.Term`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`format`](../interfaces/Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/term/termEncoding.ts:10](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L10)

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

[src/kbonacci/encoding/term/termEncoding.ts:24](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L24)

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

[src/kbonacci/encoding/term/termEncoding.ts:32](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L32)

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

[src/kbonacci/encoding/term/termEncoding.ts:43](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L43)

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

[src/kbonacci/encoding/term/termEncoding.ts:52](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L52)

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

[src/kbonacci/encoding/term/termEncoding.ts:60](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L60)

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

[src/kbonacci/encoding/term/termEncoding.ts:68](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L68)

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

[src/kbonacci/encoding/term/termEncoding.ts:86](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L86)

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

[src/kbonacci/encoding/term/termEncoding.ts:112](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L112)

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

[src/kbonacci/encoding/term/termEncoding.ts:116](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L116)

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

[src/kbonacci/encoding/term/termEncoding.ts:120](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/kbonacci/encoding/term/termEncoding.ts#L120)
