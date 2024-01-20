import { Ops } from "./ops";
export declare class SafeNumOps implements Ops<number> {
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
