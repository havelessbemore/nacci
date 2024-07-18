import { beforeAll, describe, expect, it, test } from "@jest/globals";

import { SumEncoding as Encoding } from "./sumEncoding";
import { Ops } from "../../../ops/ops";
import { BigOps, SafeNumOps } from "../../../ops";
import { castArray } from "../../../utils/array";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";
import { Matrix } from "../../../type/matrix";
import { castMatrix } from "../../../utils/matrix";

const ops: Ops[] = [new BigOps(), new SafeNumOps()];
for (const valueOps of ops) {
  run(valueOps);
}

export function run<V>(ops: Ops<V>): void {
  function cast(array: unknown[]): V[] {
    return castArray(array, ops);
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
        expect(enc.genK(1)).toEqual(cast([1]));
        expect(enc.genK(2)).toEqual(cast([1, 2]));
        expect(enc.genK(3)).toEqual(cast([1, 2, 4]));
        expect(enc.genK(4)).toEqual(cast([1, 2, 4, 8]));
        expect(enc.genK(5)).toEqual(cast([1, 2, 4, 8, 16]));
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
        expect(enc.genNegK(1)).toEqual(cast([1]));
        expect(enc.genNegK(2)).toEqual(cast([2, 1]));
        expect(enc.genNegK(3)).toEqual(cast([2, 2, 1]));
        expect(enc.genNegK(4)).toEqual(cast([2, 2, 2, 1]));
        expect(enc.genNegK(5)).toEqual(cast([2, 2, 2, 2, 1]));
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
        expect(enc.genNegOne(1)).toEqual(cast([1]));
        expect(enc.genNegOne(2)).toEqual(cast([-1, 0]));
        expect(enc.genNegOne(3)).toEqual(cast([-1, 0, 0]));
        expect(enc.genNegOne(4)).toEqual(cast([-1, 0, 0, 0]));
        expect(enc.genNegOne(5)).toEqual(cast([-1, 0, 0, 0, 0]));
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
        expect(enc.genOne(1)).toEqual(cast([1]));
        expect(enc.genOne(2)).toEqual(cast([0, 1]));
        expect(enc.genOne(3)).toEqual(cast([0, 0, 1]));
        expect(enc.genOne(4)).toEqual(cast([0, 0, 0, 1]));
        expect(enc.genOne(5)).toEqual(cast([0, 0, 0, 0, 1]));
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
        expect(enc.genZero(1)).toEqual(cast([1]));
        expect(enc.genZero(2)).toEqual(cast([1, 1]));
        expect(enc.genZero(3)).toEqual(cast([1, 1, 1]));
        expect(enc.genZero(4)).toEqual(cast([1, 1, 1, 1]));
        expect(enc.genZero(5)).toEqual(cast([1, 1, 1, 1, 1]));
      });
    });

    describe("get", () => {
      test("get correct values for x == y", () => {
        let A: V[];

        A = cast([5, 7]);
        for (let d = 0; d < A.length; ++d) {
          expect(enc.get(A, d, d)).toEqual(A[d]);
        }

        A = cast([1, 2, 4]);
        for (let d = 0; d < A.length; ++d) {
          expect(enc.get(A, d, d)).toEqual(A[d]);
        }

        A = cast([4, 12, 27, 56]);
        for (let d = 0; d < A.length; ++d) {
          expect(enc.get(A, d, d)).toEqual(A[d]);
        }

        A = cast([4, 12, 27, 56, 80]);
        for (let d = 0; d < A.length; ++d) {
          expect(enc.get(A, d, d)).toEqual(A[d]);
        }

        A = cast([2, 3, 5, 7, 11, 13]);
        for (let d = 0; d < A.length; ++d) {
          expect(enc.get(A, d, d)).toEqual(A[d]);
        }
      });

      test("get correct value for any coordinate when y < x", () => {
        let A: V[];
        let mat: Matrix<V>;

        mat = castMatrix(
          [
            [4, 8, 15, 29],
            [6, 12, 23, 44],
            [7, 14, 27, 52],
            [8, 15, 29, 56],
          ],
          ops,
        );
        A = cast([4, 12, 27, 56]);
        for (let y = 0; y < A.length; ++y) {
          for (let x = y + 1; x < A.length; ++x) {
            expect(enc.get(A, y, x)).toEqual(mat[y][x]);
          }
        }

        mat = castMatrix(
          [
            [1, 1, 2, 4, 8],
            [1, 2, 3, 6, 12],
            [1, 2, 4, 7, 14],
            [1, 2, 4, 8, 15],
            [1, 2, 4, 8, 16],
          ],
          ops,
        );
        A = cast([1, 2, 4, 8, 16]);
        for (let y = 0; y < A.length; ++y) {
          for (let x = y + 1; x < A.length; ++x) {
            expect(enc.get(A, y, x)).toEqual(mat[y][x]);
          }
        }
      });

      test("get correct value for any coordinate when k = 4", () => {
        const mat = castMatrix(
          [
            [4, 8, 15, 29],
            [6, 12, 23, 44],
            [7, 14, 27, 52],
            [8, 15, 29, 56],
          ],
          ops,
        );
        const A = cast([4, 12, 27, 56]);
        const N = A.length;
        for (let y = 0; y < N; ++y) {
          for (let x = 0; x < N; ++x) {
            expect(enc.get(A, y, x)).toEqual(mat[y][x]);
          }
        }
      });

      test("get correct value for any coordinate when k = 5", () => {
        const mat = castMatrix(
          [
            [1, 1, 2, 4, 8],
            [1, 2, 3, 6, 12],
            [1, 2, 4, 7, 14],
            [1, 2, 4, 8, 15],
            [1, 2, 4, 8, 16],
          ],
          ops,
        );
        const A = cast([1, 2, 4, 8, 16]);
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
        const A = cast([1, 2, 3]);
        const invalidDelta = -3;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw OutOfBoundsError for too large delta", () => {
        const A = cast([1, 2, 3]);
        const invalidDelta = 1;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should return a correctly shifted array for valid deltas", () => {
        const A = cast([1, 2, 3]);
        expect(enc.shift(A, 0)).toEqual(cast([1, 2, 3]));
        expect(enc.shift(A, -1)).toEqual(cast([-1, 0, 1]));
        expect(enc.shift(A, -2)).toEqual(cast([1, 0, 1]));
      });

      it("should work for K = 4", () => {
        let A = cast([0, 1, 2, 4]);
        expect(enc.shift(A, 0)).toEqual(cast([0, 1, 2, 4]));
        expect(enc.shift(A, -1)).toEqual(cast([0, 0, 1, 2]));
        expect(enc.shift(A, -2)).toEqual(cast([0, 0, 0, 1]));
        expect(enc.shift(A, -3)).toEqual(cast([1, 1, 1, 1]));

        A = cast([4, 12, 27, 56]);
        expect(enc.shift(A, 0)).toEqual(cast([4, 12, 27, 56]));
        expect(enc.shift(A, -1)).toEqual(cast([2, 6, 14, 29]));
        expect(enc.shift(A, -2)).toEqual(cast([1, 3, 7, 15]));
        expect(enc.shift(A, -3)).toEqual(cast([1, 2, 4, 8]));
      });
    });

    describe("times", () => {
      test("multiplies two encoded matrices of even length", () => {
        const A = cast([1, 2]);
        const B = cast([3, 4]);
        const result = enc.times(A, B);
        const expected = cast([4, 9]);
        expect(result).toEqual(expected);
      });

      test("multiplies two encoded matrices of odd length", () => {
        const A = cast([1, 2, 3]);
        const B = cast([4, 5, 6]);
        const result = enc.times(A, B);
        const expected = cast([5, 12, 21]);
        expect(result).toEqual(expected);
      });

      test("throws error for invalid matrix dimensions", () => {
        const A = cast([1, 2]);
        const B = cast([3, 4, 5]);
        expect(() => enc.times(A, B)).toThrowError(DimensionError);
      });
    });

    describe("pow", () => {
      test("returns input when exponent = 1", () => {
        const arr = cast([2, 4]);
        const result = enc.pow(arr, ops.cast(1));
        expect(result).toEqual(arr);
      });

      test("calculates matrix exponentiation for even exponent", () => {
        const arr = cast([2, 4]);
        const result = enc.pow(arr, ops.cast(4));
        const expected = cast([208, 544]);
        expect(result).toEqual(expected);
      });

      test("calculates matrix exponentiation for odd exponent", () => {
        const arr = cast([2, 3]);
        const result = enc.pow(arr, ops.cast(3));
        const expected = cast([15, 35]);
        expect(result).toEqual(expected);
      });

      test("throws error for 0 exponent", () => {
        const arr = cast([2, 4]);
        expect(() => enc.pow(arr, ops.cast(0))).toThrowError(OutOfBoundsError);
      });

      test("throws error for negative exponent", () => {
        const arr = cast([2, 4]);
        expect(() => enc.pow(arr, ops.cast(-2))).toThrowError(OutOfBoundsError);
      });
    });

    describe("square", () => {
      test("calculates the square of an encoded matrix", () => {
        const A = cast([1, 2]);
        const result = enc.square(A);
        const expected = cast([2, 5]);
        expect(result).toEqual(expected);
      });
    });

    describe("toValue", () => {
      it("should return the correct value for delta = 0", () => {
        const data = cast([1, 2, 3]);
        const delta = 0;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(32));
      });

      it("should return the correct value for delta = -1", () => {
        const data = cast([1, 2, 3]);
        const delta = -1;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(20));
      });

      it("should return the correct value for delta = -2", () => {
        const data = cast([1, 2, 3]);
        const delta = -2;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(10));
      });

      it("should throw OutOfBoundsError for too small delta", () => {
        const data = cast([1, 2, 3]);
        const invalidDelta = -3;
        expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw OutOfBoundsError for too large delta", () => {
        const data = cast([1, 2, 3]);
        const invalidDelta = 1;
        expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw DimensionError when terms length > data length", () => {
        const data = cast([1, 2, 3]);
        const terms = castTerms([4, 5, 6, 7]);
        expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
      });

      it("should return correct value when no terms given", () => {
        const data = cast([2, 5, 10]);
        expect(enc.toValue(data, 0, undefined)).toBe(ops.cast(5));
        expect(enc.toValue(data, -1, undefined)).toBe(ops.cast(3));
        expect(enc.toValue(data, -2, undefined)).toBe(ops.cast(2));
      });

      it("should return correct value when terms given", () => {
        const data = cast([2, 5, 10]);
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
