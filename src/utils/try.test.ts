import { describe, expect, test } from "vitest";

import { tryK, trySafe, tryNumTerms, tryInteger } from "./try";
import { K_MIN, SAFE_MAX, SAFE_MIN } from "../globals";
import { OutOfBoundsError } from "../error/outOfBoundsError";
import { IntegerError } from "../error/integerError";
import { DimensionError } from "../error/dimensionError";
import { UnsafeError } from "../error/unsafeError";

describe("tryInteger", () => {
  test("should return the number if it is an integer", () => {
    expect(tryInteger(5)).toBe(5);
    expect(tryInteger(0)).toBe(0);
    expect(tryInteger(-100)).toBe(-100);
  });

  test("should throw IntegerError for non-integers", () => {
    expect(() => tryInteger(5.5)).toThrow(IntegerError);
    expect(() => tryInteger(-3.14)).toThrow(IntegerError);
    expect(() => tryInteger("a")).toThrow(IntegerError);
  });

  test("should handle edge cases", () => {
    expect(() => tryInteger(NaN)).toThrow(IntegerError);
    expect(() => tryInteger(Infinity)).toThrow(IntegerError);
  });
});

describe("tryK", () => {
  test("throws OutOfBoundsError for a value below K_MIN", () => {
    expect(() => tryK(K_MIN - 1)).toThrowError(OutOfBoundsError);
  });

  test("throws IntegerError for a value that is not an integer", () => {
    expect(() => tryK(2.5)).toThrowError(IntegerError);
  });

  test("does not throw for a value within the valid range", () => {
    expect(() => tryK(K_MIN)).not.toThrowError();
    expect(() => tryK(2)).not.toThrowError();
    expect(() => tryK(3)).not.toThrowError();
    expect(() => tryK(50)).not.toThrowError();
    expect(() => tryK(100)).not.toThrowError();
  });
});

describe("tryNumTerms", () => {
  const maxLen = 5;

  test("accepts arrays within the max length", () => {
    expect(() => tryNumTerms(maxLen, [1, 2, 3])).not.toThrow();
    expect(() => tryNumTerms(maxLen, [1, 2, 3, 4, 5])).not.toThrow();
  });

  test("throws error if array exceeds max length", () => {
    expect(() => tryNumTerms(maxLen, [1, 2, 3, 4, 5, 6])).toThrowError(
      DimensionError
    );
    expect(() =>
      tryNumTerms(maxLen, new Array<number>(maxLen + 1).fill(0))
    ).toThrowError(DimensionError);
  });
});

describe("trySafe", () => {
  test("returns number if it is a safe integer", () => {
    expect(trySafe(100)).toBe(100);
    expect(trySafe(-100)).toBe(-100);
  });

  test("returns number if it is a safe number", () => {
    expect(trySafe(3.14159)).toBe(3.14159);
    expect(trySafe(2.12)).toBe(2.12);
  });

  test("handles edge cases of safe integers", () => {
    expect(trySafe(SAFE_MAX)).toBe(SAFE_MAX);
    expect(trySafe(SAFE_MIN)).toBe(SAFE_MIN);
  });

  test("throws error on unsafe integer", () => {
    expect(() => trySafe(SAFE_MAX + 1)).toThrowError(UnsafeError);
    expect(() => trySafe(SAFE_MIN - 1)).toThrowError(UnsafeError);
    expect(() => trySafe(Number.MAX_VALUE)).toThrowError(UnsafeError);
  });
});
