import { DimensionError } from "../error/dimensionError";
import { Ops } from "../ops/ops";
import { Matrix } from "../type/matrix";

export function castMatrix<T>(mat: Matrix<unknown>, ops: Ops<T>): Matrix<T> {
  const Y = mat.length;
  const X = mat[0]?.length ?? 0;
  const out = initMatrix<T>(Y, X);
  for (let y = 0; y < Y; ++y) {
    for (let x = 0; x < X; ++x) {
      out[y][x] = ops.cast(mat[y][x]);
    }
  }
  return out;
}

export function fillMatrix<T>(matrix: Matrix<T>, value: T): void {
  const M = matrix.length;
  for (let m = 0; m < M; ++m) {
    matrix[m].fill(value);
  }
}

export function initMatrix<T>(Y: number, X = Y): Matrix<T> {
  const matrix = new Array<T[]>(Y);
  for (let i = 0; i < Y; ++i) {
    matrix[i] = new Array<T>(X);
  }
  return matrix;
}

export function matrixMult<T>(
  A: Matrix<T>,
  B: Matrix<T>,
  ops: Ops<T>,
  zero: T = ops.cast(0)
): Matrix<T> {
  const M = A.length;
  const N = A[0]?.length ?? 0;
  const P = B[0]?.length ?? 0;
  if (N !== B.length) {
    throw new DimensionError([M, N], [B.length, P]);
  }

  const C = initMatrix<T>(M, P);
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
