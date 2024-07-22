[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [gen](../README.md) / KPowerGen

# Class: KPowerGen\<K, V\>

## Type Parameters

• **K**

• **V**

## Implements

- [`Generator`](../interfaces/Generator.md)\<[`K`](KPowerGen.md#k), `V`\>

## Constructors

### new KPowerGen()

> **new KPowerGen**\<`K`, `V`\>(`K`, `config`): [`KPowerGen`](KPowerGen.md)\<[`K`](KPowerGen.md#k), `V`\>

#### Parameters

• **K**: `number`

• **config**: [`GenConfig`](../interfaces/GenConfig.md)\<[`K`](KPowerGen.md#k), `V`, `unknown`\>

#### Returns

[`KPowerGen`](KPowerGen.md)\<[`K`](KPowerGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:20](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L20)

## Accessors

### K

> `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`K`](../interfaces/Generator.md#k)

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:47](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L47)

## Methods

### get()

> **get**(`N`): `V`

#### Parameters

• **N**: [`K`](KPowerGen.md#k)

#### Returns

`V`

#### Implementation of

[`Generator`](../interfaces/Generator.md).[`get`](../interfaces/Generator.md#get)

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:51](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L51)

***

### getCached()

> **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:85](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L85)

***

### getCustoms()

> **getCustoms**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:89](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L89)

***

### setCached()

> **setCached**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:93](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L93)

***

### setCustoms()

> **setCustoms**(`customs`?): `void`

#### Parameters

• **customs?**: `V`[]

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:99](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/gen/kPowerGen.ts#L99)
