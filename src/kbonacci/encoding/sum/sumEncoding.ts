import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { NumericOps } from "../../../ops/numericOps";
import { EncodingFormat, Encoding } from "../encoding";

export class SumEncoding<T> implements Encoding<T, T[]> {
  public readonly format = EncodingFormat.Sum;

  private _neg1: T;
  private _0: T;
  private _1: T;
  private _2: T;

  constructor(private ops: NumericOps<T>) {
    this._neg1 = ops.cast(-1);
    this._0 = ops.cast(0);
    this._1 = ops.cast(1);
    this._2 = ops.cast(2);
  }

  genK(K: number): T[] {
    const mat = new Array<T>(K);
    if (K < 1) {
      return mat;
    }
    mat[0] = this._1;
    for (let i = 1; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i - 1], mat[i - 1]);
    }
    return mat;
  }

  genNegK(K: number): T[] {
    const mat = new Array<T>(K).fill(this._2);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }

  genNegOne(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K > 1) {
      mat[0] = this._neg1;
    } else if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
  }

  genOne(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K > 0) {
      mat[K - 1] = this._1;
    }
    return mat;
  }

  genZero(K: number): T[] {
    return new Array<T>(K).fill(this._1);
  }

  get(A: T[], y: number, x: number): T {
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
    const K = A.length - 1;
    const x = K + 1 + delta;
    if (x <= 0 || x > K) {
      throw new OutOfBoundsError(delta, -K, 0, "delta");
    }
    const util = this.ops;
    const B = new Array<T>(K + 1);
    const v = util.times(this._2, this.get(A, 0, x));
    for (let y = 0; y <= K; ++y) {
      B[y] = util.minus(v, this.get(A, K - y, x));
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
      let val = this._0;
      for (let n = 0; n < K; ++n) {
        const temp = this.ops.times(this.get(A, m, n), this.get(B, n, m));
        val = this.ops.plus(val, temp);
      }
      C[m] = val;
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
    if (terms.length !== K) {
      throw new DimensionError(K, terms.length);
    }
    let val = this._0;
    for (let y = 0; y < K; ++y) {
      const temp = this.ops.times(terms[y], this.get(data, y, x));
      val = this.ops.plus(val, temp);
    }
    return val;
  }
}
