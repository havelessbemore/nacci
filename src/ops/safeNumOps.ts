import { trySafe } from "../utils/try";
import { NumericOps } from "./numericOps";

export class SafeNumOps implements NumericOps<number> {
  constructor() {}
  cast(a: unknown): number {
    return trySafe(Number(a));
  }
  dividedBy(a: number, b: number): number {
    return trySafe(a / b);
  }
  equal(a: number, b: number): boolean {
    return a == b;
  }
  half(a: number): number {
    return a * 0.5;
  }
  isOdd(a: number): boolean {
    return (a & 1) === 1;
  }
  larger(a: number, b: number): boolean {
    return a > b;
  }
  largerEq(a: number, b: number): boolean {
    return a >= b;
  }
  minus(a: number, b: number): number {
    return trySafe(a - b);
  }
  minus1(a: number): number {
    return trySafe(a - 1);
  }
  mod(a: number, b: number): number {
    return a % b;
  }
  negative(a: number): number {
    return trySafe(-a);
  }
  plus(a: number, b: number): number {
    return trySafe(a + b);
  }
  plus1(a: number): number {
    return trySafe(a + 1);
  }
  sign(a: number): number {
    return a < 0n ? -1 : +(a > 0n);
  }
  smaller(a: number, b: number): boolean {
    return a < b;
  }
  smallerEq(a: number, b: number): boolean {
    return a <= b;
  }
  square(a: number): number {
    return trySafe(a ** 2);
  }
  times(a: number, b: number): number {
    return trySafe(a * b);
  }
  toNumber(a: number): number {
    return a;
  }
  trunc(a: number): number {
    return Math.trunc(a);
  }
}
