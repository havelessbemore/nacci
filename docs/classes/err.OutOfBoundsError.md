[nacci](../README.md) / [err](../modules/err.md) / OutOfBoundsError

# Class: OutOfBoundsError

[err](../modules/err.md).OutOfBoundsError

## Hierarchy

- `RangeError`

  ↳ **`OutOfBoundsError`**

  ↳↳ [`UnsafeError`](err.UnsafeError.md)

## Table of contents

### Constructors

- [constructor](err.OutOfBoundsError.md#constructor)

### Properties

- [cause](err.OutOfBoundsError.md#cause)
- [message](err.OutOfBoundsError.md#message)
- [name](err.OutOfBoundsError.md#name)
- [stack](err.OutOfBoundsError.md#stack)
- [prepareStackTrace](err.OutOfBoundsError.md#preparestacktrace)
- [stackTraceLimit](err.OutOfBoundsError.md#stacktracelimit)

### Methods

- [captureStackTrace](err.OutOfBoundsError.md#capturestacktrace)

## Constructors

### constructor

• **new OutOfBoundsError**(`actual`, `min?`, `max?`, `label?`, `msg?`): [`OutOfBoundsError`](err.OutOfBoundsError.md)

#### Parameters

| Name     | Type      | Default value     |
| :------- | :-------- | :---------------- |
| `actual` | `unknown` | `undefined`       |
| `min?`   | `unknown` | `undefined`       |
| `max?`   | `unknown` | `undefined`       |
| `label`  | `string`  | `"index"`         |
| `msg`    | `string`  | `"Out of bounds"` |

#### Returns

[`OutOfBoundsError`](err.OutOfBoundsError.md)

#### Overrides

RangeError.constructor

#### Defined in

[src/error/outOfBoundsError.ts:2](https://github.com/havelessbemore/nacci/blob/68d5ad6/src/error/outOfBoundsError.ts#L2)

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
