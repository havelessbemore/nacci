import { DimensionError } from "../error/dimensionError";
import { NumericOps } from "../ops/numericOps";
import { Matrix } from "../type/matrix";

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
  ops: NumericOps<T>,
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
