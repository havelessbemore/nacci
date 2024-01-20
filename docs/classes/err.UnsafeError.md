[nacci](../README.md) / [err](../modules/err.md) / UnsafeError

# Class: UnsafeError

[err](../modules/err.md).UnsafeError

## Hierarchy

- [`OutOfBoundsError`](err.OutOfBoundsError.md)

  ↳ **`UnsafeError`**

## Table of contents

### Constructors

- [constructor](err.UnsafeError.md#constructor)

### Properties

- [cause](err.UnsafeError.md#cause)
- [message](err.UnsafeError.md#message)
- [name](err.UnsafeError.md#name)
- [stack](err.UnsafeError.md#stack)
- [prepareStackTrace](err.UnsafeError.md#preparestacktrace)
- [stackTraceLimit](err.UnsafeError.md#stacktracelimit)

### Methods

- [captureStackTrace](err.UnsafeError.md#capturestacktrace)

## Constructors

### constructor

• **new UnsafeError**(`actual`): [`UnsafeError`](err.UnsafeError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `actual` | `number` |

#### Returns

[`UnsafeError`](err.UnsafeError.md)

#### Overrides

[OutOfBoundsError](err.OutOfBoundsError.md).[constructor](err.OutOfBoundsError.md#constructor)

#### Defined in

[src/error/unsafeError.ts:5](https://github.com/havelessbemore/nacci/blob/ae7cafb/src/error/unsafeError.ts#L5)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[cause](err.OutOfBoundsError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### message

• **message**: `string`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[message](err.OutOfBoundsError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1076

___

### name

• **name**: `string`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[name](err.OutOfBoundsError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1075

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[stack](err.OutOfBoundsError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1077

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[prepareStackTrace](err.OutOfBoundsError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:28

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[stackTraceLimit](err.OutOfBoundsError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace

▸ **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[OutOfBoundsError](err.OutOfBoundsError.md).[captureStackTrace](err.OutOfBoundsError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:21
