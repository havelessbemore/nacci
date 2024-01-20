import { beforeAll, describe, expect, it, test } from "vitest";

import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { SumEncoding } from "./sumEncoding";
import { BigOps } from "../../../ops/bigOps";

describe("Sum Encoding + Big", () => {
  let enc: SumEncoding<bigint>;

  beforeAll(() => {
    const ops = new BigOps();
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
      expect(enc.genK(1)).toEqual([1n]);
      expect(enc.genK(2)).toEqual([1n, 2n]);
      expect(enc.genK(3)).toEqual([1n, 2n, 4n]);
      expect(enc.genK(4)).toEqual([1n, 2n, 4n, 8n]);
      expect(enc.genK(5)).toEqual([1n, 2n, 4n, 8n, 16n]);
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
      expect(enc.genNegK(1)).toEqual([1n]);
      expect(enc.genNegK(2)).toEqual([2n, 1n]);
      expect(enc.genNegK(3)).toEqual([2n, 2n, 1n]);
      expect(enc.genNegK(4)).toEqual([2n, 2n, 2n, 1n]);
      expect(enc.genNegK(5)).toEqual([2n, 2n, 2n, 2n, 1n]);
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
      expect(enc.genNegOne(1)).toEqual([1n]);
      expect(enc.genNegOne(2)).toEqual([-1n, 0n]);
      expect(enc.genNegOne(3)).toEqual([-1n, 0n, 0n]);
      expect(enc.genNegOne(4)).toEqual([-1n, 0n, 0n, 0n]);
      expect(enc.genNegOne(5)).toEqual([-1n, 0n, 0n, 0n, 0n]);
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
      expect(enc.genOne(1)).toEqual([1n]);
      expect(enc.genOne(2)).toEqual([0n, 1n]);
      expect(enc.genOne(3)).toEqual([0n, 0n, 1n]);
      expect(enc.genOne(4)).toEqual([0n, 0n, 0n, 1n]);
      expect(enc.genOne(5)).toEqual([0n, 0n, 0n, 0n, 1n]);
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
      expect(enc.genZero(1)).toEqual([1n]);
      expect(enc.genZero(2)).toEqual([1n, 1n]);
      expect(enc.genZero(3)).toEqual([1n, 1n, 1n]);
      expect(enc.genZero(4)).toEqual([1n, 1n, 1n, 1n]);
      expect(enc.genZero(5)).toEqual([1n, 1n, 1n, 1n, 1n]);
    });
  });

  describe("get", () => {
    test("get correct values for x == y", () => {
      let A: bigint[];

      A = [5n, 7n];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [1n, 2n, 4n];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [4n, 12n, 27n, 56n];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [4n, 12n, 27n, 56n, 80n];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }

      A = [2n, 3n, 5n, 7n, 11n, 13n];
      for (let d = 0; d < A.length; ++d) {
        expect(enc.get(A, d, d)).toEqual(A[d]);
      }
    });

    test("get correct value for any coordinate when y < x", () => {
      let A: bigint[];
      let mat: bigint[][];

      mat = [
        [4n, 8n, 15n, 29n],
        [6n, 12n, 23n, 44n],
        [7n, 14n, 27n, 52n],
        [8n, 15n, 29n, 56n],
      ];
      A = [4n, 12n, 27n, 56n];
      for (let y = 0; y < A.length; ++y) {
        for (let x = y + 1; x < A.length; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }

      mat = [
        [1n, 1n, 2n, 4n, 8n],
        [1n, 2n, 3n, 6n, 12n],
        [1n, 2n, 4n, 7n, 14n],
        [1n, 2n, 4n, 8n, 15n],
        [1n, 2n, 4n, 8n, 16n],
      ];
      A = [1n, 2n, 4n, 8n, 16n];
      for (let y = 0; y < A.length; ++y) {
        for (let x = y + 1; x < A.length; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }
    });

    test("get correct value for any coordinate when k = 4", () => {
      const mat = [
        [4n, 8n, 15n, 29n],
        [6n, 12n, 23n, 44n],
        [7n, 14n, 27n, 52n],
        [8n, 15n, 29n, 56n],
      ];
      const A = [4n, 12n, 27n, 56n];
      const N = A.length;
      for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
          expect(enc.get(A, y, x)).toEqual(mat[y][x]);
        }
      }
    });

    test("get correct value for any coordinate when k = 5", () => {
      const mat = [
        [1n, 1n, 2n, 4n, 8n],
        [1n, 2n, 3n, 6n, 12n],
        [1n, 2n, 4n, 7n, 14n],
        [1n, 2n, 4n, 8n, 15n],
        [1n, 2n, 4n, 8n, 16n],
      ];
      const A = [1n, 2n, 4n, 8n, 16n];
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
      const A = [1n, 2n, 3n];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [1n, 2n, 3n];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly shifted array for valid deltas", () => {
      const A = [1n, 2n, 3n];
      expect(enc.shift(A, 0)).toEqual([1n, 2n, 3n]);
      expect(enc.shift(A, -1)).toEqual([-1n, 0n, 1n]);
      expect(enc.shift(A, -2)).toEqual([1n, 0n, 1n]);
    });

    it("should work for K = 4", () => {
      /*
            1, 0, 0, [0, 1, 1, 2]
            1, 0, [0, 1, 2, 3]
                1, [0, 1, 2, 4]
                    [1, 1, 2, 4]
            */
      const A = [0n, 1n, 2n, 4n];
      expect(enc.shift(A, 0)).toEqual([0n, 1n, 2n, 4n]);
      expect(enc.shift(A, -1)).toEqual([0n, 0n, 1n, 2n]);
      expect(enc.shift(A, -2)).toEqual([0n, 0n, 0n, 1n]);
      expect(enc.shift(A, -3)).toEqual([1n, 1n, 1n, 1n]);
      /*
            1, 1, 2, [ 4,  8, 15, 29]
            2, 3, [ 6, 12, 23, 44]
                4, [ 7, 14, 27, 52]
                    [ 8, 15, 29, 56]
            */
      const B = [4n, 12n, 27n, 56n];
      expect(enc.shift(B, 0)).toEqual([4n, 12n, 27n, 56n]);
      expect(enc.shift(B, -1)).toEqual([2n, 6n, 14n, 29n]);
      expect(enc.shift(B, -2)).toEqual([1n, 3n, 7n, 15n]);
      expect(enc.shift(B, -3)).toEqual([1n, 2n, 4n, 8n]);
    });
  });

  describe("times", () => {
    test("multiplies two encoded matrices of even length", () => {
      const A = [1n, 2n];
      const B = [3n, 4n];
      const result = enc.times(A, B);
      const expected = [4n, 9n];
      expect(result).toEqual(expected);
    });

    test("multiplies two encoded matrices of odd length", () => {
      const A = [1n, 2n, 3n];
      const B = [4n, 5n, 6n];
      const result = enc.times(A, B);
      const expected = [5n, 12n, 21n];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [1n, 2n];
      const B = [3n, 4n, 5n];
      expect(() => enc.times(A, B)).toThrowError(DimensionError);
    });
  });

  describe("pow", () => {
    test("returns input when exponent = 1", () => {
      const arr = [2n, 4n];
      const result = enc.pow(arr, 1n);
      expect(result).toEqual(arr);
    });

    test("calculates matrix exponentiation for even exponent", () => {
      const arr = [2n, 4n];
      const result = enc.pow(arr, 4n);
      const expected = [208n, 544n];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const arr = [2n, 3n];
      const result = enc.pow(arr, 3n);
      const expected = [15n, 35n];
      expect(result).toEqual(expected);
    });

    test("throws error for 0 exponent", () => {
      const arr = [2n, 4n];
      expect(() => enc.pow(arr, 0n)).toThrowError(OutOfBoundsError);
    });

    test("throws error for negative exponent", () => {
      const arr = [2n, 4n];
      expect(() => enc.pow(arr, -2n)).toThrowError(OutOfBoundsError);
    });
  });

  describe("square", () => {
    test("calculates the square of an encoded matrix", () => {
      const A = [1n, 2n];
      const result = enc.square(A);
      const expected = [2n, 5n];
      expect(result).toEqual(expected);
    });
  });

  describe("toValue", () => {
    it("should return the correct value for delta = 0", () => {
      const data = [1n, 2n, 3n];
      const delta = 0;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(32n);
    });

    it("should return the correct value for delta = -1", () => {
      const data = [1n, 2n, 3n];
      const delta = -1;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(20n);
    });

    it("should return the correct value for delta = -2", () => {
      const data = [1n, 2n, 3n];
      const delta = -2;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(10n);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const data = [1n, 2n, 3n];
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const data = [1n, 2n, 3n];
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const data = [1n, 2n, 3n];
      const terms = [4n, 5n, 6n, 7n];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should return correct value when no terms given", () => {
      const data = [2n, 5n, 10n];
      expect(enc.toValue(data, 0, undefined)).toBe(5n);
      expect(enc.toValue(data, -1, undefined)).toBe(3n);
      expect(enc.toValue(data, -2, undefined)).toBe(2n);
    });

    it("should return correct value when terms given", () => {
      const data = [2n, 5n, 10n];
      expect(enc.toValue(data, 0, [1n])).toBe(10n);
      expect(enc.toValue(data, 0, [1n, 1n])).toBe(18n);
      expect(enc.toValue(data, 0, [1n, 1n, 2n])).toBe(33n);
      expect(enc.toValue(data, 0, [2n])).toBe(20n);
      expect(enc.toValue(data, 0, [2n, 3n])).toBe(46n);
      expect(enc.toValue(data, 0, [2n, 3n, 5n])).toBe(84n);
    });
  });
});
