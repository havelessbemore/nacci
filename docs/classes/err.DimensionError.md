[nacci](../README.md) / [err](../modules/err.md) / DimensionError

# Class: DimensionError

[err](../modules/err.md).DimensionError

## Hierarchy

- `RangeError`

  ↳ **`DimensionError`**

## Table of contents

### Constructors

- [constructor](err.DimensionError.md#constructor)

### Properties

- [cause](err.DimensionError.md#cause)
- [message](err.DimensionError.md#message)
- [name](err.DimensionError.md#name)
- [stack](err.DimensionError.md#stack)
- [prepareStackTrace](err.DimensionError.md#preparestacktrace)
- [stackTraceLimit](err.DimensionError.md#stacktracelimit)

### Methods

- [captureStackTrace](err.DimensionError.md#capturestacktrace)

## Constructors

### constructor

• **new DimensionError**(`actual`, `expected`, `relation?`): [`DimensionError`](err.DimensionError.md)

#### Parameters

| Name       | Type                   | Default value |
| :--------- | :--------------------- | :------------ |
| `actual`   | `number` \| `number`[] | `undefined`   |
| `expected` | `number` \| `number`[] | `undefined`   |
| `relation` | `string`               | `"!="`        |

#### Returns

[`DimensionError`](err.DimensionError.md)

#### Overrides

RangeError.constructor

#### Defined in

[src/error/dimensionError.ts:2](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/error/dimensionError.ts#L2)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

RangeError.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

---

### message

• **message**: `string`

#### Inherited from

RangeError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

---

### name

• **name**: `string`

#### Inherited from

RangeError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

RangeError.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

---

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name          | Type         |
| :------------ | :----------- |
| `err`         | `Error`      |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

RangeError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

RangeError.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name              | Type       |
| :---------------- | :--------- |
| `targetObject`    | `object`   |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

RangeError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
