[nacci](../README.md) / [gen](../modules/gen.md) / GenConfig

# Interface: GenConfig\<I, V, D\>

[gen](../modules/gen.md).GenConfig

## Type parameters

| Name | Type      |
| :--- | :-------- |
| `I`  | `I`       |
| `V`  | `I`       |
| `D`  | `unknown` |

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

[src/kbonacci/gen/genConfig.ts:5](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L5)

---

### customs

• `Optional` **customs**: `V`[]

#### Defined in

[src/kbonacci/gen/genConfig.ts:6](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L6)

---

### encoding

• `Optional` **encoding**: [`Encoding`](enc.Encoding.md)\<`V`, `D`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:7](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L7)

---

### indexOps

• `Optional` **indexOps**: [`Ops`](ops.Ops.md)\<`I`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:10](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L10)

---

### ops

• `Optional` **ops**: [`Ops`](ops.Ops.md)\<`I` & `V`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:9](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L9)

---

### valueOps

• `Optional` **valueOps**: [`Ops`](ops.Ops.md)\<`V`\>

#### Defined in

[src/kbonacci/gen/genConfig.ts:11](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/kbonacci/gen/genConfig.ts#L11)
