import { Ops } from "../../../ops/ops";
import { Matrix } from "../../../type/matrix";
import { Encoding } from "../encoding";
export declare class MatrixEncoding<T> implements Encoding<T, Matrix<T>> {
    private ops;
    readonly format: "mat";
    private _neg1;
    private _0;
    private _1;
    private _2;
    constructor(ops: Ops<T>);
    genK(K: number): Matrix<T>;
    genNegK(K: number): Matrix<T>;
    genNegOne(K: number): Matrix<T>;
    genOne(K: number): Matrix<T>;
    genZero(K: number): Matrix<T>;
    pow(A: Matrix<T>, n: T): Matrix<T>;
    shift(A: Matrix<T>, delta: number): Matrix<T>;
    square(A: Matrix<T>): Matrix<T>;
    times(A: Matrix<T>, B: Matrix<T>): Matrix<T>;
    toValue(data: Matrix<T>, delta?: number, terms?: T[]): T;
}
