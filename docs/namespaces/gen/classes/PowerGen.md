[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [gen](../README.md) / PowerGen

# Class: PowerGen\<K, V\>

## Type Parameters

• **K**

• **V**

## Implements

- [`Generator`](../interfaces/Generator.md)\<[`K`](PowerGen.md#k), `V`\>

## Constructors

### new PowerGen()

> **new PowerGen**\<`K`, `V`\>(`K`, `config`): [`PowerGen`](PowerGen.md)\<[`K`](PowerGen.md#k), `V`\>

#### Parameters

• **K**: `number`

• **config**: [`GenConfig`](../interfaces/GenConfig.md)\<[`K`](PowerGen.md#k), `V`, `unknown`\>

#### Returns

[`PowerGen`](PowerGen.md)\<[`K`](PowerGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:19](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L19)

## Accessors

### K

> `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`K`](../interfaces/Generator.md#k)

#### Defined in

[src/kbonacci/gen/powerGen.ts:46](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L46)

## Methods

### get()

> **get**(`N`): `V`

#### Parameters

• **N**: [`K`](PowerGen.md#k)

#### Returns

`V`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`get`](../interfaces/Generator.md#get)

#### Defined in

[src/kbonacci/gen/powerGen.ts:50](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L50)

***

### getCached()

> **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/gen/powerGen.ts:66](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L66)

***

### getCustoms()

> **getCustoms**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/kbonacci/gen/powerGen.ts:70](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L70)

***

### setCached()

> **setCached**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/powerGen.ts:74](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L74)

***

### setCustoms()

> **setCustoms**(`customs`?): `void`

#### Parameters

• **customs?**: `V`[]

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/powerGen.ts:80](https://github.com/havelessbemore/nacci/blob/100a647d54551c11326bb238d34a9ee4a7659632/src/kbonacci/gen/powerGen.ts#L80)
