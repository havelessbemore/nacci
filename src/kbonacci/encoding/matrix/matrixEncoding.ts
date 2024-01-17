import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { NumericOps } from "../../../ops/numericOps";
import { copy } from "../../../utils/array";
import { initMatrix, matrixMult } from "../../../utils/matrix";
import { Matrix } from "../../../type/matrix";
import { EncodingFormat, Encoding } from "../encoding";

/*
K = 4
    2c-b   2b-a  a-b-c-d [      d     c       b         a] z  2z-d 4z-2d-c
         2c+b-a    b-c-d [  a-b-c   c+d     b+c       a+b]
                     c-d [    b-c   a-b   b+c+d     a+b+c]
                       d [      c     b       a   a+b+c+d]

K = 5
    2d-c   2c-b     2b-a a-b-c-d-e [      e     d     c       b         a] z  2z-e 4z-2e-d 8z-4e-2d-c
         2d+c-b   2c+b-a   b-c-d-e [a-b-c-d   d+e   c+d     b+c       a+b]
                2d+c+b-a     c-d-e [  b-c-d a-b-c c+d+e   b+c+d     a+b+c]
                               d-e [    c-d   b-c   a-b b+c+d+e   a+b+c+d]
                                 e [      d     c     b       a a+b+c+d+e]
*/
export class MatrixEncoding<T> implements Encoding<T, Matrix<T>> {
  public readonly format = EncodingFormat.Matrix;

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

  genK(K: number): Matrix<T> {
    const matrix = initMatrix<T>(K);
    if (--K < 0) {
      return matrix;
    }

    // Populate first row
    let value = this._0;
    const ops = this.ops;
    matrix[0][0] = this._1;
    for (let x = 1; x <= K; ++x) {
      value = ops.plus(value, matrix[0][x - 1]);
      matrix[0][x] = value;
    }

    // Populate subsequent rows
    for (let y = 1; y <= K; ++y) {
      matrix[y][0] = this._1;
      for (let x = 1; x <= K; ++x) {
        matrix[y][x] = ops.plus(matrix[y - 1][x - 1], matrix[0][x]);
      }
    }

    return matrix;
  }

  genNegK(K: number): Matrix<T> {
    const matrix = initMatrix<T>(K);
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

  genNegOne(K: number): Matrix<T> {
    const matrix = initMatrix<T>(K);
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

  genOne(K: number): Matrix<T> {
    const matrix = initMatrix<T>(K);
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

  genZero(K: number): Matrix<T> {
    const matrix = initMatrix<T>(K);
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

  pow(A: Matrix<T>, n: T): Matrix<T> {
    if (this.ops.smaller(n, this._1)) {
      throw new OutOfBoundsError(n, this._1, undefined, "N");
    }

    let rem: Matrix<T> | undefined = undefined;
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

  shift(A: Matrix<T>, delta: number): Matrix<T> {
    if (delta === 0) {
      return A;
    }

    const K = A.length;
    if (delta <= -K || delta > 0) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }

    delta = -delta;
    const end = K - delta;
    const matrix = initMatrix<T>(K);
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

  square(A: Matrix<T>): Matrix<T> {
    return this.times(A, A);
  }

  times(A: Matrix<T>, B: Matrix<T>): Matrix<T> {
    return matrixMult(A, B, this.ops, this._0);
  }

  toValue(data: Matrix<T>, delta = 0, terms?: T[]): T {
    const K = data.length;
    const x = K - 1 + delta;
    if (x < 0 || x >= K) {
      throw new OutOfBoundsError(delta, 1 - K, 0, "delta");
    }
    if (terms == null) {
      return data[0][x];
    }
    if (terms.length !== K) {
      throw new DimensionError(K, terms.length);
    }
    let val = this._0;
    for (let y = 0; y < K; ++y) {
      const temp = this.ops.times(terms[y], data[y][x]);
      val = this.ops.plus(val, temp);
    }
    return val;
  }
}
