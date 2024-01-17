import { beforeAll, describe, expect, it, test } from "vitest";

import { TermEncoding } from "./termEncoding";
import { SafeNumOps } from "../../../ops/safeNumOps";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";
import { UnsafeError } from "../../../error/unsafeError";
import { SAFE_MAX } from "../../../globals";

describe("Term Encoding + SafeNum", () => {
  let enc: TermEncoding<number>;

  beforeAll(() => {
    const ops = new SafeNumOps();
    enc = new TermEncoding(ops);
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
      expect(enc.genK(2)).toEqual([1, 1]);
      expect(enc.genK(3)).toEqual([1, 1, 2]);
      expect(enc.genK(4)).toEqual([1, 1, 2, 4]);
      expect(enc.genK(5)).toEqual([1, 1, 2, 4, 8]);
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
      expect(enc.genNegK(2)).toEqual([2, -1]);
      expect(enc.genNegK(3)).toEqual([2, 0, -1]);
      expect(enc.genNegK(4)).toEqual([2, 0, 0, -1]);
      expect(enc.genNegK(5)).toEqual([2, 0, 0, 0, -1]);
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
      const expected = [1, 0, 0, 0];
      expect(result).toEqual(expected);
    });

    test("generates identity matrix of odd size", () => {
      const result = enc.genZero(3);
      const expected = [1, 0, 0];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genZero(-1)).toThrowError();
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
      const expected = [0, 0, 0, 1];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genOne(3);
      const expected = [0, 0, 1];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genOne(-1)).toThrowError();
    });
  });

  describe("genNegRelation", () => {
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
      const expected = [-1, 1, 0, 0];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genNegOne(3);
      const expected = [-1, 1, 0];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genNegOne(-1)).toThrowError();
    });
  });

  describe("shift", () => {
    it("should throw OutOfBoundsError for too small delta", () => {
      const A = [1, 1, 1];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [1, 1, 1];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly shifted array for valid deltas", () => {
      const A = [4, 7, 13];
      expect(enc.shift(A, 0)).toEqual([4, 7, 13]);
      expect(enc.shift(A, -1)).toEqual([2, 4, 7]);
      expect(enc.shift(A, -2)).toEqual([1, 2, 4]);
    });
  });

  describe("times", () => {
    test("multiplies two encoded matrices of even length", () => {
      const A = [1, 2];
      const B = [3, 4];
      const result = enc.times(A, B);
      const expected = [11, 18];
      expect(result).toEqual(expected);
    });

    test("multiplies two encoded matrices of odd length", () => {
      const A = [1, 2, 3];
      const B = [4, 5, 6];
      const result = enc.times(A, B);
      const expected = [21, 41, 73];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [1, 2];
      const B = [3, 4, 5];
      expect(() => enc.times(A, B)).toThrowError();
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [SAFE_MAX, 1];
      const B = [2, 1];
      expect(() => enc.times(A, B)).toThrowError();
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
      const expected = [1424, 2304];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const arr = [2, 3];
      const result = enc.pow(arr, 3);
      const expected = [89, 144];
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
      const expected = [5, 8];
      expect(result).toEqual(expected);
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [SAFE_MAX, 2];
      expect(() => enc.square(A)).toThrowError();
    });
  });

  describe("toValue", () => {
    it("should return the correct value for delta = 0", () => {
      const data = [1, 1, 1];
      const delta = 0;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(32);
    });

    it("should return the correct value for delta = -1", () => {
      const data = [1, 1, 1];
      const delta = -1;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(20);
    });

    it("should return the correct value for delta = -2", () => {
      const data = [1, 1, 1];
      const delta = -2;
      const terms = [4, 5, 6];
      expect(enc.toValue(data, delta, terms)).toBe(10);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const data = [1, 1, 1];
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const data = [1, 1, 1];
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length < data length", () => {
      const data = [1, 1, 1];
      const terms = [4, 5];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const data = [1, 1, 1];
      const terms = [4, 5, 6, 7];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should handle errors from safeAdd and safeMultiply", () => {
      const data = [Number.MAX_SAFE_INTEGER, 1];
      const terms = [1, 1];
      expect(() => enc.toValue(data, 0, terms)).toThrow(UnsafeError);
    });
  });
});
