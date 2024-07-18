export class DimensionError extends RangeError {
  constructor(
    actual: number | number[],
    expected: number | number[],
    relation = "!=",
  ) {
    const a = Array.isArray(actual) ? actual.join("x") : `${actual}`;
    const b = Array.isArray(expected) ? expected.join("x") : `${expected}`;
    super(`Dimension mismatch. ${a} ${relation} ${b}`);
  }
}
