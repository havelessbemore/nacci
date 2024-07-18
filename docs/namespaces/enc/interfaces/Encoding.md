[**nacci**](../../../README.md) • **Docs**

***

[nacci](../../../README.md) / [enc](../README.md) / Encoding

# Interface: Encoding\<V, D\>

## Type Parameters

• **V**

• **D** = `unknown`

## Properties

### format

> `readonly` **format**: `string`

#### Defined in

[src/kbonacci/encoding/encoding.ts:9](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L9)

## Methods

### genK()

> **genK**(`K`): `D`

#### Parameters

• **K**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:10](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L10)

***

### genNegK()

> **genNegK**(`K`): `D`

#### Parameters

• **K**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:11](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L11)

***

### genNegOne()

> **genNegOne**(`K`): `D`

#### Parameters

• **K**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:12](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L12)

***

### genOne()

> **genOne**(`K`): `D`

#### Parameters

• **K**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:13](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L13)

***

### genZero()

> **genZero**(`K`): `D`

#### Parameters

• **K**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:14](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L14)

***

### pow()

> **pow**(`A`, `n`): `D`

#### Parameters

• **A**: `D`

• **n**: `V`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:15](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L15)

***

### shift()

> **shift**(`A`, `delta`): `D`

#### Parameters

• **A**: `D`

• **delta**: `number`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:16](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L16)

***

### square()

> **square**(`A`): `D`

#### Parameters

• **A**: `D`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:17](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L17)

***

### times()

> **times**(`A`, `B`): `D`

#### Parameters

• **A**: `D`

• **B**: `D`

#### Returns

`D`

#### Defined in

[src/kbonacci/encoding/encoding.ts:18](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L18)

***

### toValue()

> **toValue**(`data`, `delta`?, `customTerms`?): `V`

#### Parameters

• **data**: `D`

• **delta?**: `number`

• **customTerms?**: `V`[]

#### Returns

`V`

#### Defined in

[src/kbonacci/encoding/encoding.ts:19](https://github.com/havelessbemore/nacci/blob/21485e9dc2afbb8011ec9c684a1da3778babea29/src/kbonacci/encoding/encoding.ts#L19)
