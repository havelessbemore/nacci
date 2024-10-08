[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [err](../README.md) / UnsafeError

# Class: UnsafeError

## Extends

- [`OutOfBoundsError`](OutOfBoundsError.md)

## Constructors

### new UnsafeError()

> **new UnsafeError**(`actual`): [`UnsafeError`](UnsafeError.md)

#### Parameters

• **actual**: `number`

#### Returns

[`UnsafeError`](UnsafeError.md)

#### Overrides

[`OutOfBoundsError`](OutOfBoundsError.md).[`constructor`](OutOfBoundsError.md#constructors)

#### Defined in

[src/error/unsafeError.ts:5](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/error/unsafeError.ts#L5)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`cause`](OutOfBoundsError.md#cause)

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`message`](OutOfBoundsError.md#message)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`name`](OutOfBoundsError.md#name)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`stack`](OutOfBoundsError.md#stack)

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1078

***

### prepareStackTrace()?

> `static` `optional` **prepareStackTrace**: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`prepareStackTrace`](OutOfBoundsError.md#preparestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:31

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`stackTraceLimit`](OutOfBoundsError.md#stacktracelimit)

#### Defined in

node\_modules/@types/node/globals.d.ts:33

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

[`OutOfBoundsError`](OutOfBoundsError.md).[`captureStackTrace`](OutOfBoundsError.md#capturestacktrace)

#### Defined in

node\_modules/@types/node/globals.d.ts:24
