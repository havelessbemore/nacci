[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [enc](../README.md) / SumEncoding

# Class: SumEncoding\<T\>

## Type Parameters

• **T**

## Implements

- [`Encoding`](../interfaces/Encoding.md)\<`T`, `T`[]\>

## Constructors

### new SumEncoding()

> **new SumEncoding**\<`T`\>(`ops`): [`SumEncoding`](SumEncoding.md)\<`T`\>

#### Parameters

• **ops**: [`Ops`](../../ops/interfaces/Ops.md)\<`T`\>

#### Returns

[`SumEncoding`](SumEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:15](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L15)

## Properties

### format

> `readonly` **format**: `"sum"` = `EncodingFormat.Sum`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`format`](../interfaces/Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/sum/sumEncoding.ts:8](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L8)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:22](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L22)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:34](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L34)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:42](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L42)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:52](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L52)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:60](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L60)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:64](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L64)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:78](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L78)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:96](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L96)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:114](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L114)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:118](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L118)

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

[src/kbonacci/encoding/sum/sumEncoding.ts:136](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/encoding/sum/sumEncoding.ts#L136)
