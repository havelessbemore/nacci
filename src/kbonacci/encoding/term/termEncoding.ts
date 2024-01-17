import { initMatrix, matrixMult } from "../../../utils/matrix";
import { Matrix } from "../../../type/matrix";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";
import { EncodingFormat, Encoding } from "../encoding";
import { NumericOps } from "../../../ops/numericOps";
import { getSum } from "../../../utils/array";

export class TermEncoding<T> implements Encoding<T, T[]> {
  public readonly format = EncodingFormat.Term;

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
    const mat = new Array<T>(K).fill(this._1);
    for (let i = 2; i < K; ++i) {
      mat[i] = this.ops.plus(mat[i - 1], mat[i - 1]);
    }
    return mat;
  }

  genNegK(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K >= 2) {
      mat[0] = this._2;
      mat[K - 1] = this._neg1;
    } else if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
  }

  genNegOne(K: number): T[] {
    const mat = new Array<T>(K).fill(this._0);
    if (K > 0) {
      mat[0] = this._neg1;
      mat[Math.min(1, K - 1)] = this._1;
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
    const mat = new Array<T>(K).fill(this._0);
    if (K > 0) {
      mat[0] = this._1;
    }
    return mat;
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

  square(A: T[]): T[] {
    return this.times(A, A);
  }

  times(A: T[], B: T[]): T[] {
    return matrixMult([A], toMatrix(B, this.ops), this.ops)[0];
  }

  toValue(data: T[], delta = 0, terms?: T[]): T {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return data[x];
    }
    if (terms.length !== K) {
      throw new DimensionError(K, terms.length);
    }
    let value = this._0;
    const mat = toMatrix(data, this.ops);
    for (let y = 0; y < K; ++y) {
      const temp = this.ops.times(terms[y], mat[y][x]);
      value = this.ops.plus(value, temp);
    }
    return value;
  }
}

function toMatrix<T>(arr: T[], ops: NumericOps<T>): Matrix<T> {
  const N = arr.length;
  const mat = initMatrix<T>(N);

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
