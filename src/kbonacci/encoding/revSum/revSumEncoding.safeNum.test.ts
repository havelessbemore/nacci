import { beforeAll, describe, expect, it, test } from "vitest";

import { RevSumEncoding } from "./revSumEncoding";
import { SafeNumOps } from "../../../ops/safeNumOps";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { SAFE_MAX } from "../../../globals";
import { DimensionError } from "../../../error/dimensionError";
import { UnsafeError } from "../../../error/unsafeError";

describe("Rev Sum Encoding + SafeNum", () => {
  let enc: RevSumEncoding<number>;

  beforeAll(() => {
    const ops = new SafeNumOps();
    enc = new RevSumEncoding(ops);
  });

  describe("genK", () => {
    it("should throw a RangeError for negative K", () => {
      expect(() => enc.genK(-1)).toThrow(RangeError);
      expect(() => enc.genK(-1)).toThrow("Invalid array length");
    });

    it("should return an empty array for K equal to 0", () => {
      expect(enc.genK(0)).toEqual([]);
    });

    it("should return the correct array for positive K", () => {
      expect(enc.genK(1)).toEqual([1]);
      expect(enc.genK(2)).toEqual([1, 2]);
      expect(enc.genK(3)).toEqual([2, 3, 4]);
      expect(enc.genK(4)).toEqual([4, 6, 7, 8]);
      expect(enc.genK(5)).toEqual([8, 12, 14, 15, 16]);
    });
  });

  describe("genNegK", () => {
    it("should throw a RangeError for negative K", () => {
      expect(() => enc.genNegK(-1)).toThrow(RangeError);
      expect(() => enc.genNegK(-1)).toThrow("Invalid array length");
    });

    it("should return an empty array for K equal to 0", () => {
      expect(enc.genNegK(0)).toEqual([]);
    });

    it("should return the correct array for positive K", () => {
      expect(enc.genNegK(1)).toEqual([1]);
      expect(enc.genNegK(2)).toEqual([-1, 1]);
      expect(enc.genNegK(3)).toEqual([-1, -1, 1]);
      expect(enc.genNegK(4)).toEqual([-1, -1, -1, 1]);
      expect(enc.genNegK(5)).toEqual([-1, -1, -1, -1, 1]);
    });
  });

  describe("genNegOne", () => {
    test("generates empty matrix for N = 0", () => {
      const result = enc.genNegOne(0);
      expect(result).toEqual([]);
    });

    test("generates identity matrix for N = 1", () => {
      const result = enc.genNegOne(1);
      expect(result).toEqual([1]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genNegOne(4);
      const expected = [0, 0, 1, 0];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genNegOne(3);
      const expected = [0, 1, 0];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genNegOne(-1)).toThrowError();
    });
  });

  describe("genOne", () => {
    test("generates empty matrix for N = 0", () => {
      const result = enc.genOne(0);
      expect(result).toEqual([]);
    });

    test("generates identity matrix for N = 1", () => {
      const result = enc.genOne(1);
      expect(result).toEqual([1]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genOne(4);
      const expected = [1, 1, 1, 1];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genOne(3);
      const expected = [1, 1, 1];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genOne(-1)).toThrowError();
    });
  });

  describe("genZero", () => {
    test("generates empty matrix for N = 0", () => {
      const result = enc.genZero(0);
      expect(result).toEqual([]);
    });

    test("generates identity matrix for N = 1", () => {
      const result = enc.genZero(1);
      expect(result).toEqual([1]);
    });

    test("generates identity matrix of even size", () => {
      const result = enc.genZero(4);
      const expected = [0, 0, 0, 1];
      expect(result).toEqual(expected);
    });

    test("generates identity matrix of odd size", () => {
      const result = enc.genZero(3);
      const expected = [0, 0, 1];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genZero(-1)).toThrowError();
    });
  });

  describe("shift", () => {
    it("should throw OutOfBoundsError for too small delta", () => {
      const A = [1, 2, 3];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [1, 2, 3];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly shifted array for valid deltas", () => {
      const A = [1, 2, 3];
      expect(enc.shift(A, 0)).toEqual([1, 2, 3]);
      expect(enc.shift(A, -1)).toEqual([1, 2, 1]);
      expect(enc.shift(A, -2)).toEqual([1, 0, 1]);
    });
  });

  describe("times", () => {
    test("multiplies two encoded matrices of even length", () => {
      const A = [1, 2];
      const B = [3, 4];
      const result = enc.times(A, B);
      const expected = [7, 11];
      expect(result).toEqual(expected);
    });

    test("multiplies two encoded matrices of odd length", () => {
      const A = [1, 2, 3];
      const B = [4, 5, 6];
      const result = enc.times(A, B);
      const expected = [15, 22, 27];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [1, 2];
      const B = [3, 4, 5];
      expect(() => enc.times(A, B)).toThrowError(DimensionError);
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [SAFE_MAX, 1];
      const B = [2, 1];
      expect(() => enc.times(A, B)).toThrowError(UnsafeError);
    });
  });

  describe("pow", () => {
    test("returns input when exponent = 1", () => {
      const arr = [2, 4];
      const result = enc.pow(arr, 1);
      expect(result).toEqual(arr);
    });

    test("calculates matrix exponentiation for even exponent", () => {
      const arr = [2, 4];
      const result = enc.pow(arr, 4);
      const expected = [336, 544];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const arr = [2, 3];
      const result = enc.pow(arr, 3);
      const expected = [34, 55];
      expect(result).toEqual(expected);
    });

    test("throws error for 0 exponent", () => {
      const arr = [2, 4];
      expect(() => enc.pow(arr, 0)).toThrowError(OutOfBoundsError);
    });

    test("throws error for negative exponent", () => {
      const arr = [2, 4];
      expect(() => enc.pow(arr, -2)).toThrowError(OutOfBoundsError);
    });
  });

  describe("square", () => {
    test("calculates the square of an encoded matrix", () => {
      const A = [1, 2];
      const result = enc.square(A);
      const expected = [3, 5];
      expect(result).toEqual(expected);
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [SAFE_MAX, 2];
      expect(() => enc.square(A)).toThrowError(UnsafeError);
    });
  });

  describe("toValue", () => {
    it("should return the correct value for delta = 0", () => {
      const data = [1, 2, 3];
      const delta = 0;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(32);
    });

    it("should return the correct value for delta = -1", () => {
      const data = [1, 2, 3];
      const delta = -1;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(20);
    });

    it("should return the correct value for delta = -2", () => {
      const data = [1, 2, 3];
      const delta = -2;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(10);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const data = [1, 2, 3];
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const data = [1, 2, 3];
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const data = [1, 2, 3];
      const terms = [4, 5, 6, 7];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should handle errors from safeAdd and safeMultiply", () => {
      const data = [Number.MAX_SAFE_INTEGER, 1];
      const terms = [1, 1];
      expect(() => enc.toValue(data, 0, terms)).toThrow(UnsafeError);
    });

    it("should return correct value when no terms given", () => {
      const data = [5, 8, 10];
      expect(enc.toValue(data, 0, undefined)).toBe(5);
      expect(enc.toValue(data, -1, undefined)).toBe(3);
      expect(enc.toValue(data, -2, undefined)).toBe(2);
    });

    it("should return correct value when terms given", () => {
      const data = [5, 8, 10];
      expect(enc.toValue(data, 0, [1])).toBe(10);
      expect(enc.toValue(data, 0, [1, 1])).toBe(18);
      expect(enc.toValue(data, 0, [1, 1, 2])).toBe(33);
      expect(enc.toValue(data, 0, [2])).toBe(20);
      expect(enc.toValue(data, 0, [2, 3])).toBe(46);
      expect(enc.toValue(data, 0, [2, 3, 5])).toBe(84);
    });
  });
});
