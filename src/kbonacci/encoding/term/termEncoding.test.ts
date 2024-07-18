import { beforeAll, describe, expect, it, test } from "@jest/globals";

import { TermEncoding as Encoding } from "./termEncoding";
import { Ops } from "../../../ops/ops";
import { BigOps, SafeNumOps } from "../../../ops";
import { castArray } from "../../../utils/array";
import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";

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
        expect(enc.genK(2)).toEqual(cast([1, 1]));
        expect(enc.genK(3)).toEqual(cast([1, 1, 2]));
        expect(enc.genK(4)).toEqual(cast([1, 1, 2, 4]));
        expect(enc.genK(5)).toEqual(cast([1, 1, 2, 4, 8]));
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
        expect(enc.genNegK(2)).toEqual(cast([2, -1]));
        expect(enc.genNegK(3)).toEqual(cast([2, 0, -1]));
        expect(enc.genNegK(4)).toEqual(cast([2, 0, 0, -1]));
        expect(enc.genNegK(5)).toEqual(cast([2, 0, 0, 0, -1]));
      });
    });

    describe("genZero", () => {
      test("generates empty matrix for N = 0", () => {
        const result = enc.genZero(0);
        expect(result).toEqual([]);
      });

      test("generates identity matrix for N = 1", () => {
        const result = enc.genZero(1);
        expect(result).toEqual(cast([1]));
      });

      test("generates identity matrix of even size", () => {
        const result = enc.genZero(4);
        const expected = cast([1, 0, 0, 0]);
        expect(result).toEqual(expected);
      });

      test("generates identity matrix of odd size", () => {
        const result = enc.genZero(3);
        const expected = cast([1, 0, 0]);
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
        expect(result).toEqual(cast([1]));
      });

      test("generates relation matrix of even size", () => {
        const result = enc.genOne(4);
        const expected = cast([0, 0, 0, 1]);
        expect(result).toEqual(expected);
      });

      test("generates relation matrix of odd size", () => {
        const result = enc.genOne(3);
        const expected = cast([0, 0, 1]);
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
        expect(result).toEqual(cast([1]));
      });

      test("generates relation matrix of even size", () => {
        const result = enc.genNegOne(4);
        const expected = cast([-1, 1, 0, 0]);
        expect(result).toEqual(expected);
      });

      test("generates relation matrix of odd size", () => {
        const result = enc.genNegOne(3);
        const expected = cast([-1, 1, 0]);
        expect(result).toEqual(expected);
      });

      test("throws error if matrix size is negative", () => {
        expect(() => enc.genNegOne(-1)).toThrowError();
      });
    });

    describe("shift", () => {
      it("should throw OutOfBoundsError for too small delta", () => {
        const A = cast([1, 1, 1]);
        const invalidDelta = -3;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw OutOfBoundsError for too large delta", () => {
        const A = cast([1, 1, 1]);
        const invalidDelta = 1;
        expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should return a correctly shifted array for valid deltas", () => {
        const A = cast([4, 7, 13]);
        expect(enc.shift(A, 0)).toEqual(cast([4, 7, 13]));
        expect(enc.shift(A, -1)).toEqual(cast([2, 4, 7]));
        expect(enc.shift(A, -2)).toEqual(cast([1, 2, 4]));
      });
    });

    describe("times", () => {
      test("multiplies two encoded matrices of even length", () => {
        const A = cast([1, 2]);
        const B = cast([3, 4]);
        const result = enc.times(A, B);
        const expected = cast([11, 18]);
        expect(result).toEqual(expected);
      });

      test("multiplies two encoded matrices of odd length", () => {
        const A = cast([1, 2, 3]);
        const B = cast([4, 5, 6]);
        const result = enc.times(A, B);
        const expected = cast([21, 41, 73]);
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
        const expected = cast([1424, 2304]);
        expect(result).toEqual(expected);
      });

      test("calculates matrix exponentiation for odd exponent", () => {
        const arr = cast([2, 3]);
        const result = enc.pow(arr, ops.cast(3));
        const expected = cast([89, 144]);
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
        const expected = cast([5, 8]);
        expect(result).toEqual(expected);
      });
    });

    describe("toValue", () => {
      it("should return the correct value for delta = 0", () => {
        const data = cast([1, 1, 1]);
        const delta = 0;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(32));
      });

      it("should return the correct value for delta = -1", () => {
        const data = cast([1, 1, 1]);
        const delta = -1;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(20));
      });

      it("should return the correct value for delta = -2", () => {
        const data = cast([1, 1, 1]);
        const delta = -2;
        const terms = castTerms([4, 5, 6]);
        expect(enc.toValue(data, delta, terms)).toBe(ops.cast(10));
      });

      it("should throw OutOfBoundsError for too small delta", () => {
        const data = cast([1, 1, 1]);
        const invalidDelta = -3;
        expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw OutOfBoundsError for too large delta", () => {
        const data = cast([1, 1, 1]);
        const invalidDelta = 1;
        expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
      });

      it("should throw DimensionError when terms length > data length", () => {
        const data = cast([1, 1, 1]);
        const terms = castTerms([4, 5, 6, 7]);
        expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
      });

      it("should return correct value when no terms given", () => {
        const data = cast([2, 3, 5]);
        expect(enc.toValue(data, 0, undefined)).toBe(ops.cast(5));
        expect(enc.toValue(data, -1, undefined)).toBe(ops.cast(3));
        expect(enc.toValue(data, -2, undefined)).toBe(ops.cast(2));
      });

      it("should return correct value when terms given", () => {
        const data = cast([2, 3, 5]);
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
