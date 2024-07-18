[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [err](../README.md) / DimensionError

# Class: DimensionError

## Extends

- `RangeError`

## Constructors

### new DimensionError()

> **new DimensionError**(`actual`, `expected`, `relation`): [`DimensionError`](DimensionError.md)

#### Parameters

• **actual**: `number` \| `number`[]

• **expected**: `number` \| `number`[]

• **relation**: `string` = `"!="`

#### Returns

[`DimensionError`](DimensionError.md)

#### Overrides

`RangeError.constructor`

#### Defined in

[src/error/dimensionError.ts:2](https://github.com/havelessbemore/nacci/blob/59fe6bc863f01040e1266e1c800d1b96fc19b6ae/src/error/dimensionError.ts#L2)

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
