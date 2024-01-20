[nacci](../README.md) / BigKbonacci

# Class: BigKbonacci

## Hierarchy

- **`BigKbonacci`**

  ↳ [`BigFibonacci`](BigFibonacci.md)

  ↳ [`BigTribonacci`](BigTribonacci.md)

## Implements

- [`Generator`](../interfaces/gen.Generator.md)\<`bigint`, `bigint`\>

## Table of contents

### Constructors

- [constructor](BigKbonacci.md#constructor)

### Properties

- [customs](BigKbonacci.md#customs)
- [gen](BigKbonacci.md#gen)

### Accessors

- [K](BigKbonacci.md#k)

### Methods

- [get](BigKbonacci.md#get)
- [getCached](BigKbonacci.md#getcached)
- [getCustoms](BigKbonacci.md#getcustoms)
- [setCached](BigKbonacci.md#setcached)

## Constructors

### constructor

• **new BigKbonacci**(`K`, `customs?`, `cached?`): [`BigKbonacci`](BigKbonacci.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `K` | `number` | `undefined` |
| `customs?` | `bigint`[] | `undefined` |
| `cached` | `boolean` | `true` |

#### Returns

[`BigKbonacci`](BigKbonacci.md)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:10](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L10)

## Properties

### customs

• `Private` **customs**: `bigint`[]

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:7](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L7)

___

### gen

• `Private` **gen**: [`KPowerGen`](gen.KPowerGen.md)\<`bigint`, `bigint`\>

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:8](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L8)

## Accessors

### K

• `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[K](../interfaces/gen.Generator.md#k)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:17](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L17)

## Methods

### get

▸ **get**(`index`): `bigint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `bigint` |

#### Returns

`bigint`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[get](../interfaces/gen.Generator.md#get)

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:21](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L21)

___

### getCached

▸ **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:25](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L25)

___

### getCustoms

▸ **getCustoms**(): `bigint`[]

#### Returns

`bigint`[]

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:29](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L29)

___

### setCached

▸ **setCached**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/kbonacci/wrapper/bigKbonacci.ts:33](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/wrapper/bigKbonacci.ts#L33)
