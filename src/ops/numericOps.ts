export interface NumericOps<T = unknown> {
  // Cast
  cast(value: unknown): T;
  toNumber(a: T): number;

  // Comparison
  // compare(a: T, b: T): number;
  equal(a: T, b: T): boolean;
  larger(a: T, b: T): boolean;
  largerEq(a: T, b: T): boolean;
  smaller(a: T, b: T): boolean;
  smallerEq(a: T, b: T): boolean;

  // Math
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
