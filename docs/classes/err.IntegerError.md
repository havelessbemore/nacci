[nacci](../README.md) / [err](../modules/err.md) / IntegerError

# Class: IntegerError

[err](../modules/err.md).IntegerError

## Hierarchy

- `TypeError`

  ↳ **`IntegerError`**

## Table of contents

### Constructors

- [constructor](err.IntegerError.md#constructor)

### Properties

- [cause](err.IntegerError.md#cause)
- [message](err.IntegerError.md#message)
- [name](err.IntegerError.md#name)
- [stack](err.IntegerError.md#stack)
- [prepareStackTrace](err.IntegerError.md#preparestacktrace)
- [stackTraceLimit](err.IntegerError.md#stacktracelimit)

### Methods

- [captureStackTrace](err.IntegerError.md#capturestacktrace)

## Constructors

### constructor

• **new IntegerError**(`value`, `label?`): [`IntegerError`](err.IntegerError.md)

#### Parameters

| Name    | Type      | Default value |
| :------ | :-------- | :------------ |
| `value` | `unknown` | `undefined`   |
| `label` | `string`  | `"Value"`     |

#### Returns

[`IntegerError`](err.IntegerError.md)

#### Overrides

TypeError.constructor

#### Defined in

[src/error/integerError.ts:2](https://github.com/havelessbemore/nacci/blob/13a7465/src/error/integerError.ts#L2)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

TypeError.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

---

### message

• **message**: `string`

#### Inherited from

TypeError.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

---

### name

• **name**: `string`

#### Inherited from

TypeError.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

---

### stack

• `Optional` **stack**: `string`

#### Inherited from

TypeError.stack

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

TypeError.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:28

---

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

TypeError.stackTraceLimit

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

TypeError.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:21
