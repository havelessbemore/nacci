import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { Ops } from "../../../ops/ops";
import { tryNumTerms } from "../../../utils/try";
import { EncodingFormat, Encoding } from "../encoding";

export class RevSumEncoding<T> implements Encoding<T, T[]> {
  public readonly format = EncodingFormat.RevSum;

  private _neg1: T;
  private _0: T;
  private _1: T;

  constructor(private ops: Ops<T>) {
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
  }

  genK(K: number): T[] {
    const mat = new Array<T>(K).fill(this._1);
    for (let i = K - 2; i > 0; --i) {
      mat[i - 1] = this.ops.plus(mat[i], mat[i]);
    }
    for (let i = 1; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i], mat[i - 1]);
    }
    return mat;
  }

  genNegK(K: number): T[] {
    const mat = new Array<T>(K).fill(this._neg1);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }

  genNegOne(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K > 0) {
      mat[Math.max(0, K - 2)] = this._1;
    }
    return mat;
  }

  genOne(K: number): T[] {
    return new Array<T>(K).fill(this._1);
  }

  genZero(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }

  get(A: T[], y: number, x: number): T {
    const K = A.length - ++x;

    let value: T;
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

  pow(A: T[], n: T): T[] {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, undefined, "N");
    }

    let rem: T[] | undefined = undefined;
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

  shift(A: T[], delta: number): T[] {
    if (delta === 0) {
      return A;
    }

    const K = A.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }

    const B = new Array<T>(K);
    for (let y = 0; y < K; ++y) {
      B[y] = this.get(A, y, x);
    }
    return B;
  }

  square(A: T[]): T[] {
    return this.times(A, A);
  }

  times(A: T[], B: T[]): T[] {
    const K = A.length;
    if (K !== B.length) {
      throw new DimensionError(K, B.length);
    }

    const C = new Array<T>(K);
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

  toValue(data: T[], delta = 0, terms?: T[]): T {
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
