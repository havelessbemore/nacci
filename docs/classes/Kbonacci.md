[**nacci**](../README.md) • **Docs**

***

[nacci](../README.md) / Kbonacci

# Class: Kbonacci

## Extended by

- [`Fibonacci`](Fibonacci.md)
- [`Tribonacci`](Tribonacci.md)

## Implements

- [`Generator`](../namespaces/gen/interfaces/Generator.md)\<`number`, `number`\>

## Constructors

### new Kbonacci()

> **new Kbonacci**(`K`, `customs`?, `cached`?): [`Kbonacci`](Kbonacci.md)

#### Parameters

• **K**: `number`

• **customs?**: `number`[]

• **cached?**: `boolean` = `true`

#### Returns

[`Kbonacci`](Kbonacci.md)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:10](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L10)

## Accessors

### K

> `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../namespaces/gen/interfaces/Generator.md).[`K`](../namespaces/gen/interfaces/Generator.md#k)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:17](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L17)

## Methods

### get()

> **get**(`index`): `number`

#### Parameters

• **index**: `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../namespaces/gen/interfaces/Generator.md).[`get`](../namespaces/gen/interfaces/Generator.md#get)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:21](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L21)

***

### getCached()

> **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:25](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L25)

***

### getCustoms()

> **getCustoms**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:29](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L29)

***

### setCached()

> **setCached**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:33](https://github.com/havelessbemore/nacci/blob/3ccd482484f8992156abf94ed5dc512ad62f4b44/src/kbonacci/wrapper/kbonacci.ts#L33)
