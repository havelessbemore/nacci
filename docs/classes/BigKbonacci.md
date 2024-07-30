[**nacci**](../README.md) • **Docs**

***

[nacci](../README.md) / BigKbonacci

# Class: BigKbonacci

## Extended by

- [`BigFibonacci`](BigFibonacci.md)
- [`BigTribonacci`](BigTribonacci.md)

## Implements

- [`Generator`](../namespaces/gen/interfaces/Generator.md)\<`bigint`, `bigint`\>

## Constructors

### new BigKbonacci()

> **new BigKbonacci**(`K`, `customs`?, `cached`?): [`BigKbonacci`](BigKbonacci.md)

#### Parameters

• **K**: `number`

• **customs?**: `bigint`[]

• **cached?**: `boolean` = `true`

#### Returns

[`BigKbonacci`](BigKbonacci.md)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:10](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L10)

## Accessors

### K

> `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[`Generator`](../namespaces/gen/interfaces/Generator.md).[`K`](../namespaces/gen/interfaces/Generator.md#k)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:17](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L17)

## Methods

### get()

> **get**(`index`): `bigint`

#### Parameters

• **index**: `bigint`

#### Returns

`bigint`

#### Implementation of

[`Generator`](../namespaces/gen/interfaces/Generator.md).[`get`](../namespaces/gen/interfaces/Generator.md#get)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:21](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L21)

***

### getCached()

> **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:25](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L25)

***

### getCustoms()

> **getCustoms**(): `bigint`[]

#### Returns

`bigint`[]

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:29](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L29)

***

### setCached()

> **setCached**(`value`): `void`

#### Parameters

• **value**: `boolean`

#### Returns

`void`

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:33](https://github.com/havelessbemore/nacci/blob/0e5a21e6c43aeb5913f37277f73a4fdd947434aa/src/kbonacci/wrapper/bigKbonacci.ts#L33)
