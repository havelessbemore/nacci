import { beforeAll, describe, expect, it, test } from "vitest";

import { MatrixEncoding as Encoding } from "./matrixEncoding";
import { Ops } from "../../../ops/ops";
import { BigOps, SafeNumOps } from "../../../ops";
import { castMatrix } from "../../../utils/matrix";
import { Matrix } from "../../../type/matrix";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";
import { castArray } from "../../../utils/array";

const ops: Ops[] = [new BigOps(), new SafeNumOps()];
for (const valueOps of ops) {
  run(valueOps);
}

export function run<V>(ops: Ops<V>): void {
  function cast(matrix: Matrix): Matrix<V> {
    return castMatrix(matrix, ops);
  }

  function castTerms(array: unknown[]): V[] {
    return castArray(array, ops);
  }

  describe(Encoding.name, () => {
    let enc: Encoding<V>;

    beforeAll(() => {
      enc = new Encoding(ops);
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
        expect(enc.genK(1)).toEqual(cast([[1]]));
        expect(enc.genK(2)).toEqual(
          cast([
            [1, 1],
            [1, 2],
          ])
        );
        expect(enc.genK(3)).toEqual(
          cast([
            [1, 1, 2],
            [1, 2, 3],
            [1, 2, 4],
          ])
        );
        expect(enc.genK(4)).toEqual(
          cast([
            [1, 1, 2, 4],
            [1, 2, 3, 6],
            [1, 2, 4, 7],
            [1, 2, 4, 8],
          ])
        );
        expect(enc.genK(5)).toEqual(
          cast([
            [1, 1, 2, 4, 8],
            [1, 2, 3, 6, 12],
            [1, 2, 4, 7, 14],
            [1, 2, 4, 8, 15],
            [1, 2, 4, 8, 16],
          ])
        );
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
        expect(enc.genNegK(1)).toEqual(cast([[1]]));
        expect(enc.genNegK(2)).toEqual(
          cast([
            [2, -1],
            [-1, 1],
          ])
        );
        expect(enc.genNegK(3)).toEqual(
          cast([
            [2, 0, -1],
            [-1, 2, -1],
            [0, -1, 1],
          ])
        );
        expect(enc.genNegK(4)).toEqual(
          cast([
            [2, 0, 0, -1],
            [-1, 2, 0, -1],
            [0, -1, 2, -1],
            [0, 0, -1, 1],
          ])
        );
        expect(enc.genNegK(5)).toEqual(
          cast([
            [2, 0, 0, 0, -1],
            [-1, 2, 0, 0, -1],
            [0, -1, 2, 0, -1],
            [0, 0, -1, 2, -1],
            [0, 0, 0, -1, 1],
          ])
        );
      });
    });

    describe("genNegOne", () => {
      test("generates empty matrix for N = 0", () => {
        const result = enc.genNegOne(0);
        expect(result).toEqual([]);
      });

      test("generates identity matrix for N = 1", () => {
        const result = enc.genNegOne(1);
        expect(result).toEqual(cast([[1]]));
      });

      test("generates relation matrix of even size", () => {
        const result = enc.genNegOne(4);
        const expected = cast([
          [-1, 1, 0, 0],
          [-1, 0, 1, 0],
          [-1, 0, 0, 1],
          [1, 0, 0, 0],
        ]);
        expect(result).toEqual(expected);
      });

      test("generates relation matrix of odd size", () => {
        const result = enc.genNegOne(3);
        const expected = cast([
          [-1, 1, 0],
          [-1, 0, 1],
          [1, 0, 0],
        ]);
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
        expect(result).toEqual(cast([[1]]));
      });

      test("generates relation matrix of even size", () => {
        const result = enc.genOne(4);
        const expected = cast([
          [0, 0, 0, 1],
          [1, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 0, 1, 1],
        ]);
        expect(result).toEqual(expected);
      });

      test("generates relation matrix of odd size", () => {
        const result = enc.genOne(3);
        const expected = cast([
          [0, 0, 1],
          [1, 0, 1],
          [0, 1, 1],
        ]);
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
        expect(result).toEqual(cast([[1]]));
      });

      test("generates identity matrix of even size", () => {
        const result = enc.genZero(4);
        const expected = cast([
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 1],
        ]);
        expect(result).toEqual(expected);
      });

      test("generates identity matrix of odd size", () => {
        const result = enc.genZero(3);
        const expected = cast([
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1],
        ]);
        expect(result).toEqual(expected);
      });

      test("throws error if matrix size is negative", () => {
        expect(() => enc.genZero(-1)).toThrowError();
      });
    });

    describe("shift", () => {
      it("should throw OutOfBoundsError for too small delta", () => {
        const A = cast([
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ]);
        const invalidDelta = -3;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw OutOfBoundsError for too large delta", () => {
        const A = cast([
          [1, 2, 3],
          [1, 2, 3],
          [1, 2, 3],
        ]);
        const invalidDelta = 1;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should return a correctly shifted array for valid deltas", () => {
        const A = cast([
          [4, 7, 13],
          [6, 11, 20],
          [7, 13, 24],
        ]);
        expect(enc.shift(A, 0)).toEqual(
          cast([
            [4, 7, 13],
            [6, 11, 20],
            [7, 13, 24],
          ])
        );
        expect(enc.shift(A, -1)).toEqual(
          cast([
            [2, 4, 7],
            [3, 6, 11],
            [4, 7, 13],
          ])
        );
        expect(enc.shift(A, -2)).toEqual(
          cast([
            [1, 2, 4],
            [2, 3, 6],
            [2, 4, 7],
          ])
        );
      });
    });

    describe("times", () => {
      test("multiplies two matrices", () => {
        const A = cast([
          [2, 3],
          [4, 5],
        ]);
        const B = cast([
          [6, 7],
          [8, 9],
        ]);
        const result = enc.times(A, B);
        const expected = cast([
          [36, 41],
          [64, 73],
        ]);
        expect(result).toEqual(expected);
      });

      test("throws error for invalid matrix dimensions", () => {
        const A = cast([
          [1, 2],
          [3, 4],
        ]);
        const B = cast([
          [5, 6],
          [7, 8],
          [9, 10],
        ]);
        expect(() => enc.times(A, B)).toThrowError(DimensionError);
      });

      test("multiplies valid matrix dimensions", () => {
        const A = cast([
          [5, 6],
          [7, 8],
          [9, 10],
        ]);
        const B = cast([
          [1, 2],
          [3, 4],
        ]);
        const result = enc.times(A, B);
        const expected = cast([
          [23, 34],
          [31, 46],
          [39, 58],
        ]);
        expect(result).toEqual(expected);
      });
    });

    describe("pow", () => {
      test("returns input when exponent = 1", () => {
        const mat = cast([
          [1, 2],
          [3, 4],
        ]);
        const result = enc.pow(mat, ops.cast(1));
        expect(result).toEqual(mat);
      });

      test("calculates matrix exponentiation for even exponent", () => {
        const mat = cast([
          [1, 2],
          [3, 4],
        ]);

        const result = enc.pow(mat, ops.cast(4));
        const expected = cast([
          [199, 290],
          [435, 634],
        ]);
        expect(result).toEqual(expected);
      });

      test("calculates matrix exponentiation for odd exponent", () => {
        const mat = cast([
          [1, 2],
          [2, 3],
        ]);
        const result = enc.pow(mat, ops.cast(3));
        const expected = cast([
          [21, 34],
          [34, 55],
        ]);
        expect(result).toEqual(expected);
      });

      test("throws error for 0 exponent", () => {
        const mat = cast([
          [1, 2],
          [3, 4],
        ]);
        expect(() => enc.pow(mat, ops.cast(0))).toThrowError(OutOfBoundsError);
      });

      test("throws error for negative exponent", () => {
        const mat = cast([
          [1, 2],
          [3, 4],
        ]);
        expect(() => enc.pow(mat, ops.cast(-2n))).toThrowError(
          OutOfBoundsError
        );
      });
    });

    describe("square", () => {
      test("calculates the square of a matrix", () => {
        const mat = cast([
          [1, 2],
          [3, 4],
        ]);
        const result = enc.square(mat);
        const expected = cast([
          [7, 10],
          [15, 22],
        ]);
        expect(result).toEqual(expected);
      });

      test("throws error for invalid matrix dimensions", () => {
        const A = cast([
          [1, 2],
          [3, 4],
          [5, 6],
        ]);
        expect(() => enc.square(A)).toThrowError(DimensionError);
      });
    });

    describe("toValue", () => {
      const data = cast([
        [24, 44, 81],
        [13, 68, 125],
        [44, 81, 149],
      ]);

      it("should return the correct standard value", () => {
        expect(enc.toValue(data, 0)).toBe(ops.cast(81));
        expect(enc.toValue(data, -1)).toBe(ops.cast(44));
        expect(enc.toValue(data, -2)).toBe(ops.cast(24));
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
        const terms = castTerms([4, 5, 6, 7]);
        expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
      });

      it("should return correct value when no terms given", () => {
        const data = cast([
          [2, 3, 5],
          [2, 5, 8],
          [3, 5, 10],
        ]);
        expect(enc.toValue(data, 0, undefined)).toBe(ops.cast(5));
        expect(enc.toValue(data, -1, undefined)).toBe(ops.cast(3));
        expect(enc.toValue(data, -2, undefined)).toBe(ops.cast(2));
      });

      it("should return correct value when terms given", () => {
        const data = cast([
          [2, 3, 5],
          [2, 5, 8],
          [3, 5, 10],
        ]);
        expect(enc.toValue(data, 0, castTerms([1]))).toBe(ops.cast(10));
        expect(enc.toValue(data, 0, castTerms([1, 1]))).toBe(ops.cast(18));
        expect(enc.toValue(data, 0, castTerms([1, 1, 2]))).toBe(ops.cast(33));
        expect(enc.toValue(data, 0, castTerms([2]))).toBe(ops.cast(20));
        expect(enc.toValue(data, 0, castTerms([2, 3]))).toBe(ops.cast(46));
        expect(enc.toValue(data, 0, castTerms([2, 3, 5]))).toBe(ops.cast(84));
      });
    });
  });
}
