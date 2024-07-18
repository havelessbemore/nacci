import { describe, expect, test } from "@jest/globals";

import {
  isBigInt,
  isFunction,
  isInteger,
  isNumber,
  isSafeNumber,
  isSymbol,
} from "./is";
import { SAFE_MAX, SAFE_MIN } from "../globals";

describe("isBigInt", () => {
  test("returns true for a BigInt", () => {
    expect(isBigInt(BigInt(42))).toBe(true);
  });

  test("returns false for a number", () => {
    expect(isBigInt(42)).toBe(false);
  });

  test("returns false for other types", () => {
    expect(isBigInt(null)).toBe(false);
    expect(isBigInt(undefined)).toBe(false);
    expect(isBigInt("42")).toBe(false);
    expect(isBigInt(true)).toBe(false);
    expect(isBigInt([])).toBe(false);
    expect(isBigInt({})).toBe(false);
  });
});

describe("isFunction", () => {
  test("should return true for a function", () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isFunction(() => {})).toBe(true);
  });

  test("should return false for a number", () => {
    expect(isFunction(123)).toBe(false);
  });

  test("should return false for a string", () => {
    expect(isFunction("hello")).toBe(false);
  });

  test("should return false for an object", () => {
    expect(isFunction({})).toBe(false);
  });

  test("should return false for an array", () => {
    expect(isFunction([])).toBe(false);
  });

  test("should return false for null", () => {
    expect(isFunction(null)).toBe(false);
  });

  test("should return false for undefined", () => {
    expect(isFunction(undefined)).toBe(false);
  });

  test("should return false for a boolean", () => {
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
  });

  test("should return false for a BigInt", () => {
    expect(isFunction(123n)).toBe(false);
  });

  test("should return false for a symbol", () => {
    expect(isFunction(Symbol("sym"))).toBe(false);
  });

  test("should return true for an async function", () => {
    const asyncFunc = async () => {
      await Promise.resolve(1);
    };
    expect(isFunction(asyncFunc)).toBe(true);
  });

  test("should return true for a generator function", () => {
    function* generatorFunc() {
      yield 1;
    }
    expect(isFunction(generatorFunc)).toBe(true);
  });
});

describe("isInteger", () => {
  test("should return true for an integer", () => {
    expect(isInteger(5)).toBe(true);
    expect(isInteger(-100)).toBe(true);
    expect(isInteger(0)).toBe(true);
  });

  test("should return false for a floating-point number", () => {
    expect(isInteger(5.5)).toBe(false);
    expect(isInteger(-3.14)).toBe(false);
  });

  test("should return false for Infinity", () => {
    expect(isInteger(Infinity)).toBe(false);
    expect(isInteger(-Infinity)).toBe(false);
  });

  test("should return false for NaN", () => {
    expect(isInteger(NaN)).toBe(false);
  });

  test("should return false for non-numeric values", () => {
    expect(isInteger("123")).toBe(false);
    expect(isInteger("abc")).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
  });
});

describe("isNumber", () => {
  test("returns true for a number", () => {
    expect(isNumber(42)).toBe(true);
  });

  test("returns false for a BigInt", () => {
    expect(isNumber(BigInt(42))).toBe(false);
  });

  test("returns false for other types", () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber("42")).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });
});

describe("isSafeNumber", () => {
  test("returns true for a safe integer", () => {
    expect(isSafeNumber(42)).toBe(true);
    expect(isSafeNumber(SAFE_MAX)).toBe(true);
    expect(isSafeNumber(SAFE_MIN)).toBe(true);
  });

  test("returns false for a non-safe integer", () => {
    expect(isSafeNumber(SAFE_MAX + 1)).toBe(false);
    expect(isSafeNumber(SAFE_MIN - 1)).toBe(false);
  });
});

describe("isSymbol", () => {
  test("returns true for a symbol", () => {
    expect(isSymbol(Symbol())).toBe(true);
  });

  test("returns false for non-symbol types", () => {
    expect(isSymbol(123)).toBe(false);
    expect(isSymbol("string")).toBe(false);
    expect(isSymbol({})).toBe(false);
    expect(isSymbol([])).toBe(false);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isSymbol(() => {})).toBe(false);
    expect(isSymbol(true)).toBe(false);
  });

  test("returns false for null and undefined", () => {
    expect(isSymbol(null)).toBe(false);
    expect(isSymbol(undefined)).toBe(false);
  });
});
