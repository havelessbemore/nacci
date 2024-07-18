interface Ops<T = unknown> {
    cast(value: unknown): T;
    toNumber(a: T): number;
    equal(a: T, b: T): boolean;
    larger(a: T, b: T): boolean;
    largerEq(a: T, b: T): boolean;
    smaller(a: T, b: T): boolean;
    smallerEq(a: T, b: T): boolean;
    dividedBy(dividend: T, divisor: T): T;
    half(value: T): T;
    isOdd(value: T): boolean;
    minus(minuend: T, subtrahend: T): T;
    minus1(a: T): T;
    mod(dividend: T, divisor: T): T;
    negative(a: T): T;
    plus(a: T, b: T): T;
    plus1(a: T): T;
    sign(a: T): number;
    square(value: T): T;
    times(a: T, b: T): T;
    trunc(value: T): T;
}

declare class BigOps implements Ops<bigint> {
    cast(a: bigint | boolean | number | string): bigint;
    dividedBy(a: bigint, b: bigint): bigint;
    equal(a: bigint, b: bigint): boolean;
    half(a: bigint): bigint;
    isOdd(a: bigint): boolean;
    larger(a: bigint, b: bigint): boolean;
    largerEq(a: bigint, b: bigint): boolean;
    minus(a: bigint, b: bigint): bigint;
    minus1(a: bigint): bigint;
    mod(a: bigint, b: bigint): bigint;
    negative(a: bigint): bigint;
    plus(a: bigint, b: bigint): bigint;
    plus1(a: bigint): bigint;
    sign(a: bigint): number;
    smaller(a: bigint, b: bigint): boolean;
    smallerEq(a: bigint, b: bigint): boolean;
    square(a: bigint): bigint;
    times(a: bigint, b: bigint): bigint;
    toNumber(a: bigint): number;
    trunc(a: bigint): bigint;
}

declare class NumOps implements Ops<number> {
    cast(a: unknown): number;
    dividedBy(a: number, b: number): number;
    equal(a: number, b: number): boolean;
    half(a: number): number;
    isOdd(a: number): boolean;
    larger(a: number, b: number): boolean;
    largerEq(a: number, b: number): boolean;
    minus(a: number, b: number): number;
    minus1(a: number): number;
    mod(a: number, b: number): number;
    negative(a: number): number;
    plus(a: number, b: number): number;
    plus1(a: number): number;
    sign(a: number): number;
    smaller(a: number, b: number): boolean;
    smallerEq(a: number, b: number): boolean;
    square(a: number): number;
    times(a: number, b: number): number;
    toNumber(a: number): number;
    trunc(a: number): number;
}

declare class SafeNumOps implements Ops<number> {
    cast(a: unknown): number;
    dividedBy(a: number, b: number): number;
    equal(a: number, b: number): boolean;
    half(a: number): number;
    isOdd(a: number): boolean;
    larger(a: number, b: number): boolean;
    largerEq(a: number, b: number): boolean;
    minus(a: number, b: number): number;
    minus1(a: number): number;
    mod(a: number, b: number): number;
    negative(a: number): number;
    plus(a: number, b: number): number;
    plus1(a: number): number;
    sign(a: number): number;
    smaller(a: number, b: number): boolean;
    smallerEq(a: number, b: number): boolean;
    square(a: number): number;
    times(a: number, b: number): number;
    toNumber(a: number): number;
    trunc(a: number): number;
}

type index$3_BigOps = BigOps;
declare const index$3_BigOps: typeof BigOps;
type index$3_NumOps = NumOps;
declare const index$3_NumOps: typeof NumOps;
type index$3_Ops<T = unknown> = Ops<T>;
type index$3_SafeNumOps = SafeNumOps;
declare const index$3_SafeNumOps: typeof SafeNumOps;
declare namespace index$3 {
  export { index$3_BigOps as BigOps, index$3_NumOps as NumOps, type index$3_Ops as Ops, index$3_SafeNumOps as SafeNumOps };
}

interface Encoding<V, D = unknown> {
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

type Matrix<T = unknown> = T[][];

declare class MatrixEncoding<T> implements Encoding<T, Matrix<T>> {
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

declare class RevSumEncoding<T> implements Encoding<T, T[]> {
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

declare class SumEncoding<T> implements Encoding<T, T[]> {
    private ops;
    readonly format: "sum";
    private _neg1;
    private _0;
    private _1;
    private _2;
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

declare class TermEncoding<T> implements Encoding<T, T[]> {
    private ops;
    readonly format: "term";
    private _neg1;
    private _0;
    private _1;
    private _2;
    constructor(ops: Ops<T>);
    genK(K: number): T[];
    genNegK(K: number): T[];
    genNegOne(K: number): T[];
    genOne(K: number): T[];
    genZero(K: number): T[];
    pow(A: T[], n: T): T[];
    shift(A: T[], delta: number): T[];
    square(A: T[]): T[];
    times(A: T[], B: T[]): T[];
    toValue(data: T[], delta?: number, terms?: T[]): T;
}

type index$2_Encoding<V, D = unknown> = Encoding<V, D>;
type index$2_MatrixEncoding<T> = MatrixEncoding<T>;
declare const index$2_MatrixEncoding: typeof MatrixEncoding;
type index$2_RevSumEncoding<T> = RevSumEncoding<T>;
declare const index$2_RevSumEncoding: typeof RevSumEncoding;
type index$2_SumEncoding<T> = SumEncoding<T>;
declare const index$2_SumEncoding: typeof SumEncoding;
type index$2_TermEncoding<T> = TermEncoding<T>;
declare const index$2_TermEncoding: typeof TermEncoding;
declare namespace index$2 {
  export { type index$2_Encoding as Encoding, index$2_MatrixEncoding as MatrixEncoding, index$2_RevSumEncoding as RevSumEncoding, index$2_SumEncoding as SumEncoding, index$2_TermEncoding as TermEncoding };
}

interface GenConfig<I, V = I, D = unknown> {
    cached?: boolean;
    customs?: V[];
    encoding?: Encoding<V, D>;
    ops?: Ops<I & V>;
    indexOps?: Ops<I>;
    valueOps?: Ops<V>;
}

interface Generator<K, V> {
    K: Readonly<number>;
    get(key: K): V;
}

declare class KPowerGen<K, V> implements Generator<K, V> {
    private cached;
    private customs;
    private encoding;
    private indexOps;
    private isStd;
    private _K;
    private neg;
    private pos;
    private v0;
    private zero;
    constructor(K: number, config: GenConfig<K, V, unknown>);
    get K(): number;
    get(N: K): V;
    getCached(): boolean;
    getCustoms(): V[];
    setCached(value: boolean): void;
    setCustoms(customs?: V[]): void;
}

declare class PowerGen<K, V> implements Generator<K, V> {
    private cached;
    private customs;
    private encoding;
    private indexOps;
    private isStd;
    private _K;
    private neg;
    private pos;
    private v0;
    constructor(K: number, config: GenConfig<K, V, unknown>);
    get K(): number;
    get(N: K): V;
    getCached(): boolean;
    getCustoms(): V[];
    setCached(value: boolean): void;
    setCustoms(customs?: V[]): void;
}

declare class SlidingWindowGen<K, V> implements Generator<K, V> {
    private delta;
    private indexOps;
    private _K;
    private minN;
    private next;
    private valueOps;
    private values;
    constructor(K: number, config: GenConfig<K, V, never>);
    get K(): number;
    get(N: K): V;
    private forward;
    private reverse;
}

type index$1_GenConfig<I, V = I, D = unknown> = GenConfig<I, V, D>;
type index$1_Generator<K, V> = Generator<K, V>;
type index$1_KPowerGen<K, V> = KPowerGen<K, V>;
declare const index$1_KPowerGen: typeof KPowerGen;
type index$1_PowerGen<K, V> = PowerGen<K, V>;
declare const index$1_PowerGen: typeof PowerGen;
type index$1_SlidingWindowGen<K, V> = SlidingWindowGen<K, V>;
declare const index$1_SlidingWindowGen: typeof SlidingWindowGen;
declare namespace index$1 {
  export { type index$1_GenConfig as GenConfig, type index$1_Generator as Generator, index$1_KPowerGen as KPowerGen, index$1_PowerGen as PowerGen, index$1_SlidingWindowGen as SlidingWindowGen };
}

declare class DimensionError extends RangeError {
    constructor(actual: number | number[], expected: number | number[], relation?: string);
}

declare class IntegerError extends TypeError {
    constructor(value: unknown, label?: string);
}

declare class OutOfBoundsError extends RangeError {
    constructor(actual: unknown, min?: unknown, max?: unknown, label?: string, msg?: string);
}

declare class UnsafeError extends OutOfBoundsError {
    constructor(actual: number);
}

type index_DimensionError = DimensionError;
declare const index_DimensionError: typeof DimensionError;
type index_IntegerError = IntegerError;
declare const index_IntegerError: typeof IntegerError;
type index_OutOfBoundsError = OutOfBoundsError;
declare const index_OutOfBoundsError: typeof OutOfBoundsError;
type index_UnsafeError = UnsafeError;
declare const index_UnsafeError: typeof UnsafeError;
declare namespace index {
  export { index_DimensionError as DimensionError, index_IntegerError as IntegerError, index_OutOfBoundsError as OutOfBoundsError, index_UnsafeError as UnsafeError };
}

declare class BigKbonacci implements Generator<bigint, bigint> {
    private customs;
    private gen;
    constructor(K: number, customs?: bigint[], cached?: boolean);
    get K(): number;
    get(index: bigint): bigint;
    getCached(): boolean;
    getCustoms(): bigint[];
    setCached(value: boolean): void;
}

declare class BigFibonacci extends BigKbonacci {
    constructor(customs?: bigint[], cached?: boolean);
}

declare class BigTribonacci extends BigKbonacci {
    constructor(customs?: bigint[], cached?: boolean);
}

declare class Kbonacci implements Generator<number, number> {
    private customs;
    private gen;
    constructor(K: number, customs?: number[], cached?: boolean);
    get K(): number;
    get(index: number): number;
    getCached(): boolean;
    getCustoms(): number[];
    setCached(value: boolean): void;
}

declare class Fibonacci extends Kbonacci {
    constructor(customs?: number[], cached?: boolean);
}

declare class Tribonacci extends Kbonacci {
    constructor(customs?: number[], cached?: boolean);
}

export { BigFibonacci, BigKbonacci, BigTribonacci, Fibonacci, Kbonacci, type Matrix, Tribonacci, index$2 as enc, index as err, index$1 as gen, index$3 as ops };
