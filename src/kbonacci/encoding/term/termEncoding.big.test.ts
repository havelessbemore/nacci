import { beforeAll, describe, expect, it, test } from "vitest";

import { OutOfBoundsError } from "../../../error/outOfBoundsError";
import { DimensionError } from "../../../error/dimensionError";
import { BigOps } from "../../../ops/bigOps";
import { TermEncoding } from "./termEncoding";

describe("Term Encoding + Big", () => {
  let enc: TermEncoding<bigint>;

  beforeAll(() => {
    const ops = new BigOps();
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
      expect(enc.genK(1)).toEqual([1n]);
      expect(enc.genK(2)).toEqual([1n, 1n]);
      expect(enc.genK(3)).toEqual([1n, 1n, 2n]);
      expect(enc.genK(4)).toEqual([1n, 1n, 2n, 4n]);
      expect(enc.genK(5)).toEqual([1n, 1n, 2n, 4n, 8n]);
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
      expect(enc.genNegK(2)).toEqual([2n, -1n]);
      expect(enc.genNegK(3)).toEqual([2n, 0n, -1n]);
      expect(enc.genNegK(4)).toEqual([2n, 0n, 0n, -1n]);
      expect(enc.genNegK(5)).toEqual([2n, 0n, 0n, 0n, -1n]);
    });
  });

  describe("genZero", () => {
    test("generates empty matrix for N = 0", () => {
      const result = enc.genZero(0);
      expect(result).toEqual([]);
    });

    test("generates identity matrix for N = 1", () => {
      const result = enc.genZero(1);
      expect(result).toEqual([1n]);
    });

    test("generates identity matrix of even size", () => {
      const result = enc.genZero(4);
      const expected = [1n, 0n, 0n, 0n];
      expect(result).toEqual(expected);
    });

    test("generates identity matrix of odd size", () => {
      const result = enc.genZero(3);
      const expected = [1n, 0n, 0n];
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
      expect(result).toEqual([1n]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genOne(4);
      const expected = [0n, 0n, 0n, 1n];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genOne(3);
      const expected = [0n, 0n, 1n];
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
      expect(result).toEqual([1n]);
    });

    test("generates relation matrix of even size", () => {
      const result = enc.genNegOne(4);
      const expected = [-1n, 1n, 0n, 0n];
      expect(result).toEqual(expected);
    });

    test("generates relation matrix of odd size", () => {
      const result = enc.genNegOne(3);
      const expected = [-1n, 1n, 0n];
      expect(result).toEqual(expected);
    });

    test("throws error if matrix size is negative", () => {
      expect(() => enc.genNegOne(-1)).toThrowError();
    });
  });

  describe("shift", () => {
    it("should throw OutOfBoundsError for too small delta", () => {
      const A = [1n, 1n, 1n];
      const invalidDelta = -3;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const A = [1n, 1n, 1n];
      const invalidDelta = 1;
      expect(() => enc.shift(A, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should return a correctly shifted array for valid deltas", () => {
      const A = [4n, 7n, 13n];
      expect(enc.shift(A, 0)).toEqual([4n, 7n, 13n]);
      expect(enc.shift(A, -1)).toEqual([2n, 4n, 7n]);
      expect(enc.shift(A, -2)).toEqual([1n, 2n, 4n]);
    });
  });

  describe("times", () => {
    test("multiplies two encoded matrices of even length", () => {
      const A = [1n, 2n];
      const B = [3n, 4n];
      const result = enc.times(A, B);
      const expected = [11n, 18n];
      expect(result).toEqual(expected);
    });

    test("multiplies two encoded matrices of odd length", () => {
      const A = [1n, 2n, 3n];
      const B = [4n, 5n, 6n];
      const result = enc.times(A, B);
      const expected = [21n, 41n, 73n];
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
      const expected = [1424n, 2304n];
      expect(result).toEqual(expected);
    });

    test("calculates matrix exponentiation for odd exponent", () => {
      const arr = [2n, 3n];
      const result = enc.pow(arr, 3n);
      const expected = [89n, 144n];
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
      const expected = [5n, 8n];
      expect(result).toEqual(expected);
    });
  });

  describe("toValue", () => {
    it("should return the correct value for delta = 0", () => {
      const data = [1n, 1n, 1n];
      const delta = 0;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(32n);
    });

    it("should return the correct value for delta = -1", () => {
      const data = [1n, 1n, 1n];
      const delta = -1;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(20n);
    });

    it("should return the correct value for delta = -2", () => {
      const data = [1n, 1n, 1n];
      const delta = -2;
      const terms = [4n, 5n, 6n];
      expect(enc.toValue(data, delta, terms)).toBe(10n);
    });

    it("should throw OutOfBoundsError for too small delta", () => {
      const data = [1n, 1n, 1n];
      const invalidDelta = -3;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw OutOfBoundsError for too large delta", () => {
      const data = [1n, 1n, 1n];
      const invalidDelta = 1;
      expect(() => enc.toValue(data, invalidDelta)).toThrow(OutOfBoundsError);
    });

    it("should throw DimensionError when terms length < data length", () => {
      const data = [1n, 1n, 1n];
      const terms = [4n, 5n];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });

    it("should throw DimensionError when terms length > data length", () => {
      const data = [1n, 1n, 1n];
      const terms = [4n, 5n, 6n, 7n];
      expect(() => enc.toValue(data, 0, terms)).toThrow(DimensionError);
    });
  });
});
