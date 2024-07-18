[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [err](../README.md) / OutOfBoundsError

# Class: OutOfBoundsError

## Extends

- `RangeError`

## Extended by

- [`UnsafeError`](UnsafeError.md)

## Constructors

### new OutOfBoundsError()

> **new OutOfBoundsError**(`actual`, `min`?, `max`?, `label`?, `msg`?): [`OutOfBoundsError`](OutOfBoundsError.md)

#### Parameters

• **actual**: `unknown`

• **min?**: `unknown`

• **max?**: `unknown`

• **label?**: `string` = `"index"`

• **msg?**: `string` = `"Out of bounds"`

#### Returns

[`OutOfBoundsError`](OutOfBoundsError.md)

#### Overrides

`RangeError.constructor`

#### Defined in

[src/error/outOfBoundsError.ts:2](https://github.com/havelessbemore/nacci/blob/3cbe0b7b12cdcaf753d48aef5739bde5f440356e/src/error/outOfBoundsError.ts#L2)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`RangeError.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`RangeError.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`RangeError.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`RangeError.stack`

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

`RangeError.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`RangeError.stackTraceLimit`

#### Defined in

node\_modules/@types/node/globals.d.ts:30

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

`RangeError.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:21
