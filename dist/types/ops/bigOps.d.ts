import { Ops } from "./ops";
export declare class BigOps implements Ops<bigint> {
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
