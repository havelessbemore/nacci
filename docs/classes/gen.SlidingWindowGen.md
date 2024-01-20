[nacci](../README.md) / [gen](../modules/gen.md) / SlidingWindowGen

# Class: SlidingWindowGen\<K, V\>

[gen](../modules/gen.md).SlidingWindowGen

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implements

- [`Generator`](../interfaces/gen.Generator.md)\<[`K`](gen.SlidingWindowGen.md#k), `V`\>

## Table of contents

### Constructors

- [constructor](gen.SlidingWindowGen.md#constructor)

### Properties

- [\_K](gen.SlidingWindowGen.md#_k)
- [delta](gen.SlidingWindowGen.md#delta)
- [indexOps](gen.SlidingWindowGen.md#indexops)
- [minN](gen.SlidingWindowGen.md#minn)
- [next](gen.SlidingWindowGen.md#next)
- [valueOps](gen.SlidingWindowGen.md#valueops)
- [values](gen.SlidingWindowGen.md#values)

### Accessors

- [K](gen.SlidingWindowGen.md#k)

### Methods

- [forward](gen.SlidingWindowGen.md#forward)
- [get](gen.SlidingWindowGen.md#get)
- [reverse](gen.SlidingWindowGen.md#reverse)

## Constructors

### constructor

• **new SlidingWindowGen**\<`K`, `V`\>(`K`, `config`): [`SlidingWindowGen`](gen.SlidingWindowGen.md)\<[`K`](gen.SlidingWindowGen.md#k), `V`\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `K` | `number` |
| `config` | [`GenConfig`](../interfaces/gen.GenConfig.md)\<[`K`](gen.SlidingWindowGen.md#k), `V`, `never`\> |

#### Returns

[`SlidingWindowGen`](gen.SlidingWindowGen.md)\<[`K`](gen.SlidingWindowGen.md#k), `V`\>

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L17)

## Properties

### \_K

• `Private` **\_K**: `number`

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:11](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L11)

___

### delta

• `Private` **delta**: `number`

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:9](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L9)

___

### indexOps

• `Private` **indexOps**: [`Ops`](../interfaces/ops.Ops.md)\<[`K`](gen.SlidingWindowGen.md#k)\>

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L10)

___

### minN

• `Private` **minN**: [`K`](gen.SlidingWindowGen.md#k)

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:12](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L12)

___

### next

• `Private` **next**: `V`

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:13](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L13)

___

### valueOps

• `Private` **valueOps**: [`Ops`](../interfaces/ops.Ops.md)\<`V`\>

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:14](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L14)

___

### values

• `Private` **values**: `V`[]

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:15](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L15)

## Accessors

### K

• `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[K](../interfaces/gen.Generator.md#k)

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:49](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L49)

## Methods

### forward

▸ **forward**(`i`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | [`K`](gen.SlidingWindowGen.md#k) |

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:70](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L70)

___

### get

▸ **get**(`N`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `N` | [`K`](gen.SlidingWindowGen.md#k) |

#### Returns

`V`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[get](../interfaces/gen.Generator.md#get)

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:53](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L53)

___

### reverse

▸ **reverse**(`i`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | [`K`](gen.SlidingWindowGen.md#k) |

#### Returns

`void`

#### Defined in

[src/kbonacci/gen/slidingWindowGen.ts:84](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/slidingWindowGen.ts#L84)
