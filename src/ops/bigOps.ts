import { Ops } from "./ops";

export class BigOps implements Ops<bigint> {
  cast(a: bigint | boolean | number | string): bigint {
    return BigInt(a);
  }
  dividedBy(a: bigint, b: bigint): bigint {
    return a / b;
  }
  equal(a: bigint, b: bigint): boolean {
    return a == b;
  }
  half(a: bigint): bigint {
    return a >> 1n;
  }
  isOdd(a: bigint): boolean {
    return (a & 1n) === 1n;
  }
  larger(a: bigint, b: bigint): boolean {
    return a > b;
  }
  largerEq(a: bigint, b: bigint): boolean {
    return a >= b;
  }
  minus(a: bigint, b: bigint): bigint {
    return a - b;
  }
  minus1(a: bigint): bigint {
    return a - 1n;
  }
  mod(a: bigint, b: bigint): bigint {
    return a % b;
  }
  negative(a: bigint): bigint {
    return -a;
  }
  plus(a: bigint, b: bigint): bigint {
    return a + b;
  }
  plus1(a: bigint): bigint {
    return a + 1n;
  }
  sign(a: bigint): number {
    return a < 0n ? -1 : +(a > 0n);
  }
  smaller(a: bigint, b: bigint): boolean {
    return a < b;
  }
  smallerEq(a: bigint, b: bigint): boolean {
    return a <= b;
  }
  square(a: bigint): bigint {
    return a ** 2n;
  }
  times(a: bigint, b: bigint): bigint {
    return a * b;
  }
  toNumber(a: bigint): number {
    return Number(a);
  }
  trunc(a: bigint): bigint {
    return a;
  }
}
