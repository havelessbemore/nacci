[nacci](../README.md) / [gen](../modules/gen.md) / PowerGen

# Class: PowerGen\<K, V\>

[gen](../modules/gen.md).PowerGen

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implements

- [`Generator`](../interfaces/gen.Generator.md)\<[`K`](gen.PowerGen.md#k), `V`\>

## Table of contents

### Constructors

- [constructor](gen.PowerGen.md#constructor)

### Properties

- [\_K](gen.PowerGen.md#_k)
- [cached](gen.PowerGen.md#cached)
- [customs](gen.PowerGen.md#customs)
- [encoding](gen.PowerGen.md#encoding)
- [indexOps](gen.PowerGen.md#indexops)
- [isStd](gen.PowerGen.md#isstd)
- [neg](gen.PowerGen.md#neg)
- [pos](gen.PowerGen.md#pos)
- [v0](gen.PowerGen.md#v0)

### Accessors

- [K](gen.PowerGen.md#k)

### Methods

- [get](gen.PowerGen.md#get)
- [getCached](gen.PowerGen.md#getcached)
- [getCustoms](gen.PowerGen.md#getcustoms)
- [setCached](gen.PowerGen.md#setcached)
- [setCustoms](gen.PowerGen.md#setcustoms)

## Constructors

### constructor

• **new PowerGen**\<`K`, `V`\>(`K`, `config`): [`PowerGen`](gen.PowerGen.md)\<[`K`](gen.PowerGen.md#k), `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |
| `config` | [`GenConfig`](../interfaces/gen.GenConfig.md)\<[`K`](gen.PowerGen.md#k), `V`, `unknown`\> |

#### Returns

[`PowerGen`](gen.PowerGen.md)\<[`K`](gen.PowerGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:19](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L19)

## Properties

### \_K

• `Private` **\_K**: `number`

#### Defined in

[src/kbonacci/gen/powerGen.ts:14](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L14)

___

### cached

• `Private` **cached**: `boolean`

#### Defined in

[src/kbonacci/gen/powerGen.ts:9](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L9)

___

### customs

• `Private` **customs**: `V`[]

#### Defined in

[src/kbonacci/gen/powerGen.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L10)

___

### encoding

• `Private` **encoding**: [`Encoding`](../interfaces/enc.Encoding.md)\<`V`, `unknown`\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:11](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L11)

___

### indexOps

• `Private` **indexOps**: [`Ops`](../interfaces/ops.Ops.md)\<[`K`](gen.PowerGen.md#k)\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:12](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L12)

___

### isStd

• `Private` **isStd**: `boolean`

#### Defined in

[src/kbonacci/gen/powerGen.ts:13](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L13)

___

### neg

• `Private` **neg**: `Powers`\<[`K`](gen.PowerGen.md#k), `unknown`\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:15](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L15)

___

### pos

• `Private` **pos**: `Powers`\<[`K`](gen.PowerGen.md#k), `unknown`\>

#### Defined in

[src/kbonacci/gen/powerGen.ts:16](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L16)

___

### v0

• `Private` **v0**: `V`

#### Defined in

[src/kbonacci/gen/powerGen.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L17)

## Accessors

### K

• `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[K](../interfaces/gen.Generator.md#k)

#### Defined in

[src/kbonacci/gen/powerGen.ts:46](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L46)

## Methods

### get

▸ **get**(`N`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | [`K`](gen.PowerGen.md#k) |

#### Returns

`V`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[get](../interfaces/gen.Generator.md#get)

#### Defined in

[src/kbonacci/gen/powerGen.ts:50](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L50)

___

### getCached

▸ **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/gen/powerGen.ts:66](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L66)

___

### getCustoms

▸ **getCustoms**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/kbonacci/gen/powerGen.ts:70](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L70)

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

[src/kbonacci/gen/powerGen.ts:74](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L74)

___

### setCustoms

▸ **setCustoms**(`customs?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `customs?` | `V`[] |

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/powerGen.ts:80](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/powerGen.ts#L80)
