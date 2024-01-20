[nacci](../README.md) / [gen](../modules/gen.md) / Generator

# Interface: Generator\<K, V\>

[gen](../modules/gen.md).Generator

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Implemented by

- [`BigKbonacci`](../classes/BigKbonacci.md)
- [`KPowerGen`](../classes/gen.KPowerGen.md)
- [`Kbonacci`](../classes/Kbonacci.md)
- [`PowerGen`](../classes/gen.PowerGen.md)
- [`SlidingWindowGen`](../classes/gen.SlidingWindowGen.md)

## Table of contents

### Properties

- [K](gen.Generator.md#k)

### Methods

- [get](gen.Generator.md#get)

## Properties

### K

• **K**: `number`

#### Defined in

[src/kbonacci/gen/generator.ts:1](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/generator.ts#L1)

[src/kbonacci/gen/generator.ts:2](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/generator.ts#L2)

## Methods

### get

▸ **get**(`key`): `V`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`V`

#### Defined in

[src/kbonacci/gen/generator.ts:3](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/kbonacci/gen/generator.ts#L3)
