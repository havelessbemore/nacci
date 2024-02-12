# ![logo](./static/img/favicon_64x64.png) ![nacci](./static/img/nacci_200x64.png)

Generate numbers in a k-bonacci sequence (where each term is the sum of the previous k terms) with customizable k, initial terms, strategies and data types (number, bigint, etc).

[![Version](https://img.shields.io/npm/v/nacci.svg)](https://www.npmjs.com/package/nacci)
[![Maintenance](https://img.shields.io/maintenance/yes/2024.svg)](https://github.com/havelessbemore/nacci/graphs/commit-activity)
[![License](https://img.shields.io/github/license/havelessbemore/nacci.svg)](https://github.com/havelessbemore/nacci/blob/master/LICENSE)
[![codecov](https://codecov.io/gh/havelessbemore/nacci/graph/badge.svg?token=F362G7C9U0)](https://codecov.io/gh/havelessbemore/nacci)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/nacci)

## Features

- **Convenience**: Quickly create sequences of Fibonacci, Tribonacci and beyond.

- **K-bonacci**: Generate k-bonacci sequences for any `k >= 2`. If you've ever wanted to create a Dodecanacci (`k = 12`) or Hectonacci (`k = 100`), now you can!

- **Custom Terms**: Sequences can be created with custom initial terms.

- **Negative Indices**: Sequences extend in both the positive and negative direction. Generate the -100th term just as easily as the 100th.

- **Data-Type Agnostic**: Whether you need sequences with standard numbers, BigInts, or a custom type, `Nacci` has you covered. Any type can be used as long as type operations are provided (See [NumericOps](./src/ops/numericOps.ts)).

- **Performance**: Go beyond traditional generation methods with advanced strategies. These offer improved time and space performance for efficient access to deeper indices.

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

Here are some examples for getting started. To experiment, try ([JSFiddle](https://jsfiddle.net/Lyvbj24c/)).

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

For more control over your sequences. Available options are:

- [Generation strategies](./src/kbonacci/gen)
- [Encoding strategies](./src/kbonacci/encoding)
- [Data type operations](./src/ops)

#### Custom Dodecanacci

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
const seq = new nacci.gen.PowerGen(2, {
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

### Q: What is the range for K?

`2 <= K`

There is no fixed upper bound for K.

However, it is limited by 2 main factors. If large Ks are needed, it's advised to thoroughly test your use case.

1. K is a `number` type, so it is able to [safely](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) represent up to `2^53 - 1` (~9.01 quadrillion); aka `Number.MAX_SAFE_INTEGER`.

1. Available Memory

   Encoding and generation strategies may need to store information whose size scales with K. For example, [MatrixEncoding](./src/kbonacci/encoding/matrix/matrixEncoding.ts) creates KxK matrices, while [SumEncoding](./src/kbonacci/encoding/sum/sumEncoding.ts) uses arrays of length K. Since the maximum value for an [array's length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) is `2^32-1` (~4.29 billion), K is lowered to this limit.

   Depending on the environment, the amount of available memory for this information may lower K even further. For example, a quick test on my local machine encountered fatal errors ("JavaScript heap out of memory") at `K = 43,450,368`. The test ran with Node.js, heap size of ~2GB, and used [Kbonacci](./src/kbonacci/wrapper/kbonacci.ts).

### Q: What is the range for indices?

There are no fixed limits for indices.

However, they are limited by 3 main factors. If large (based on distance from 0) indices are needed, it's advised to thoroughly test your use case.

1. The index data type

   - Using safe numbers, the range is `Number.MIN_SAFE_INTEGER <= I <= Number.MAX_SAFE_INTEGER`.
   - Using BigInt, the range is based on [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)'s minimum and maximum values. Yes, BigInt has limits!
   - Custom data types will have their own range.

1. The value data type

   Values can grow quickly. It is important that the data type is able to adequately represent them.

   At the time of writing:

   - Using safe numbers, the Fibonacci sequence can reach index `±77`. Beyond this throws an [UnsafeError](./src/error/unsafeError.ts).
   - Using BigInt, the Fibonacci sequence can reach index `±1,546,639,204`. Beyond this throws a RangeError ("Maximum BigInt size exceeded").
   - Custom data types will have their own range.

1. Available memory

   Encoding and generation strategies may need to store many instances of the value's data type. For example, [MatrixEncoding](./src/kbonacci/encoding/matrix/matrixEncoding.ts) creates KxK matrices, while [SumEncoding](./src/kbonacci/encoding/sum/sumEncoding.ts) uses arrays of length K.

   Depending on the environment, the amount of available memory may be exhausted, especially for deeper indices where values are large. For example, the Fibonacci value for index `2^30` is 224,398,770 digits long and over 224MB as a string!

### Q: What can I use this for?

Use cases include:

1. Rate Limiting: Use sequences to create rate limiting strategies such as exponential backoff.

1. Cryptography: Sequences with good pseudo-random properties, such as k-bonacci sequences, can be used in cryptographic algorithms and for generating keys.

1. Modeling: The Fibonacci sequence is well-known for appearing in natural phenomena, such as the branching of trees, the arrangement of leaves on a stem, or the fruit sprouts of a pineapple. For this and more, k-bonacci sequences can be used to model complex natural growth patterns.

1. Financial Markets: Some traders and analysts use the Fibonacci sequence to predict stock market movements. k-bonacci sequences could potentially be applied in similar financial models to predict market dynamics.

1. Computer Algorithms: Can be used in dynamic programming algorithms to solve specific types of problems, such as counting ways of tiling, different paths in a grid, or ways of partitioning objects.

1. Algorithm Analysis: Can be used to analyze the time complexity of algorithms, especially recursive algorithms. The sequence can represent the number of operations or recursive calls being made.

1. Queue Theory: In computing and mathematics, k-bonacci sequences can be applied to problems in queue theory where arrival or service follow a pattern similar to these sequences.

1. Graph Theory: Can be used to calculate the number of paths between nodes in certain types of networks.

1. Network Design: Can be utilized in the design and analysis of network topologies, especially in distributed systems where redundancy and fault tolerance are important.

1. Physics and Chemistry: These sequences can model systems where each state is a sum of the previous states, such as in certain types of chain reactions or particle interactions.

1. Biological Systems: The study of population dynamics in biology, where the population at a certain generation can depend on several previous generations, might also find k-bonacci sequences useful for modeling.

1. Music and Art: K-bonacci sequences can be used to create auditory and/or visual patterns and structures

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
