import { Ops } from '../../../ops/ops';
import { Encoding } from '../encoding';

export declare class RevSumEncoding<T> implements Encoding<T, T[]> {
    private ops;
    readonly format: "rsum";
    private _neg1;
    private _0;
    private _1;
    constructor(ops: Ops<T>);
    genK(K: number): T[];
    genNegK(K: number): T[];
    genNegOne(K: number): T[];
    genOne(K: number): T[];
    genZero(K: number): T[];
    get(A: T[], y: number, x: number): T;
    pow(A: T[], n: T): T[];
    shift(A: T[], delta: number): T[];
    square(A: T[]): T[];
    times(A: T[], B: T[]): T[];
    toValue(data: T[], delta?: number, terms?: T[]): T;
}
