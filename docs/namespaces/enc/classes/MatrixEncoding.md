[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [enc](../README.md) / MatrixEncoding

# Class: MatrixEncoding\<T\>

## Type Parameters

• **T**

## Implements

- [`Encoding`](../interfaces/Encoding.md)\<`T`, [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>\>

## Constructors

### new MatrixEncoding()

> **new MatrixEncoding**\<`T`\>(`ops`): [`MatrixEncoding`](MatrixEncoding.md)\<`T`\>

#### Parameters

• **ops**: [`Ops`](../../ops/interfaces/Ops.md)\<`T`\>

#### Returns

[`MatrixEncoding`](MatrixEncoding.md)\<`T`\>

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:31](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L31)

## Properties

### format

> `readonly` **format**: `"mat"` = `EncodingFormat.Matrix`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`format`](../interfaces/Encoding.md#format)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:24](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L24)

## Methods

### genK()

> **genK**(`K`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **K**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genK`](../interfaces/Encoding.md#genk)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:38](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L38)

***

### genNegK()

> **genNegK**(`K`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **K**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genNegK`](../interfaces/Encoding.md#gennegk)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:64](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L64)

***

### genNegOne()

> **genNegOne**(`K`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **K**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genNegOne`](../interfaces/Encoding.md#gennegone)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:82](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L82)

***

### genOne()

> **genOne**(`K`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **K**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genOne`](../interfaces/Encoding.md#genone)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:97](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L97)

***

### genZero()

> **genZero**(`K`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **K**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`genZero`](../interfaces/Encoding.md#genzero)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:112](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L112)

***

### pow()

> **pow**(`A`, `n`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **A**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

• **n**: `T`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`pow`](../interfaces/Encoding.md#pow)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:127](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L127)

***

### shift()

> **shift**(`A`, `delta`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **A**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

• **delta**: `number`

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`shift`](../interfaces/Encoding.md#shift)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:145](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L145)

***

### square()

> **square**(`A`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **A**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`square`](../interfaces/Encoding.md#square)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:174](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L174)

***

### times()

> **times**(`A`, `B`): [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Parameters

• **A**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

• **B**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Returns

[`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`times`](../interfaces/Encoding.md#times)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:178](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L178)

***

### toValue()

> **toValue**(`data`, `delta`, `terms`?): `T`

#### Parameters

• **data**: [`Matrix`](../../../type-aliases/Matrix.md)\<`T`\>

• **delta**: `number` = `0`

• **terms?**: `T`[]

#### Returns

`T`

#### Implementation of

[`Encoding`](../interfaces/Encoding.md).[`toValue`](../interfaces/Encoding.md#tovalue)

#### Defined in

[src/kbonacci/encoding/matrix/matrixEncoding.ts:182](https://github.com/havelessbemore/nacci/blob/bc4a36e15908f86b73f26cfd35bbc6f31d0881eb/src/kbonacci/encoding/matrix/matrixEncoding.ts#L182)
