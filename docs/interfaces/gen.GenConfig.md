[nacci](../README.md) / [gen](../modules/gen.md) / GenConfig

# Interface: GenConfig\<I, V, D\>

[gen](../modules/gen.md).GenConfig

## Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `V` | `I` |
| `D` | `unknown` |

## Table of contents

### Properties

- [cached](gen.GenConfig.md#cached)
- [customs](gen.GenConfig.md#customs)
- [encoding](gen.GenConfig.md#encoding)
- [indexOps](gen.GenConfig.md#indexops)
- [ops](gen.GenConfig.md#ops)
- [valueOps](gen.GenConfig.md#valueops)

## Properties

### cached

• `Optional` **cached**: `boolean`

#### Defined in

[src/kbonacci/gen/genConfig.ts:5](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L5)

___

### customs

• `Optional` **customs**: `V`[]

#### Defined in

[src/kbonacci/gen/genConfig.ts:6](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L6)

___

### encoding

• `Optional` **encoding**: [`Encoding`](enc.Encoding.md)\<`V`, `D`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:7](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L7)

___

### indexOps

• `Optional` **indexOps**: [`Ops`](ops.Ops.md)\<`I`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L10)

___

### ops

• `Optional` **ops**: [`Ops`](ops.Ops.md)\<`I` & `V`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:9](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L9)

___

### valueOps

• `Optional` **valueOps**: [`Ops`](ops.Ops.md)\<`V`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:11](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/gen/genConfig.ts#L11)
