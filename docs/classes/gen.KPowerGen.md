[nacci](../README.md) / [gen](../modules/gen.md) / KPowerGen

# Class: KPowerGen\<K, V\>

[gen](../modules/gen.md).KPowerGen

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implements

- [`Generator`](../interfaces/gen.Generator.md)\<[`K`](gen.KPowerGen.md#k), `V`\>

## Table of contents

### Constructors

- [constructor](gen.KPowerGen.md#constructor)

### Properties

- [\_K](gen.KPowerGen.md#_k)
- [cached](gen.KPowerGen.md#cached)
- [customs](gen.KPowerGen.md#customs)
- [encoding](gen.KPowerGen.md#encoding)
- [indexOps](gen.KPowerGen.md#indexops)
- [isStd](gen.KPowerGen.md#isstd)
- [neg](gen.KPowerGen.md#neg)
- [pos](gen.KPowerGen.md#pos)
- [v0](gen.KPowerGen.md#v0)
- [valueOps](gen.KPowerGen.md#valueops)
- [zero](gen.KPowerGen.md#zero)

### Accessors

- [K](gen.KPowerGen.md#k)

### Methods

- [get](gen.KPowerGen.md#get)
- [getCached](gen.KPowerGen.md#getcached)
- [getCustoms](gen.KPowerGen.md#getcustoms)
- [setCached](gen.KPowerGen.md#setcached)
- [setCustoms](gen.KPowerGen.md#setcustoms)

## Constructors

### constructor

• **new KPowerGen**\<`K`, `V`\>(`K`, `config`): [`KPowerGen`](gen.KPowerGen.md)\<[`K`](gen.KPowerGen.md#k), `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |
| `config` | [`GenConfig`](../interfaces/gen.GenConfig.md)\<[`K`](gen.KPowerGen.md#k), `V`, `unknown`\> |

#### Returns

[`KPowerGen`](gen.KPowerGen.md)\<[`K`](gen.KPowerGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:22](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L22)

## Properties

### \_K

• `Private` **\_K**: `number`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:15](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L15)

___

### cached

• `Private` **cached**: `boolean`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:10](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L10)

___

### customs

• `Private` **customs**: `V`[]

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:11](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L11)

___

### encoding

• `Private` **encoding**: [`Encoding`](../interfaces/enc.Encoding.md)\<`V`, `unknown`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:12](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L12)

___

### indexOps

• `Private` **indexOps**: [`Ops`](../interfaces/ops.Ops.md)\<[`K`](gen.KPowerGen.md#k)\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:13](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L13)

___

### isStd

• `Private` **isStd**: `boolean`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:14](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L14)

___

### neg

• `Private` **neg**: `Powers`\<[`K`](gen.KPowerGen.md#k), `unknown`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:16](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L16)

___

### pos

• `Private` **pos**: `Powers`\<[`K`](gen.KPowerGen.md#k), `unknown`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:17](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L17)

___

### v0

• `Private` **v0**: `V`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:18](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L18)

___

### valueOps

• `Private` **valueOps**: [`Ops`](../interfaces/ops.Ops.md)\<`V`\>

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:19](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L19)

___

### zero

• `Private` **zero**: `unknown`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:20](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L20)

## Accessors

### K

• `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[K](../interfaces/gen.Generator.md#k)

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:54](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L54)

## Methods

### get

▸ **get**(`N`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | [`K`](gen.KPowerGen.md#k) |

#### Returns

`V`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[get](../interfaces/gen.Generator.md#get)

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:58](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L58)

___

### getCached

▸ **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:92](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L92)

___

### getCustoms

▸ **getCustoms**(): `V`[]

#### Returns

`V`[]

#### Defined in

[src/kbonacci/gen/kPowerGen.ts:96](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L96)

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

[src/kbonacci/gen/kPowerGen.ts:100](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L100)

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

[src/kbonacci/gen/kPowerGen.ts:106](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/kPowerGen.ts#L106)
