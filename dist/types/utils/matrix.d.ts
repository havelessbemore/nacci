import { Ops } from "../ops/ops";
import { Matrix } from "../type/matrix";
export declare function fillMatrix<T>(matrix: Matrix<T>, value: T): void;
export declare function initMatrix<T>(Y: number, X?: number): Matrix<T>;
export declare function matrixMult<T>(A: Matrix<T>, B: Matrix<T>, ops: Ops<T>, zero?: T): Matrix<T>;
