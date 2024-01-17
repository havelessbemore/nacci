import { describe, expect, test } from "vitest";

import { getSum, padStart } from "./array";
import { SafeNumOps } from "../ops/safeNumOps";
import { BigOps } from "../ops/bigOps";

describe("getSum", () => {
  test("returns undefined for an empty array", () => {
    const ops = new SafeNumOps();
    expect(getSum([], ops)).toBe(undefined);
  });

  test("handles arrays with a single element", () => {
    const ops = new SafeNumOps();
    expect(getSum([1], ops)).toBe(1);
    expect(getSum([-1], ops)).toBe(-1);
    expect(getSum([0], ops)).toBe(0);
  });

  test("returns the sum of an array of numbers", () => {
    const ops = new SafeNumOps();
    expect(getSum([1, 2, 3, 4], ops)).toBe(10);
    expect(getSum([-1, -2, -3, -4], ops)).toBe(-10);
    expect(getSum([1, -2, 3, -4], ops)).toBe(-2);
  });

  test("returns the sum of an array of bigints", () => {
    const ops = new BigOps();
    expect(getSum([1n, 2n, 3n, 4n], ops)).toBe(10n);
    expect(getSum([-1n, -2n, -3n, -4n], ops)).toBe(-10n);
    expect(getSum([1n, -2n, 3n, -4n], ops)).toBe(-2n);
  });

  test("handles arrays with negative numbers", () => {
    const ops = new SafeNumOps();
    expect(getSum([-1, -2, -3], ops)).toBe(-6);
    expect(getSum([1, -2, 3], ops)).toBe(2);
  });

  test("handles arrays with zeroes", () => {
    const ops = new SafeNumOps();
    expect(getSum([0, 0, 0], ops)).toBe(0);
    expect(getSum([1, 0, 3], ops)).toBe(4);
  });
});

describe("padStart", () => {
  test("pads the array with the specified value", () => {
    let array = [1, 2, 3, 4];
    padStart(array, 5, 0);
    expect(array).toEqual([0, 1, 2, 3, 4]);
    array = [1, 2];
    padStart(array, 5, 0);
    expect(array).toEqual([0, 0, 0, 1, 2]);
  });

  test("does not pad if the target length is less than to the array length", () => {
    const array = [1, 2, 3];
    padStart(array, 2, 0);
    expect(array).toEqual([1, 2, 3]);
  });

  test("does not pad if the target length is equal to the array length", () => {
    const array = [1, 2, 3];
    padStart(array, 3, 0);
    expect(array).toEqual([1, 2, 3]);
  });

  test("handles empty array", () => {
    const array: number[] = [];
    padStart(array, 3, 0);
    expect(array).toEqual([0, 0, 0]);
  });
});
