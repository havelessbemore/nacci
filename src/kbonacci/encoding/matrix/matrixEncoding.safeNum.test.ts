import { beforeAll, describe, expect, it, test } from "vitest";

import { SAFE_MAX } from "../../../globals";
import { DimensionError } from "../../../error/dimensionError";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { MatrixEncoding } from "./matrixEncoding";
import { SafeNumOps } from "../../../ops/safeNumOps";

describe("Matrix Encoding + SafeNum", () => {
  let enc: MatrixEncoding<number>;

  beforeAll(() => {
    const ops = new SafeNumOps();
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
      expect(enc.genK(1)).toEqual([[1]]);
      expect(enc.genK(2)).toEqual([
        [1, 1],
        [1, 2],
      ]);
      expect(enc.genK(3)).toEqual([
        [1, 1, 2],
        [1, 2, 3],
        [1, 2, 4],
      ]);
      expect(enc.genK(4)).toEqual([
        [1, 1, 2, 4],
        [1, 2, 3, 6],
        [1, 2, 4, 7],
        [1, 2, 4, 8],
      ]);
      expect(enc.genK(5)).toEqual([
        [1, 1, 2, 4, 8],
        [1, 2, 3, 6, 12],
        [1, 2, 4, 7, 14],
        [1, 2, 4, 8, 15],
        [1, 2, 4, 8, 16],
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
      expect(enc.genNegK(1)).toEqual([[1]]);
      expect(enc.genNegK(2)).toEqual([
        [2, -1],
        [-1, 1],
      ]);
      expect(enc.genNegK(3)).toEqual([
        [2, 0, -1],
        [-1, 2, -1],
        [0, -1, 1],
      ]);
      expect(enc.genNegK(4)).toEqual([
        [2, 0, 0, -1],
        [-1, 2, 0, -1],
        [0, -1, 2, -1],
        [0, 0, -1, 1],
      ]);
      expect(enc.genNegK(5)).toEqual([
        [2, 0, 0, 0, -1],
        [-1, 2, 0, 0, -1],
        [0, -1, 2, 0, -1],
        [0, 0, -1, 2, -1],
        [0, 0, 0, -1, 1],
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
      expect(result).toEqual([[1]]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genNegOne(4);
      const expected = [
        [-1, 1, 0, 0],
        [-1, 0, 1, 0],
        [-1, 0, 0, 1],
        [1, 0, 0, 0],
      ];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genNegOne(3);
      const expected = [
        [-1, 1, 0],
        [-1, 0, 1],
        [1, 0, 0],
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
      expect(result).toEqual([[1]]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genOne(4);
      const expected = [
        [0, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 0, 1],
        [0, 0, 1, 1],
      ];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genOne(3);
      const expected = [
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 1],
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
      expect(result).toEqual([[1]]);
    });

    test("generates identity matrix of even size", () => {
      const result = enc.genZero(4);
      const expected = [
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [0, 0, 0, 1],
      ];
      expect(result).toEqual(expected);
    });

    test("generates identity matrix of odd size", () => {
      const result = enc.genZero(3);
      const expected = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
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
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [
        [1, 2, 3],
        [1, 2, 3],
        [1, 2, 3],
      ];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly aligned array for valid deltas", () => {
      const A = [
        [4, 7, 13],
        [6, 11, 20],
        [7, 13, 24],
      ];
      expect(enc.shift(A, 0)).toEqual([
        [4, 7, 13],
        [6, 11, 20],
        [7, 13, 24],
      ]);
      expect(enc.shift(A, -1)).toEqual([
        [2, 4, 7],
        [3, 6, 11],
        [4, 7, 13],
      ]);
      expect(enc.shift(A, -2)).toEqual([
        [1, 2, 4],
        [2, 3, 6],
        [2, 4, 7],
      ]);
    });
  });

  describe("times", () => {
    test("multiplies two 2x2 matrices", () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const B = [
        [5, 6],
        [7, 8],
      ];
      const result = enc.times(A, B);
      const expected = [
        [19, 22],
        [43, 50],
      ];
      expect(result).toEqual(expected);
    });

    test("multiplies two 3x3 matrices", () => {
      const A = [
        [1, 1, 1],
        [0, 2, 2],
        [1, 1, 3],
      ];
      const B = [
        [4, 1, 1],
        [0, 5, 2],
        [1, 1, 6],
      ];
      const result = enc.times(A, B);
      const expected = [
        [5, 7, 9],
        [2, 12, 16],
        [7, 9, 21],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const B = [
        [5, 6],
        [7, 8],
        [9, 10],
      ];
      expect(() => enc.times(A, B)).toThrowError(DimensionError);
    });

    test("multiplies valid matrix dimensions", () => {
      const A = [
        [5, 6],
        [7, 8],
        [9, 10],
      ];
      const B = [
        [1, 2],
        [3, 4],
      ];
      const result = enc.times(A, B);
      const expected = [
        [23, 34],
        [31, 46],
        [39, 58],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [[SAFE_MAX, 2]];
      const B = [[2], [3]];
      expect(() => enc.times(A, B)).toThrowError();
    });
  });

  describe("pow", () => {
    test("returns input when exponent = 1", () => {
      const mat = [
        [1, 2],
        [3, 4],
      ];
      const result = enc.pow(mat, 1);
      expect(result).toEqual(mat);
    });

    test("calculates matrix exponentiation for even exponent", () => {
      const mat = [
        [1, 2],
        [3, 4],
      ];

      const result = enc.pow(mat, 4);
      const expected = [
        [199, 290],
        [435, 634],
      ];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const mat = [
        [1, 2],
        [2, 3],
      ];
      const result = enc.pow(mat, 3);
      const expected = [
        [21, 34],
        [34, 55],
      ];
      expect(result).toEqual(expected);
    });

    test("throws error for 0 exponent", () => {
      const mat = [
        [1, 2],
        [3, 4],
      ];
      expect(() => enc.pow(mat, 0)).toThrowError(OutOfBoundsError);
    });

    test("throws error for negative exponent", () => {
      const mat = [
        [1, 2],
        [3, 4],
      ];
      expect(() => enc.pow(mat, -2)).toThrowError(OutOfBoundsError);
    });
  });

  describe("square", () => {
    test("calculates the square of a matrix", () => {
      const A = [
        [1, 2],
        [3, 4],
      ];
      const result = enc.square(A);
      const expected = enc.times(A, A);
      expect(result).toEqual(expected);
    });

    test("throws error for invalid matrix dimensions", () => {
      const A = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      expect(() => enc.square(A)).toThrowError(DimensionError);
    });

    test("throws error for matrix multiplication overflow", () => {
      const A = [
        [SAFE_MAX, 2],
        [1, 1],
      ];
      expect(() => enc.square(A)).toThrowError();
    });
  });

  describe("toValue", () => {
    const data = [
      [24, 44, 81],
      [13, 68, 125],
      [44, 81, 149],
    ];

    it("should return the correct standard value", () => {
      expect(enc.toValue(data, 0)).toBe(81);
      expect(enc.toValue(data, -1)).toBe(44);
      expect(enc.toValue(data, -2)).toBe(24);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length < data length", () => {
      const terms = [4, 5];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const terms = [4, 5, 6, 7];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });
  });
});
