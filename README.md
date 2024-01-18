# Nacci

`Nacci` provides efficient and easy-to-use implementations of Kbonacci sequences (Fibonacci, Tribonacci, etc.). Whether you're working on mathematical problems, coding challenges, or just exploring numerical sequences, `Nacci` offers a robust solution.

[![Version](https://img.shields.io/npm/v/nacci.svg)](https://www.npmjs.com/package/nacci)
[![Downloads](https://img.shields.io/npm/dm/nacci.svg)](https://www.npmjs.com/package/nacci)
[![Maintenance](https://img.shields.io/maintenance/yes/2024.svg)](https://github.com/havelessbemore/nacci/graphs/commit-activity)
[![License](https://img.shields.io/github/license/havelessbemore/nacci.svg)](https://github.com/havelessbemore/nacci/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/havelessbemore/nacci/graph/badge.svg?token=F362G7C9U0)](https://codecov.io/gh/havelessbemore/nacci)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/nacci)


## Installation

npm:

```bash
npm install nacci
```

## Features

- **Convenience**: Convenience classes let you quickly create sequences. They are made with safety in mind and will throw an [UnsafeError](./src/error/unsafeError.ts) if an operation results in overflow (i.e. outside `Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER`).

- **K-bonacci**: Generate any K-bonacci sequence for an integer `K >= 2`. If you've ever wanted to create a Dodecanacci sequence (K = 12) or Hectonacci (K = 100), now you can!

- **Custom Terms**: Sequences can be created with custom initial terms.

- **Negative Indices**: Sequences extend in both the positive and negative direction. Getting the -100th index is just as simple as getting the 100th index.

- **Agnostic Numeric Types**: Whether you need sequences with standard numbers, BigInts, or a custom numeric type, `Nacci` has you covered. Sequences are independent to the numeric type used. Any type is supported as long as some basic type operations are provided (See [NumericOps](./src/ops/numericOps.ts)).

- **Performance**: Go beyond traditional methods with more advanced generation strategies. These strategies allow for efficient sequence generation without the need to iterate through each index, enabling rapid access to deeper sequence values.

## Usage

Here's how you can use `Nacci` in your project:

### Fibonacci

```javascript
const nacci = require("nacci");

const fib = new nacci.Fibonacci();
console.log(fib.get(10)); // 55
```

```javascript
const nacci = require("nacci");

const bigFib = new nacci.BigFibonacci();
console.log(bigFib.get(128n)); // 251,728,825,683,549,488,150,424,261n
```

### Lucas

```javascript
const nacci = require("nacci");

const lucas = new nacci.Fibonacci([2, 1]);
console.log(lucas.get(10)); // 123
```

```javascript
const nacci = require("nacci");

const bigLucas = new nacci.BigFibonacci([2n, 1n]);
console.log(bigLucas.get(128n)); // 562,882,766,124,611,619,513,723,647n
```

## Kbonacci

```javascript
const nacci = require("nacci");

const penta = new nacci.Kbonacci(5);
console.log(penta.get(10)); // 236
```

```javascript
const nacci = require("nacci");

const bigPenta = new nacci.BigKbonacci(5, [2n, 3n, 5n, 7n, 11n]);
console.log(bigPenta.get(128n)); // 34,793,317,941,356,809,321,160,944,117,101,129,141n
```

## Advanced

### Example 1

Create a Fibonacci sequence with the following setup:

- Use `number` for indices
- Use `bigint` for values
- Turn off caching
- Use the [KPowerGetter](./src/kbonacci/getter/kPowerGetter.ts) strategy with [MatrixEncoding](./src/kbonacci/encoding/matrix/matrixEncoding.ts)

```javascript
const nacci = require("nacci");

const cached = false;
const customs = undefined;
const indexOps = new nacci.ops.SafeNumOps();
const valueOps = new nacci.ops.BigOps();
const encoding = new nacci.enc.MatrixEncoding(valueOps);
const fib = new nacci.getter.KPowerGetter(
  2,
  indexOps,
  valueOps,
  encoding,
  customs,
  cached
);
console.log(fib.get(128)); // 251,728,825,683,549,488,150,424,261n
```

### Example 2

Iterate through a Lucas sequence with the [SlidingWindowGetter](./src/kbonacci/getter/slidingWindowGetter.ts) strategy:

```javascript
const nacci = require("nacci");

const indexOps = new nacci.ops.SafeNumOps();
const valueOps = new nacci.ops.BigOps();
const lucas = new nacci.getter.SlidingWindowGetter(2, indexOps, valueOps, [
  2n,
  1n,
]);

const min = -100;
const max = 100;
for (let i = min; i <= max; ++i) {
  console.log(`${i}: ${lucas.get(i)}`);
}
```

## License

Copyright (C) 2023-2024 Michael Rojas <dev.michael.rojas@gmail.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---

Made with ❤️ by [Michael Rojas](https://github.com/havelessbemore)
