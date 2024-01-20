import { beforeAll, describe, expect, it, test } from "vitest";

import { MatrixEncoding } from "./matrixEncoding";
import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { BigOps } from "../../../ops/bigOps";

describe("Matrix Encoding + Big", () => {
  let enc: MatrixEncoding<bigint>;

  beforeAll(() => {
    const ops = new BigOps();
    enc = new MatrixEncoding(ops);
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
      expect(enc.genK(1)).toEqual([[1n]]);
      expect(enc.genK(2)).toEqual([
        [1n, 1n],
        [1n, 2n],
      ]);
      expect(enc.genK(3)).toEqual([
        [1n, 1n, 2n],
        [1n, 2n, 3n],
        [1n, 2n, 4n],
      ]);
      expect(enc.genK(4)).toEqual([
        [1n, 1n, 2n, 4n],
        [1n, 2n, 3n, 6n],
        [1n, 2n, 4n, 7n],
        [1n, 2n, 4n, 8n],
      ]);
      expect(enc.genK(5)).toEqual([
        [1n, 1n, 2n, 4n, 8n],
        [1n, 2n, 3n, 6n, 12n],
        [1n, 2n, 4n, 7n, 14n],
        [1n, 2n, 4n, 8n, 15n],
        [1n, 2n, 4n, 8n, 16n],
      ]);
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
      expect(enc.genNegK(1)).toEqual([[1n]]);
      expect(enc.genNegK(2)).toEqual([
        [2n, -1n],
        [-1n, 1n],
      ]);
      expect(enc.genNegK(3)).toEqual([
        [2n, 0n, -1n],
        [-1n, 2n, -1n],
        [0n, -1n, 1n],
      ]);
      expect(enc.genNegK(4)).toEqual([
        [2n, 0n, 0n, -1n],
        [-1n, 2n, 0n, -1n],
        [0n, -1n, 2n, -1n],
        [0n, 0n, -1n, 1n],
      ]);
      expect(enc.genNegK(5)).toEqual([
        [2n, 0n, 0n, 0n, -1n],
        [-1n, 2n, 0n, 0n, -1n],
        [0n, -1n, 2n, 0n, -1n],
        [0n, 0n, -1n, 2n, -1n],
        [0n, 0n, 0n, -1n, 1n],
      ]);
    });
  });

  describe("genNegOne", () => {
    test("generates empty matrix for N = 0", () => {
      const result = enc.genNegOne(0);
      expect(result).toEqual([]);
    });

    test("generates identity matrix for N = 1", () => {
      const result = enc.genNegOne(1);
      expect(result).toEqual([[1n]]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genNegOne(4);
      const expected = [
        [-1n, 1n, 0n, 0n],
        [-1n, 0n, 1n, 0n],
        [-1n, 0n, 0n, 1n],
        [1n, 0n, 0n, 0n],
      ];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genNegOne(3);
      const expected = [
        [-1n, 1n, 0n],
        [-1n, 0n, 1n],
        [1n, 0n, 0n],
      ];
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
      expect(result).toEqual([[1n]]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genOne(4);
      const expected = [
        [0n, 0n, 0n, 1n],
        [1n, 0n, 0n, 1n],
        [0n, 1n, 0n, 1n],
        [0n, 0n, 1n, 1n],
      ];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genOne(3);
      const expected = [
        [0n, 0n, 1n],
        [1n, 0n, 1n],
        [0n, 1n, 1n],
      ];
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
      expect(result).toEqual([[1n]]);
    });

    test("generates identity matrix of even size", () => {
      const result = enc.genZero(4);
      const expected = [
        [1n, 0n, 0n, 0n],
        [0n, 1n, 0n, 0n],
        [0n, 0n, 1n, 0n],
        [0n, 0n, 0n, 1n],
      ];
      expect(result).toEqual(expected);
    });

    test("generates identity matrix of odd size", () => {
      const result = enc.genZero(3);
      const expected = [
        [1n, 0n, 0n],
        [0n, 1n, 0n],
        [0n, 0n, 1n],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genZero(-1)).toThrowError();
    });
  });

  describe("shift", () => {
    it("should throw OutOfBoundsError for too small delta", () => {
      const A = [
        [1n, 2n, 3n],
        [1n, 2n, 3n],
        [1n, 2n, 3n],
      ];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [
        [1n, 2n, 3n],
        [1n, 2n, 3n],
        [1n, 2n, 3n],
      ];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly shifted array for valid deltas", () => {
      const A = [
        [4n, 7n, 13n],
        [6n, 11n, 20n],
        [7n, 13n, 24n],
      ];
      expect(enc.shift(A, 0)).toEqual([
        [4n, 7n, 13n],
        [6n, 11n, 20n],
        [7n, 13n, 24n],
      ]);
      expect(enc.shift(A, -1)).toEqual([
        [2n, 4n, 7n],
        [3n, 6n, 11n],
        [4n, 7n, 13n],
      ]);
      expect(enc.shift(A, -2)).toEqual([
        [1n, 2n, 4n],
        [2n, 3n, 6n],
        [2n, 4n, 7n],
      ]);
    });
  });

  describe("times", () => {
    test("multiplies two matrices", () => {
      const A = [
        [2n, 3n],
        [4n, 5n],
      ];
      const B = [
        [6n, 7n],
        [8n, 9n],
      ];
      const result = enc.times(A, B);
      const expected = [
        [36n, 41n],
        [64n, 73n],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [
        [1n, 2n],
        [3n, 4n],
      ];
      const B = [
        [5n, 6n],
        [7n, 8n],
        [9n, 10n],
      ];
      expect(() => enc.times(A, B)).toThrowError(DimensionError);
    });

    test("multiplies valid matrix dimensions", () => {
      const A = [
        [5n, 6n],
        [7n, 8n],
        [9n, 10n],
      ];
      const B = [
        [1n, 2n],
        [3n, 4n],
      ];
      const result = enc.times(A, B);
      const expected = [
        [23n, 34n],
        [31n, 46n],
        [39n, 58n],
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("pow", () => {
    test("returns input when exponent = 1", () => {
      const mat = [
        [1n, 2n],
        [3n, 4n],
      ];
      const result = enc.pow(mat, 1n);
      expect(result).toEqual(mat);
    });

    test("calculates matrix exponentiation for even exponent", () => {
      const mat = [
        [1n, 2n],
        [3n, 4n],
      ];

      const result = enc.pow(mat, 4n);
      const expected = [
        [199n, 290n],
        [435n, 634n],
      ];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const mat = [
        [1n, 2n],
        [2n, 3n],
      ];
      const result = enc.pow(mat, 3n);
      const expected = [
        [21n, 34n],
        [34n, 55n],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for 0 exponent", () => {
      const mat = [
        [1n, 2n],
        [3n, 4n],
      ];
      expect(() => enc.pow(mat, 0n)).toThrowError(OutOfBoundsError);
    });

    test("throws error for negative exponent", () => {
      const mat = [
        [1n, 2n],
        [3n, 4n],
      ];
      expect(() => enc.pow(mat, -2n)).toThrowError(OutOfBoundsError);
    });
  });

  describe("square", () => {
    test("calculates the square of a matrix", () => {
      const mat = [
        [1n, 2n],
        [3n, 4n],
      ];
      const result = enc.square(mat);
      const expected = [
        [7n, 10n],
        [15n, 22n],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [
        [1n, 2n],
        [3n, 4n],
        [5n, 6n],
      ];
      expect(() => enc.square(A)).toThrowError(DimensionError);
    });
  });

  describe("toValue", () => {
    const data = [
      [24n, 44n, 81n],
      [13n, 68n, 125n],
      [44n, 81n, 149n],
    ];

    it("should return the correct standard value", () => {
      expect(enc.toValue(data, 0)).toBe(81n);
      expect(enc.toValue(data, -1)).toBe(44n);
      expect(enc.toValue(data, -2)).toBe(24n);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const terms = [4n, 5n, 6n, 7n];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should return correct value when no terms given", () => {
      const data = [
        [2n, 3n, 5n],
        [2n, 5n, 8n],
        [3n, 5n, 10n],
      ];
      expect(enc.toValue(data, 0, undefined)).toBe(5n);
      expect(enc.toValue(data, -1, undefined)).toBe(3n);
      expect(enc.toValue(data, -2, undefined)).toBe(2n);
    });

    it("should return correct value when terms given", () => {
      const data = [
        [2n, 3n, 5n],
        [2n, 5n, 8n],
        [3n, 5n, 10n],
      ];
      expect(enc.toValue(data, 0, [1n])).toBe(10n);
      expect(enc.toValue(data, 0, [1n, 1n])).toBe(18n);
      expect(enc.toValue(data, 0, [1n, 1n, 2n])).toBe(33n);
      expect(enc.toValue(data, 0, [2n])).toBe(20n);
      expect(enc.toValue(data, 0, [2n, 3n])).toBe(46n);
      expect(enc.toValue(data, 0, [2n, 3n, 5n])).toBe(84n);
    });
  });
});
