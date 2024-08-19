[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [err](../README.md) / IntegerError

# Class: IntegerError

## Extends

- `TypeError`

## Constructors

### new IntegerError()

> **new IntegerError**(`value`, `label`): [`IntegerError`](IntegerError.md)

#### Parameters

• **value**: `unknown`

• **label**: `string` = `"Value"`

#### Returns

[`IntegerError`](IntegerError.md)

#### Overrides

`TypeError.constructor`

#### Defined in

[src/error/integerError.ts:2](https://github.com/havelessbemore/nacci/blob/8a57bf02a6acda77de317b31d69be5b3c9a07902/src/error/integerError.ts#L2)

## Properties

### cause?

> `optional` **cause**: `unknown`

#### Inherited from

`TypeError.cause`

#### Defined in

node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`TypeError.message`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### name

> **name**: `string`

#### Inherited from

`TypeError.name`

#### Defined in

node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### stack?

> `optional` **stack**: `string`

#### Inherited from

`TypeError.stack`

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

`TypeError.prepareStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:31

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

#### Inherited from

`TypeError.stackTraceLimit`

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

`TypeError.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:24
