[nacci](../README.md) / Kbonacci

# Class: Kbonacci

## Hierarchy

- **`Kbonacci`**

  ↳ [`Fibonacci`](Fibonacci.md)

  ↳ [`Tribonacci`](Tribonacci.md)

## Implements

- [`Generator`](../interfaces/gen.Generator.md)\<`number`, `number`\>

## Table of contents

### Constructors

- [constructor](Kbonacci.md#constructor)

### Properties

- [customs](Kbonacci.md#customs)
- [gen](Kbonacci.md#gen)

### Accessors

- [K](Kbonacci.md#k)

### Methods

- [get](Kbonacci.md#get)
- [getCached](Kbonacci.md#getcached)
- [getCustoms](Kbonacci.md#getcustoms)
- [setCached](Kbonacci.md#setcached)

## Constructors

### constructor

• **new Kbonacci**(`K`, `customs?`, `cached?`): [`Kbonacci`](Kbonacci.md)

#### Parameters

| Name       | Type       | Default value |
| :--------- | :--------- | :------------ |
| `K`        | `number`   | `undefined`   |
| `customs?` | `number`[] | `undefined`   |
| `cached`   | `boolean`  | `true`        |

#### Returns

[`Kbonacci`](Kbonacci.md)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:10](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L10)

## Properties

### customs

• `Private` **customs**: `number`[]

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:7](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L7)

---

### gen

• `Private` **gen**: [`PowerGen`](gen.PowerGen.md)\<`number`, `number`\>

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:8](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L8)

## Accessors

### K

• `get` **K**(): `number`

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[K](../interfaces/gen.Generator.md#k)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:17](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L17)

## Methods

### get

▸ **get**(`index`): `number`

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `index` | `number` |

#### Returns

`number`

#### Implementation of

[Generator](../interfaces/gen.Generator.md).[get](../interfaces/gen.Generator.md#get)

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:21](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L21)

---

### getCached

▸ **getCached**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:25](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L25)

---

### getCustoms

▸ **getCustoms**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:29](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L29)

---

### setCached

▸ **setCached**(`value`): `void`

#### Parameters

| Name    | Type      |
| :------ | :-------- |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[src/kbonacci/wrapper/kbonacci.ts:33](https://github.com/havelessbemore/nacci/blob/13a7465/src/kbonacci/wrapper/kbonacci.ts#L33)
