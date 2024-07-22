[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [gen](../README.md) / SlidingWindowGen

# Class: SlidingWindowGen\<K, V\>

## Type Parameters

• **K**

• **V**

## Implements

- [`Generator`](../interfaces/Generator.md)\<[`K`](SlidingWindowGen.md#k), `V`\>

## Constructors

### new SlidingWindowGen()

> **new SlidingWindowGen**\<`K`, `V`\>(`K`, `config`): [`SlidingWindowGen`](SlidingWindowGen.md)\<[`K`](SlidingWindowGen.md#k), `V`\>

#### Parameters

• **K**: `number`

• **config**: [`GenConfig`](../interfaces/GenConfig.md)\<[`K`](SlidingWindowGen.md#k), `V`, `never`\>

#### Returns

[`SlidingWindowGen`](SlidingWindowGen.md)\<[`K`](SlidingWindowGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:17](https://github.com/havelessbemore/nacci/blob/19c265384213dac93b72925f12b93fd11a874a66/src/kbonacci/gen/slidingWindowGen.ts#L17)

## Accessors

### K

> `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`K`](../interfaces/Generator.md#k)

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:49](https://github.com/havelessbemore/nacci/blob/19c265384213dac93b72925f12b93fd11a874a66/src/kbonacci/gen/slidingWindowGen.ts#L49)

## Methods

### get()

> **get**(`N`): `V`

#### Parameters

• **N**: [`K`](SlidingWindowGen.md#k)

#### Returns

`V`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`get`](../interfaces/Generator.md#get)

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:53](https://github.com/havelessbemore/nacci/blob/19c265384213dac93b72925f12b93fd11a874a66/src/kbonacci/gen/slidingWindowGen.ts#L53)
