# Nacci

Generate numbers in a k-bonacci sequence (where each term is the sum of the previous k terms) with customizable k, initial terms, strategies and data types (number, bigint, etc).

[![Version](https://img.shields.io/npm/v/nacci.svg)](https://www.npmjs.com/package/nacci)
[![Downloads](https://img.shields.io/npm/dm/nacci.svg)](https://www.npmjs.com/package/nacci)
[![Maintenance](https://img.shields.io/maintenance/yes/2024.svg)](https://github.com/havelessbemore/nacci/graphs/commit-activity)
[![License](https://img.shields.io/github/license/havelessbemore/nacci.svg)](https://github.com/havelessbemore/nacci/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/havelessbemore/nacci/graph/badge.svg?token=F362G7C9U0)](https://codecov.io/gh/havelessbemore/nacci)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/nacci)

## Features

- **Convenience**: Convenience classes let you quickly create sequences of Fibonacci, Tribonacci and beyond.

- **K-bonacci**: Generate any k-bonacci sequence for any `k >= 2`. If you've ever wanted to create a Dodecanacci sequence (`k = 12`) or Hectonacci (`k = 100`), now you can!

- **Custom Terms**: Sequences can be created with custom initial terms.

- **Negative Indices**: Sequences extend in both the positive and negative direction. Generate the -100th term just as easily as the 100th.

- **Data-Type Agnostic**: Whether you need sequences with standard numbers, BigInts, or a custom type, `Nacci` has you covered. Any type can be used as long as type operations are provided (See [NumericOps](./src/ops/numericOps.ts)).

- **Performance**: Go beyond traditional generation methods with advanced strategies. These offer improved performance for rapid access to deeper term values.

## Install

Using npm:

```bash
npm install nacci
```

Using yarn:

```bash
yarn install nacci
```

## Usage

Here are some examples for getting started.

#### Fibonacci

Create a standard Fibonacci sequence

```javascript
const { Fibonacci } = require("nacci");

const fib = new Fibonacci();

// Get the 10th term
console.log(fib.get(10));
// = 55
```

#### BigFibonacci

Create a Fibonacci sequence with bigints

```javascript
const { BigFibonacci } = require("nacci");

const bigFib = new BigFibonacci();

// Get the 256th term
console.log(bigFib.get(256n));
// = 141,693,817,714,056,513,234,709,965,875,411,919,657,707,794,958,199,867n
```

#### Negative terms

```javascript
const { Fibonacci } = require("nacci");

const fib = new Fibonacci();

// Get the -10th term
console.log(fib.get(-10));
// = -55
```

#### Custom initial terms

Create the [Lucas numbers](https://en.wikipedia.org/wiki/Lucas_number)

```javascript
const { Fibonacci } = require("nacci");

const lucas = new Fibonacci([2, 1]);

// Get the 10th term
console.log(lucas.get(10));
// = 123
```

#### K-bonacci

Create a k-bonacci sequence with a given k

```javascript
const { Kbonacci } = require("nacci");

// Initialize a pentanacci sequence (K = 5)
const penta = new Kbonacci(5);

// Get the 10th term
console.log(penta.get(10));
// = 236
```

Create another sequence, this time with bigints and custom initial terms.

```javascript
const { BigKbonacci } = require("nacci");

const bigPenta = new BigKbonacci(5, [2n, 3n, 5n, 7n, 11n]);

// Get the 128th term
console.log(bigPenta.get(128n));
// = 34,793,317,941,356,809,321,160,944,117,101,129,141n
```

#### Caching

Caching is enabled by default to potentially improve subsequent calls. This can be turned on or off.

```javascript
const { Tribonacci } = require("nacci");

// Create with caching off
const customs = [1, 2, 3];
const seq = new Tribonacci(customs, false);

// Turn on caching
seq.setCached(true);
```

## Advanced Usage

For more control over your sequence, we will venture away from the above convenience classes and define more of the generation details. These are primarily:

- [Generation strategy](./src/kbonacci/gen)
- [Encoding strategy](./src/kbonacci/encoding)
- [Index type / ops](./src/ops)
- [Value type / ops](./src/ops)

#### Dodecanacci

```javascript
const nacci = require("nacci");

// Set K for a dodecanacci
const K = 12;

// Use numbers for indices
const indexOps = new nacci.ops.SafeNumOps();

// Use bigints for values
const valueOps = new nacci.ops.BigOps();

// Create the encoding
const encoding = new nacci.enc.RevSumEncoding(valueOps);

// Create the strategy
const seq = new nacci.gen.KPowerGen(2, {
  encoding,
  indexOps,
  valueOps,
});

// Get the 128th term.
// The input is a number and
// the output will be a bigint
console.log(seq.get(128));
// = 83,872,747,739,176,371,407,337,180,779,802,816,512n
```

## FAQ

#### Q: What is the upper bound for K?

This depends on the generation strategy, encoding, data types, caching, initial terms and environment. If a large K is needed, it is advisable to test your use case locally.

That said, the upper bound for convenience classes are:

- 53 for `new Kbonacci(k)`. This is due to encountering number overflow for larger Ks.
- ~181,400 for `new BigKbonacci(k)`. This was due to "JavaScript heap out of memory". It is likely to be more or less in your environment.

#### Q: What is the range for indices?

This depends on the generation strategy, encoding, data types, caching, K, initial terms and environment. If a large index is needed, it is advisable to test your use case locally.

Some things to consider are:

- Can the index be represented by its data type?
- Can the value be represented by its data type?
- Is there enough memory for the index, value and generation?

For example, let's generate term 2^30th of the Fibonacci sequence. This might take a few seconds; as a string, the resulting value is ~200 MB!

```javascript
const { BigFibonacci } = require("nacci");

const bigFib = new BigFibonacci();
const index = 2n ** 30n; // 1,073,741,824

console.log(`Generating...`);
const t0 = performance.now();
bigFib.get(index);
const t1 = performance.now();
console.log(`Generation took ${t1 - t0} ms`);
```

Now let's try generating term 2^31. This should fail due to BigInt overflow.

```javascript
const { BigFibonacci } = require("nacci");

const bigFib = new BigFibonacci();
const index = 2n ** 31n; // 2,147,483,648

console.log(`Generating...`);
const t0 = performance.now();
bigFib.get(index); // throws "RangeError: Maximum BigInt size exceeded"
const t1 = performance.now();
console.log(`Generation took ${t1 - t0} ms`);
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
