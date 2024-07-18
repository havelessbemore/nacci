/*!
 * nacci
 * https://github.com/havelessbemore/nacci
 *
 * Copyright (C) 2023-2024 Michael Rojas <dev.michael.rojas@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class DimensionError extends RangeError {
  constructor(actual, expected, relation = "!=") {
    const a = Array.isArray(actual) ? actual.join("x") : `${actual}`;
    const b = Array.isArray(expected) ? expected.join("x") : `${expected}`;
    super(`Dimension mismatch. ${a} ${relation} ${b}`);
  }
}

class IntegerError extends TypeError {
  constructor(value, label = "Value") {
    super(`Not an integer. ${label}: ${String(value)}`);
  }
}

class OutOfBoundsError extends RangeError {
  constructor(actual, min, max, label = "index", msg = "Out of bounds") {
    const message = [msg];
    if (min != null || max != null) {
      message.push(`. Expected`);
      if (min != null) {
        message.push(` ${String(min)} <=`);
      }
      message.push(` ${label}`);
      if (max != null) {
        message.push(` <= ${String(max)}`);
      }
    }
    message.push(`. ${label}: ${String(actual)}`);
    super(message.join(""));
  }
}

const K_MIN = 2;
const SAFE_MAX = Number.MAX_SAFE_INTEGER;
const SAFE_MIN = Number.MIN_SAFE_INTEGER;

class UnsafeError extends OutOfBoundsError {
  constructor(actual) {
    super(actual, SAFE_MIN, SAFE_MAX, "value", "Unsafe value");
  }
}

function isInteger(value) {
  return Number.isInteger(value);
}
function isSafeNumber(value) {
  return value >= SAFE_MIN && value <= SAFE_MAX;
}

function tryK(K) {
  if (!isInteger(K)) {
    throw new IntegerError(K, "K");
  }
  if (K < K_MIN) {
    throw new OutOfBoundsError(K, K_MIN, void 0, "K");
  }
  return K;
}
function tryNumTerms(maxLen, terms) {
  if (terms.length > maxLen) {
    throw new DimensionError(terms.length, maxLen, "<=");
  }
  return terms;
}
function trySafe(n) {
  if (!isSafeNumber(n)) {
    throw new UnsafeError(n);
  }
  return n;
}

var __defProp$9 = Object.defineProperty;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$9 = (obj, key, value) => __defNormalProp$9(obj, typeof key !== "symbol" ? key + "" : key, value);
class Powers {
  constructor(value, keyOps, valOps, cached = true) {
    __publicField$9(this, "cached");
    __publicField$9(this, "keyOps");
    __publicField$9(this, "valOps");
    __publicField$9(this, "pows");
    this.cached = cached;
    this.keyOps = keyOps;
    this.pows = [value];
    this.valOps = valOps;
  }
  get size() {
    return this.pows.length;
  }
  clear() {
    this.pows.length = 1;
  }
  get(N) {
    const keyOps = this.keyOps;
    const valOps = this.valOps;
    const pows = this.cached ? this.pows : [this.pows[0]];
    let value = void 0;
    for (let i = 0; keyOps.sign(N) > 0; ++i) {
      if (pows[i] == null) {
        pows[i] = valOps.square(pows[i - 1]);
      }
      if (keyOps.isOdd(N)) {
        if (value == null) {
          value = pows[i];
        } else {
          value = valOps.times(value, pows[i]);
        }
      }
      N = keyOps.trunc(keyOps.half(N));
    }
    if (value == null) {
      throw new OutOfBoundsError(N, keyOps.cast(1));
    }
    return value;
  }
  getCached() {
    return this.cached;
  }
  setCached(cached) {
    this.cached = cached;
    if (!cached) {
      this.clear();
    }
  }
  setValue(value) {
    if (value !== this.pows[0]) {
      this.pows = [value];
      this.clear();
    }
  }
}

var __defProp$8 = Object.defineProperty;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$8 = (obj, key, value) => __defNormalProp$8(obj, typeof key !== "symbol" ? key + "" : key, value);
class KPowerGen {
  constructor(K, config) {
    __publicField$8(this, "cached");
    __publicField$8(this, "customs");
    __publicField$8(this, "encoding");
    __publicField$8(this, "indexOps");
    __publicField$8(this, "isStd");
    __publicField$8(this, "_K");
    __publicField$8(this, "neg");
    __publicField$8(this, "pos");
    __publicField$8(this, "v0");
    __publicField$8(this, "zero");
    tryK(K);
    const cached = config.cached ?? true;
    const customs = config.customs ?? [];
    const encoding = config.encoding;
    const indexOps = config.indexOps ?? config.ops;
    if (encoding == null) {
      throw new TypeError(`Missing encoding`);
    }
    if (indexOps == null) {
      throw new TypeError(`Missing index operations`);
    }
    this.cached = cached;
    this.customs = customs;
    this.encoding = encoding;
    this.indexOps = indexOps;
    this.isStd = false;
    this._K = K;
    this.neg = new Powers(encoding.genNegK(K), indexOps, encoding, cached);
    this.pos = new Powers(encoding.genK(K), indexOps, encoding, cached);
    this.zero = encoding.genZero(K);
    this.v0 = encoding.toValue(this.zero, 0);
    this.setCustoms(customs);
  }
  get K() {
    return this._K;
  }
  get(N) {
    const iOps = this.indexOps;
    const T = iOps.cast(this.customs.length - 1);
    if (iOps.sign(N) >= 0 && iOps.smallerEq(N, T)) {
      return this.customs[iOps.toNumber(N)];
    }
    let data;
    let delta;
    N = iOps.minus(N, T);
    const K = iOps.cast(this.K);
    if (iOps.sign(N) > 0) {
      const mod = iOps.mod(iOps.minus1(N), K);
      delta = iOps.minus1(K);
      N = iOps.trunc(iOps.dividedBy(N, K));
      N = iOps.equal(mod, delta) ? N : iOps.plus1(N);
      delta = iOps.plus(iOps.negative(delta), mod);
      data = this.pos.get(N);
    } else if (iOps.larger(N, iOps.negative(K))) {
      delta = N;
      data = this.zero;
    } else {
      delta = iOps.mod(N, K);
      N = iOps.negative(N);
      N = iOps.trunc(iOps.dividedBy(N, K));
      data = this.neg.get(N);
    }
    const customs = this.isStd ? void 0 : this.customs;
    return this.encoding.toValue(data, iOps.toNumber(delta), customs);
  }
  getCached() {
    return this.cached;
  }
  getCustoms() {
    return this.customs;
  }
  setCached(value) {
    this.cached = value;
    this.neg.setCached(value);
    this.pos.setCached(value);
  }
  setCustoms(customs) {
    if (customs == null || customs.length < 1) {
      this.isStd = true;
      this.customs = [this.v0];
    } else {
      tryNumTerms(this.K, customs);
      this.isStd = false;
      this.customs = customs;
    }
  }
}

var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$7 = (obj, key, value) => __defNormalProp$7(obj, typeof key !== "symbol" ? key + "" : key, value);
class PowerGen {
  constructor(K, config) {
    __publicField$7(this, "cached");
    __publicField$7(this, "customs");
    __publicField$7(this, "encoding");
    __publicField$7(this, "indexOps");
    __publicField$7(this, "isStd");
    __publicField$7(this, "_K");
    __publicField$7(this, "neg");
    __publicField$7(this, "pos");
    __publicField$7(this, "v0");
    tryK(K);
    const cached = config.cached ?? true;
    const customs = config.customs ?? [];
    const encoding = config.encoding;
    const indexOps = config.indexOps ?? config.ops;
    if (encoding == null) {
      throw new TypeError(`Missing encoding`);
    }
    if (indexOps == null) {
      throw new TypeError(`Missing index operations`);
    }
    this.cached = cached;
    this.customs = [];
    this.encoding = encoding;
    this.indexOps = indexOps;
    this.isStd = false;
    this._K = K;
    this.neg = new Powers(encoding.genNegOne(K), indexOps, encoding, cached);
    const one = encoding.genOne(K);
    this.pos = new Powers(one, indexOps, encoding, cached);
    this.v0 = encoding.toValue(one, -1);
    this.setCustoms(customs);
  }
  get K() {
    return this._K;
  }
  get(N) {
    const iOps = this.indexOps;
    const T = iOps.cast(this.customs.length - 1);
    if (iOps.sign(N) >= 0 && iOps.smallerEq(N, T)) {
      return this.customs[iOps.toNumber(N)];
    }
    N = iOps.minus(N, T);
    const data = iOps.sign(N) > 0 ? this.pos.get(N) : this.neg.get(iOps.negative(N));
    const customs = this.isStd ? void 0 : this.customs;
    return this.encoding.toValue(data, 0, customs);
  }
  getCached() {
    return this.cached;
  }
  getCustoms() {
    return this.customs;
  }
  setCached(value) {
    this.cached = value;
    this.neg.setCached(value);
    this.pos.setCached(value);
  }
  setCustoms(customs) {
    if (customs == null || customs.length < 1) {
      this.isStd = true;
      this.customs = [this.v0];
    } else {
      tryNumTerms(this.K, customs);
      this.isStd = false;
      this.customs = customs;
    }
  }
}

function copy(A, B, target = 0, start = 0, end = A.length) {
  if (A === B) {
    return A.copyWithin(target, start, end);
  }
  if (target < 0) {
    target = Math.max(0, B.length + target);
  }
  if (start < 0) {
    start = Math.max(0, A.length + start);
  }
  if (end < 0) {
    end = Math.max(0, A.length + end);
  }
  end = start + Math.max(0, Math.min(B.length - target, end - start));
  while (start < end) {
    B[target++] = A[start++];
  }
  return B;
}
function getSum(arr, ops) {
  const N = arr.length;
  if (N < 1) {
    return void 0;
  }
  let value = arr[0];
  for (let i = 1; i < N; ++i) {
    value = ops.plus(value, arr[i]);
  }
  return value;
}
function padStart(array, targetLength, padValue) {
  if (targetLength <= array.length) {
    return;
  }
  const N = array.length;
  const i = targetLength - N;
  array.length = targetLength;
  array.fill(padValue, N, i);
  array.copyWithin(i, 0, N);
  array.fill(padValue, 0, Math.min(i, N));
}

var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$6 = (obj, key, value) => __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value);
class SlidingWindowGen {
  constructor(K, config) {
    __publicField$6(this, "delta");
    __publicField$6(this, "indexOps");
    __publicField$6(this, "_K");
    __publicField$6(this, "minN");
    __publicField$6(this, "next");
    __publicField$6(this, "valueOps");
    __publicField$6(this, "values");
    tryK(K);
    let customs = config.customs ?? [];
    const indexOps = config.indexOps ?? config.ops;
    const valueOps = config.valueOps ?? config.ops;
    if (indexOps == null) {
      throw new TypeError(`Missing index operations`);
    }
    if (valueOps == null) {
      throw new TypeError(`Missing value operations`);
    }
    const _0 = valueOps.cast(0);
    if (customs == null || customs.length < 1) {
      const _1 = valueOps.cast(1);
      customs = [_0, _1];
    } else {
      tryNumTerms(K, customs);
    }
    this.delta = 0;
    this.indexOps = indexOps;
    this._K = K;
    this.valueOps = valueOps;
    this.minN = indexOps.minus(indexOps.cast(customs.length), indexOps.cast(K));
    this.next = getSum(customs, valueOps) ?? _0;
    this.values = Array.from(customs);
    padStart(this.values, K, _0);
  }
  get K() {
    return this._K;
  }
  get(N) {
    const ops = this.indexOps;
    if (ops.smaller(N, this.minN)) {
      this.reverse(ops.minus(this.minN, N));
    } else {
      const maxN = ops.plus(this.minN, ops.cast(this.K));
      if (ops.largerEq(N, maxN)) {
        this.forward(ops.plus1(ops.minus(N, maxN)));
      }
    }
    const i = ops.plus(ops.minus(N, this.minN), ops.cast(this.delta));
    return this.values[ops.toNumber(i) % this.K];
  }
  forward(i) {
    const iOps = this.indexOps;
    const vOps = this.valueOps;
    while (iOps.sign(i) > 0) {
      const temp = this.values[this.delta];
      this.values[this.delta] = this.next;
      this.next = vOps.plus(this.next, vOps.minus(this.next, temp));
      this.delta = (this.delta + 1) % this.K;
      this.minN = iOps.plus1(this.minN);
      i = iOps.minus1(i);
    }
  }
  reverse(i) {
    const iOps = this.indexOps;
    const vOps = this.valueOps;
    while (iOps.sign(i) > 0) {
      const delta = (this.delta - 1 + this.K) % this.K;
      const value = this.values[delta];
      const newValue = vOps.plus(vOps.minus(value, this.next), value);
      this.minN = iOps.minus1(this.minN);
      this.next = value;
      this.delta = delta;
      this.values[delta] = newValue;
      i = iOps.minus1(i);
    }
  }
}

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  KPowerGen: KPowerGen,
  PowerGen: PowerGen,
  SlidingWindowGen: SlidingWindowGen
});

function initMatrix(Y, X = Y) {
  const matrix = new Array(Y);
  for (let i = 0; i < Y; ++i) {
    matrix[i] = new Array(X);
  }
  return matrix;
}
function matrixMult(A, B, ops, zero = ops.cast(0)) {
  const M = A.length;
  const N = A[0]?.length ?? 0;
  const P = B[0]?.length ?? 0;
  if (N !== B.length) {
    throw new DimensionError([M, N], [B.length, P]);
  }
  const C = initMatrix(M, P);
  for (let m = 0; m < M; ++m) {
    for (let p = 0; p < P; ++p) {
      let val = zero;
      for (let n = 0; n < N; ++n) {
        const temp = ops.times(A[m][n], B[n][p]);
        val = ops.plus(val, temp);
      }
      C[m][p] = val;
    }
  }
  return C;
}

const EncodingFormat = {
  Matrix: "mat",
  RevSum: "rsum",
  Sum: "sum",
  Term: "term"
};

var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$5 = (obj, key, value) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value);
class MatrixEncoding {
  constructor(ops) {
    this.ops = ops;
    __publicField$5(this, "format", EncodingFormat.Matrix);
    __publicField$5(this, "_neg1");
    __publicField$5(this, "_0");
    __publicField$5(this, "_1");
    __publicField$5(this, "_2");
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
    this._2 = ops.cast(2);
  }
  genK(K) {
    const matrix = initMatrix(K);
    if (--K < 0) {
      return matrix;
    }
    let value = this._0;
    const ops = this.ops;
    matrix[0][0] = this._1;
    for (let x = 1; x <= K; ++x) {
      value = ops.plus(value, matrix[0][x - 1]);
      matrix[0][x] = value;
    }
    for (let y = 1; y <= K; ++y) {
      matrix[y][0] = this._1;
      for (let x = 1; x <= K; ++x) {
        matrix[y][x] = ops.plus(matrix[y - 1][x - 1], matrix[0][x]);
      }
    }
    return matrix;
  }
  genNegK(K) {
    const matrix = initMatrix(K);
    if (--K < 0) {
      return matrix;
    }
    matrix[0][0] = this._2;
    matrix[0].fill(this._0, 1, K);
    matrix[0][K] = this._neg1;
    for (let i = 1; i <= K; ++i) {
      matrix[i].fill(this._0);
      matrix[i][i - 1] = this._neg1;
      matrix[i][i] = this._2;
      matrix[i][K] = this._neg1;
    }
    matrix[K][K] = this._1;
    return matrix;
  }
  genNegOne(K) {
    const matrix = initMatrix(K);
    if (--K < 0) {
      return matrix;
    }
    for (let i = 0; i < K; ++i) {
      matrix[i][0] = this._neg1;
      matrix[i].fill(this._0, 1);
      matrix[i][i + 1] = this._1;
    }
    matrix[K][0] = this._1;
    matrix[K].fill(this._0, 1);
    return matrix;
  }
  genOne(K) {
    const matrix = initMatrix(K);
    if (--K < 0) {
      return matrix;
    }
    matrix[0].fill(this._0);
    matrix[0][K] = this._1;
    for (let i = 1; i <= K; ++i) {
      matrix[i].fill(this._0);
      matrix[i][i - 1] = this._1;
      matrix[i][K] = this._1;
    }
    return matrix;
  }
  genZero(K) {
    const matrix = initMatrix(K);
    for (let i = 0; i < K; ++i) {
      matrix[i].fill(this._0);
      matrix[i][i] = this._1;
    }
    return matrix;
  }
  /*
  get(A: Matrix<T>, y: number, x: number): T {
    return A[y][x];
  }
  */
  pow(A, n) {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, void 0, "N");
    }
    let rem = void 0;
    while (this.ops.larger(n, this._1)) {
      if (this.ops.isOdd(n)) {
        rem = rem == null ? A : this.times(rem, A);
      }
      A = this.times(A, A);
      n = this.ops.half(n);
      n = this.ops.trunc(n);
    }
    return rem == null ? A : this.times(rem, A);
  }
  shift(A, delta) {
    if (delta === 0) {
      return A;
    }
    const K = A.length;
    if (delta <= -K || delta > 0) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    delta = -delta;
    const end = K - delta;
    const matrix = initMatrix(K);
    for (let y = 0; y < K; ++y) {
      matrix[y].fill(this._0, 0, delta);
      copy(A[y], matrix[y], delta, 0, end);
    }
    for (const ops = this.ops; delta > 0; --delta) {
      const term = matrix[0][delta];
      for (let y = 1; y < K; ++y) {
        matrix[y - 1][delta - 1] = ops.minus(matrix[y][delta], term);
      }
      matrix[K - 1][delta - 1] = term;
    }
    return matrix;
  }
  square(A) {
    return this.times(A, A);
  }
  times(A, B) {
    return matrixMult(A, B, this.ops, this._0);
  }
  toValue(data, delta = 0, terms) {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return data[0][x];
    }
    tryNumTerms(K, terms);
    let val = this._0;
    const minY = K - terms.length;
    for (let y = minY; y < K; ++y) {
      const temp = this.ops.times(terms[y - minY], data[y][x]);
      val = this.ops.plus(val, temp);
    }
    return val;
  }
}

var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$4 = (obj, key, value) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value);
class RevSumEncoding {
  constructor(ops) {
    this.ops = ops;
    __publicField$4(this, "format", EncodingFormat.RevSum);
    __publicField$4(this, "_neg1");
    __publicField$4(this, "_0");
    __publicField$4(this, "_1");
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
  }
  genK(K) {
    const mat = new Array(K).fill(this._1);
    for (let i = K - 2; i > 0; --i) {
      mat[i - 1] = this.ops.plus(mat[i], mat[i]);
    }
    for (let i = 1; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i], mat[i - 1]);
    }
    return mat;
  }
  genNegK(K) {
    const mat = new Array(K).fill(this._neg1);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }
  genNegOne(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[Math.max(0, K - 2)] = this._1;
    }
    return mat;
  }
  genOne(K) {
    return new Array(K).fill(this._1);
  }
  genZero(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }
  get(A, y, x) {
    const K = A.length - ++x;
    let value;
    if (y < x) {
      value = A[K + y];
    } else {
      const z = y - x;
      value = A[z - 1] ?? this._0;
      value = this.ops.minus(A[z], value);
      value = this.ops.plus(A[z], value);
    }
    return this.ops.minus(value, A[K - 1] ?? this._0);
  }
  pow(A, n) {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, void 0, "N");
    }
    let rem = void 0;
    while (this.ops.larger(n, this._1)) {
      if (this.ops.isOdd(n)) {
        rem = rem == null ? A : this.times(rem, A);
      }
      A = this.times(A, A);
      n = this.ops.half(n);
      n = this.ops.trunc(n);
    }
    return rem == null ? A : this.times(rem, A);
  }
  shift(A, delta) {
    if (delta === 0) {
      return A;
    }
    const K = A.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    const B = new Array(K);
    for (let y = 0; y < K; ++y) {
      B[y] = this.get(A, y, x);
    }
    return B;
  }
  square(A) {
    return this.times(A, A);
  }
  times(A, B) {
    const K = A.length;
    if (K !== B.length) {
      throw new DimensionError(K, B.length);
    }
    const C = new Array(K);
    for (let m = 0; m < K; ++m) {
      let value = this._0;
      for (let n = 0; n < K; ++n) {
        const temp = this.ops.times(this.get(A, m, n), B[n]);
        value = this.ops.plus(value, temp);
      }
      C[m] = value;
    }
    return C;
  }
  toValue(data, delta = 0, terms) {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return this.get(data, 0, x);
    }
    tryNumTerms(K, terms);
    let value = this._0;
    const minY = K - terms.length;
    for (let y = minY; y < K; ++y) {
      const temp = this.ops.times(terms[y - minY], this.get(data, y, x));
      value = this.ops.plus(value, temp);
    }
    return value;
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value);
class SumEncoding {
  constructor(ops) {
    this.ops = ops;
    __publicField$3(this, "format", EncodingFormat.Sum);
    __publicField$3(this, "_neg1");
    __publicField$3(this, "_0");
    __publicField$3(this, "_1");
    __publicField$3(this, "_2");
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
    this._2 = ops.cast(2);
  }
  genK(K) {
    const mat = new Array(K);
    if (K < 1) {
      return mat;
    }
    mat[0] = this._1;
    for (let i = 1; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i - 1], mat[i - 1]);
    }
    return mat;
  }
  genNegK(K) {
    const mat = new Array(K).fill(this._2);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }
  genNegOne(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 1) {
      mat[0] = this._neg1;
    } else if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
  }
  genOne(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }
  genZero(K) {
    return new Array(K).fill(this._1);
  }
  get(A, y, x) {
    if (y < x) {
      return this.ops.minus(A[x], A[x - 1 - y]);
    }
    if (y === x) {
      return A[x];
    }
    const z = A.length - 1 - y + x;
    let res = this.ops.plus(A[z], A[z]);
    res = this.ops.minus(A[z + 1], res);
    res = this.ops.plus(res, A[x]);
    return res;
  }
  pow(A, n) {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, void 0, "N");
    }
    let rem = void 0;
    while (this.ops.larger(n, this._1)) {
      if (this.ops.isOdd(n)) {
        rem = rem == null ? A : this.times(rem, A);
      }
      A = this.times(A, A);
      n = this.ops.half(n);
      n = this.ops.trunc(n);
    }
    return rem == null ? A : this.times(rem, A);
  }
  shift(A, delta) {
    if (delta === 0) {
      return A;
    }
    const K = A.length - 1;
    const x = K + 1 + delta;
    if (x <= 0 || x > K) {
      throw new OutOfBoundsError(delta, -K, 0, "delta");
    }
    const util = this.ops;
    const B = new Array(K + 1);
    const v = util.times(this._2, this.get(A, 0, x));
    for (let y = 0; y <= K; ++y) {
      B[y] = util.minus(v, this.get(A, K - y, x));
    }
    return B;
  }
  square(A) {
    return this.times(A, A);
  }
  times(A, B) {
    const K = A.length;
    if (K !== B.length) {
      throw new DimensionError(K, B.length);
    }
    const C = new Array(K);
    for (let m = 0; m < K; ++m) {
      let val = this._0;
      for (let n = 0; n < K; ++n) {
        const temp = this.ops.times(this.get(A, m, n), this.get(B, n, m));
        val = this.ops.plus(val, temp);
      }
      C[m] = val;
    }
    return C;
  }
  toValue(data, delta = 0, terms) {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return this.get(data, 0, x);
    }
    tryNumTerms(K, terms);
    let val = this._0;
    const minY = K - terms.length;
    for (let y = minY; y < K; ++y) {
      const temp = this.ops.times(terms[y - minY], this.get(data, y, x));
      val = this.ops.plus(val, temp);
    }
    return val;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
class TermEncoding {
  constructor(ops) {
    this.ops = ops;
    __publicField$2(this, "format", EncodingFormat.Term);
    __publicField$2(this, "_neg1");
    __publicField$2(this, "_0");
    __publicField$2(this, "_1");
    __publicField$2(this, "_2");
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
    this._2 = ops.cast(2);
  }
  genK(K) {
    const mat = new Array(K).fill(this._1);
    for (let i = 2; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i - 1], mat[i - 1]);
    }
    return mat;
  }
  genNegK(K) {
    const mat = new Array(K).fill(this._0);
    if (K >= 2) {
      mat[0] = this._2;
      mat[K - 1] = this._neg1;
    } else if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
  }
  genNegOne(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[0] = this._neg1;
      mat[Math.min(1, K - 1)] = this._1;
    }
    return mat;
  }
  genOne(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }
  genZero(K) {
    const mat = new Array(K).fill(this._0);
    if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
  }
  pow(A, n) {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, void 0, "N");
    }
    let rem = void 0;
    while (this.ops.larger(n, this._1)) {
      if (this.ops.isOdd(n)) {
        rem = rem == null ? A : this.times(rem, A);
      }
      A = this.times(A, A);
      n = this.ops.half(n);
      n = this.ops.trunc(n);
    }
    return rem == null ? A : this.times(rem, A);
  }
  shift(A, delta) {
    if (delta === 0) {
      return A;
    }
    const K = A.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    delta = -delta;
    const B = Array.from(A);
    B.copyWithin(delta, 0);
    let sum = getSum(A, this.ops) ?? this._0;
    for (let i = K - 1; delta > 0; --i) {
      let newValue = this.ops.plus(A[i], A[i]);
      newValue = this.ops.minus(newValue, sum);
      B[--delta] = newValue;
      sum = A[i];
    }
    return B;
  }
  square(A) {
    return this.times(A, A);
  }
  times(A, B) {
    return matrixMult([A], toMatrix(B, this.ops), this.ops)[0];
  }
  toValue(data, delta = 0, terms) {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return data[x];
    }
    tryNumTerms(K, terms);
    let value = this._0;
    const minY = K - terms.length;
    const mat = toMatrix(data, this.ops);
    for (let y = minY; y < K; ++y) {
      const temp = this.ops.times(terms[y - minY], mat[y][x]);
      value = this.ops.plus(value, temp);
    }
    return value;
  }
}
function toMatrix(arr, ops) {
  const N = arr.length;
  const mat = initMatrix(N);
  if (N < 1) {
    return mat;
  }
  mat[N - 1] = arr.slice(1);
  for (let y = N - 2; y > 0; --y) {
    for (let x = 0; x < y; ++x) {
      mat[y][x] = ops.minus(mat[y + 1][x + 1], arr[x + 1]);
    }
  }
  mat[0] = Array.from(arr);
  for (let y = 1; y < N; ++y) {
    for (let x = y; x < N; ++x) {
      mat[y][x] = ops.plus(mat[y - 1][x - 1], arr[x]);
    }
  }
  return mat;
}

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MatrixEncoding: MatrixEncoding,
  RevSumEncoding: RevSumEncoding,
  SumEncoding: SumEncoding,
  TermEncoding: TermEncoding
});

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DimensionError: DimensionError,
  IntegerError: IntegerError,
  OutOfBoundsError: OutOfBoundsError,
  UnsafeError: UnsafeError
});

class BigOps {
  cast(a) {
    return BigInt(a);
  }
  dividedBy(a, b) {
    return a / b;
  }
  equal(a, b) {
    return a == b;
  }
  half(a) {
    return a >> 1n;
  }
  isOdd(a) {
    return (a & 1n) === 1n;
  }
  larger(a, b) {
    return a > b;
  }
  largerEq(a, b) {
    return a >= b;
  }
  minus(a, b) {
    return a - b;
  }
  minus1(a) {
    return a - 1n;
  }
  mod(a, b) {
    return a % b;
  }
  negative(a) {
    return -a;
  }
  plus(a, b) {
    return a + b;
  }
  plus1(a) {
    return a + 1n;
  }
  sign(a) {
    return a < 0n ? -1 : +(a > 0n);
  }
  smaller(a, b) {
    return a < b;
  }
  smallerEq(a, b) {
    return a <= b;
  }
  square(a) {
    return a ** 2n;
  }
  times(a, b) {
    return a * b;
  }
  toNumber(a) {
    return Number(a);
  }
  trunc(a) {
    return a;
  }
}

class NumOps {
  cast(a) {
    return Number(a);
  }
  dividedBy(a, b) {
    return a / b;
  }
  equal(a, b) {
    return a == b;
  }
  half(a) {
    return a * 0.5;
  }
  isOdd(a) {
    return (a & 1) === 1;
  }
  larger(a, b) {
    return a > b;
  }
  largerEq(a, b) {
    return a >= b;
  }
  minus(a, b) {
    return a - b;
  }
  minus1(a) {
    return a - 1;
  }
  mod(a, b) {
    return a % b;
  }
  negative(a) {
    return -a;
  }
  plus(a, b) {
    return a + b;
  }
  plus1(a) {
    return a + 1;
  }
  sign(a) {
    return a < 0 ? -1 : +(a > 0);
  }
  smaller(a, b) {
    return a < b;
  }
  smallerEq(a, b) {
    return a <= b;
  }
  square(a) {
    return a ** 2;
  }
  times(a, b) {
    return a * b;
  }
  toNumber(a) {
    return a;
  }
  trunc(a) {
    return Math.trunc(a);
  }
}

class SafeNumOps {
  cast(a) {
    return trySafe(Number(a));
  }
  dividedBy(a, b) {
    return trySafe(a / b);
  }
  equal(a, b) {
    return a == b;
  }
  half(a) {
    return a * 0.5;
  }
  isOdd(a) {
    return (a & 1) === 1;
  }
  larger(a, b) {
    return a > b;
  }
  largerEq(a, b) {
    return a >= b;
  }
  minus(a, b) {
    return trySafe(a - b);
  }
  minus1(a) {
    return trySafe(a - 1);
  }
  mod(a, b) {
    return a % b;
  }
  negative(a) {
    return trySafe(-a);
  }
  plus(a, b) {
    return trySafe(a + b);
  }
  plus1(a) {
    return trySafe(a + 1);
  }
  sign(a) {
    return a < 0n ? -1 : +(a > 0n);
  }
  smaller(a, b) {
    return a < b;
  }
  smallerEq(a, b) {
    return a <= b;
  }
  square(a) {
    return trySafe(a ** 2);
  }
  times(a, b) {
    return trySafe(a * b);
  }
  toNumber(a) {
    return a;
  }
  trunc(a) {
    return Math.trunc(a);
  }
}

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BigOps: BigOps,
  NumOps: NumOps,
  SafeNumOps: SafeNumOps
});

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
class BigKbonacci {
  constructor(K, customs, cached = true) {
    __publicField$1(this, "customs");
    __publicField$1(this, "gen");
    const ops = new BigOps();
    const encoding = new SumEncoding(ops);
    this.customs = customs ?? [];
    this.gen = new PowerGen(K, { cached, customs, encoding, ops });
  }
  get K() {
    return this.gen.K;
  }
  get(index) {
    return this.gen.get(index);
  }
  getCached() {
    return this.gen.getCached();
  }
  getCustoms() {
    return this.customs;
  }
  setCached(value) {
    this.gen.setCached(value);
  }
}

class BigFibonacci extends BigKbonacci {
  constructor(customs, cached) {
    super(2, customs, cached);
  }
}

class BigTribonacci extends BigKbonacci {
  constructor(customs, cached) {
    super(3, customs, cached);
  }
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
class Kbonacci {
  constructor(K, customs, cached = true) {
    __publicField(this, "customs");
    __publicField(this, "gen");
    const ops = new SafeNumOps();
    const encoding = new SumEncoding(ops);
    this.customs = customs ?? [];
    this.gen = new PowerGen(K, { cached, customs, encoding, ops });
  }
  get K() {
    return this.gen.K;
  }
  get(index) {
    return this.gen.get(index);
  }
  getCached() {
    return this.gen.getCached();
  }
  getCustoms() {
    return this.customs;
  }
  setCached(value) {
    this.gen.setCached(value);
  }
}

class Fibonacci extends Kbonacci {
  constructor(customs, cached) {
    super(2, customs, cached);
  }
}

class Tribonacci extends Kbonacci {
  constructor(customs, cached) {
    super(3, customs, cached);
  }
}

export { BigFibonacci, BigKbonacci, BigTribonacci, Fibonacci, Kbonacci, Tribonacci, index$2 as enc, index$1 as err, index$3 as gen, index as ops };
//# sourceMappingURL=nacci.mjs.map
