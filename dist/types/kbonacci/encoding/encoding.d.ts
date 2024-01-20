export declare const EncodingFormat: {
    readonly Matrix: "mat";
    readonly RevSum: "rsum";
    readonly Sum: "sum";
    readonly Term: "term";
};
export interface Encoding<V, D = unknown> {
    readonly format: string;
    genK(K: number): D;
    genNegK(K: number): D;
    genNegOne(K: number): D;
    genOne(K: number): D;
    genZero(K: number): D;
    pow(A: D, n: V): D;
    shift(A: D, delta: number): D;
    square(A: D): D;
    times(A: D, B: D): D;
    toValue(data: D, delta?: number, customTerms?: V[]): V;
}
