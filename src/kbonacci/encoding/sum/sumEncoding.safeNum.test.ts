import { beforeAll, describe, expect, it, test } from "vitest";

import { SumEncoding } from "./sumEncoding";
import { DimensionError } from "../../../error/dimensionError";
import { UnsafeError } from "../../../error/unsafeError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { SAFE_MAX } from "../../../globals";
import { SafeNumOps } from "../../../ops/safeNumOps";

describe("Sum Encoding + SafeNum", () => {
  let enc: SumEncoding<number>;

  beforeAll(() => {
    const ops = new SafeNumOps();
    enc = new SumEncoding(ops);
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
      expect(enc.genK(3)).toEqual([1, 2, 4]);
      expect(enc.genK(4)).toEqual([1, 2, 4, 8]);
      expect(enc.genK(5)).toEqual([1, 2, 4, 8, 16]);
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
      expect(enc.genNegK(2)).toEqual([2, 1]);
      expect(enc.genNegK(3)).toEqual([2, 2, 1]);
      expect(enc.genNegK(4)).toEqual([2, 2, 2, 1]);
      expect(enc.genNegK(5)).toEqual([2, 2, 2, 2, 1]);
    });
  });

  describe("genNegOne", () => {
    it("should throw a RangeError for negative K", () => {
      expect(() => enc.genNegOne(-1)).toThrow(RangeError);
      expect(() => enc.genNegOne(-1)).toThrow("Invalid array length");
    });

    it("should return an empty array for K equal to 0", () => {
      expect(enc.genNegOne(0)).toEqual([]);
    });

    it("should return the correct array for positive K", () => {
      expect(enc.genNegOne(1)).toEqual([1]);
      expect(enc.genNegOne(2)).toEqual([-1, 0]);
      expect(enc.genNegOne(3)).toEqual([-1, 0, 0]);
      expect(enc.genNegOne(4)).toEqual([-1, 0, 0, 0]);
      expect(enc.genNegOne(5)).toEqual([-1, 0, 0, 0, 0]);
    });
  });

  describe("genOne", () => {
    it("should throw a RangeError for negative K", () => {
      expect(() => enc.genOne(-1)).toThrow(RangeError);
      expect(() => enc.genOne(-1)).toThrow("Invalid array length");
    });

    it("should return an empty array for K equal to 0", () => {
      expect(enc.genOne(0)).toEqual([]);
    });

    it("should return the correct array for positive K", () => {
      expect(enc.genOne(1)).toEqual([1]);
      expect(enc.genOne(2)).toEqual([0, 1]);
      expect(enc.genOne(3)).toEqual([0, 0, 1]);
      expect(enc.genOne(4)).toEqual([0, 0, 0, 1]);
      expect(enc.genOne(5)).toEqual([0, 0, 0, 0, 1]);
    });
  });

  describe("genZero", () => {
    it("should throw a RangeError for negative K", () => {
      expect(() => enc.genZero(-1)).toThrow(RangeError);
      expect(() => enc.genZero(-1)).toThrow("Invalid array length");
    });

    it("should return an empty array for K equal to 0", () => {
      expect(enc.genZero(0)).toEqual([]);
    });

    it("should return the correct array for positive K", () => {
      expect(enc.genZero(1)).toEqual([1]);
      expect(enc.genZero(2)).toEqual([1, 1]);
      expect(enc.genZero(3)).toEqual([1, 1, 1]);
      expect(enc.genZero(4)).toEqual([1, 1, 1, 1]);
      expect(enc.genZero(5)).toEqual([1, 1, 1, 1, 1]);
    });
  });

  describe("get", () => {
    test("get correct values for x == y", () => {
      let A: number[];

      A = [5, 7];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [1, 2, 4];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [4, 12, 27, 56];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [4, 12, 27, 56, 80];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [2, 3, 5, 7, 11, 13];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }
    });

    test("get correct value for any coordinate when y < x", () => {
      let A: number[];
      let mat: number[][];

      mat = [
        [4, 8, 15, 29],
        [6, 12, 23, 44],
        [7, 14, 27, 52],
        [8, 15, 29, 56],
      ];
      A = [4, 12, 27, 56];
      for (let y = 0; y < A.length; ++y) {
        for (let x = y + 1; x < A.length; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }

      mat = [
        [1, 1, 2, 4, 8],
        [1, 2, 3, 6, 12],
        [1, 2, 4, 7, 14],
        [1, 2, 4, 8, 15],
        [1, 2, 4, 8, 16],
      ];
      A = [1, 2, 4, 8, 16];
      for (let y = 0; y < A.length; ++y) {
        for (let x = y + 1; x < A.length; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }
    });

    test("get correct value for any coordinate when k = 4", () => {
      const mat = [
        [4, 8, 15, 29],
        [6, 12, 23, 44],
        [7, 14, 27, 52],
        [8, 15, 29, 56],
      ];
      const A = [4, 12, 27, 56];
      const N = A.length;
      for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }
    });

    test("get correct value for any coordinate when k = 5", () => {
      const mat = [
        [1, 1, 2, 4, 8],
        [1, 2, 3, 6, 12],
        [1, 2, 4, 7, 14],
        [1, 2, 4, 8, 15],
        [1, 2, 4, 8, 16],
      ];
      const A = [1, 2, 4, 8, 16];
      const N = A.length;
      for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }
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
      expect(enc.shift(A, -1)).toEqual([-1, 0, 1]);
      expect(enc.shift(A, -2)).toEqual([1, 0, 1]);
    });

    it("should work for K = 4", () => {
      /*
            1, 0, 0, [0, 1, 1, 2]
            1, 0, [0, 1, 2, 3]
                1, [0, 1, 2, 4]
                    [1, 1, 2, 4]
            */
      const A = [0, 1, 2, 4];
      expect(enc.shift(A, 0)).toEqual([0, 1, 2, 4]);
      expect(enc.shift(A, -1)).toEqual([0, 0, 1, 2]);
      expect(enc.shift(A, -2)).toEqual([0, 0, 0, 1]);
      expect(enc.shift(A, -3)).toEqual([1, 1, 1, 1]);
      /*
            1, 1, 2, [ 4,  8, 15, 29]
            2, 3, [ 6, 12, 23, 44]
                4, [ 7, 14, 27, 52]
                    [ 8, 15, 29, 56]
            */
      const B = [4, 12, 27, 56];
      expect(enc.shift(B, 0)).toEqual([4, 12, 27, 56]);
      expect(enc.shift(B, -1)).toEqual([2, 6, 14, 29]);
      expect(enc.shift(B, -2)).toEqual([1, 3, 7, 15]);
      expect(enc.shift(B, -3)).toEqual([1, 2, 4, 8]);
    });
  });

  describe("times", () => {
    test("multiplies two encoded matrices of even length", () => {
      const A = [1, 2];
      const B = [3, 4];
      const result = enc.times(A, B);
      const expected = [4, 9];
      expect(result).toEqual(expected);
    });

    test("multiplies two encoded matrices of odd length", () => {
      const A = [1, 2, 3];
      const B = [4, 5, 6];
      const result = enc.times(A, B);
      const expected = [5, 12, 21];
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
      const expected = [208, 544];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const arr = [2, 3];
      const result = enc.pow(arr, 3);
      const expected = [15, 35];
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
      const expected = [2, 5];
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
      const data = [1, Number.MAX_SAFE_INTEGER];
      const terms = [1, 1];
      expect(() => enc.toValue(data, 0, terms)).toThrow(UnsafeError);
    });

    it("should return correct value when no terms given", () => {
      const data = [2, 5, 10];
      expect(enc.toValue(data, 0, undefined)).toBe(5);
      expect(enc.toValue(data, -1, undefined)).toBe(3);
      expect(enc.toValue(data, -2, undefined)).toBe(2);
    });

    it("should return correct value when terms given", () => {
      const data = [2, 5, 10];
      expect(enc.toValue(data, 0, [1])).toBe(10);
      expect(enc.toValue(data, 0, [1, 1])).toBe(18);
      expect(enc.toValue(data, 0, [1, 1, 2])).toBe(33);
      expect(enc.toValue(data, 0, [2])).toBe(20);
      expect(enc.toValue(data, 0, [2, 3])).toBe(46);
      expect(enc.toValue(data, 0, [2, 3, 5])).toBe(84);
    });
  });
});
