import { describe, expect, test } from "vitest";

import {
  FIB_NEG,
  FIB_POS,
  HEPTA_POS,
  HEXA_POS,
  LUCAS_NEG,
  LUCAS_POS,
  PENTA_NEG,
  PENTA_POS,
  TETRA_POS,
  TRIB_NEG,
  TRIB_POS,
} from "../../utils/constants";
import { NumericOps } from "../../ops/numericOps";
import { K_MIN } from "../../globals";
import { Getter } from "../../type/getter";
import { BigOps } from "../../ops/bigOps";

function castArray<T>(array: unknown[], ops: NumericOps<T>): T[] {
  const N = array.length;
  const out = new Array<T>(N);
  for (let i = 0; i < N; ++i) {
    out[i] = ops.cast(array[i]);
  }
  return out;
}

export function run<K, V>(
  name: string,
  indexOps: NumericOps<K>,
  valueOps: NumericOps<V>,
  ctor: (
    K: number,
    indexOps: NumericOps<K>,
    valueOps: NumericOps<V>,
    customs?: V[]
  ) => Getter<K, V>
): void {
  describe(name, () => {
    describe("new ()", () => {
      test("should not throw error for valid Ks", () => {
        expect(() => ctor(K_MIN, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(2, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(3, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(10, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(16, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(32, indexOps, valueOps)).not.toThrowError();
        expect(() => ctor(50, indexOps, valueOps)).not.toThrowError();
      });

      test("should not throw error for large Ks", () => {
        if (valueOps instanceof BigOps) {
          expect(() => ctor(64, indexOps, valueOps)).not.toThrowError();
          expect(() => ctor(128, indexOps, valueOps)).not.toThrowError();
          expect(() => ctor(256, indexOps, valueOps)).not.toThrowError();
          expect(() => ctor(512, indexOps, valueOps)).not.toThrowError();
          expect(() => ctor(1024, indexOps, valueOps)).not.toThrowError();
          expect(() => ctor(2048, indexOps, valueOps)).not.toThrowError();
        }
      });

      test("should throw error for invalid Ks", () => {
        expect(() => ctor(K_MIN - 1, indexOps, valueOps)).toThrowError();
        expect(() => ctor(-1, indexOps, valueOps)).toThrowError();
        expect(() => ctor(0, indexOps, valueOps)).toThrowError();
      });

      /*
            test('should not throw error for valid # of terms', () => {
                expect(() => ctor(2, indexOps, valueOps, [])).not.toThrowError();
                expect(() => ctor(2, indexOps, valueOps, [7])).not.toThrowError();
                expect(() => ctor(2, indexOps, valueOps, [7, 9])).not.toThrowError();
                expect(
                    () =>
                        ctor(2, indexOps, valueOps, [
                            Number.MIN_SAFE_INTEGER,
                            Number.MAX_SAFE_INTEGER,
                        ]),
                ).not.toThrowError();
                expect(() => ctor(3, [7, 9, 11])).not.toThrowError();
            });

            test('should throw error for invalid # of terms', () => {
                expect(() => ctor(2, indexOps, valueOps, [7, 9, 11])).toThrowError();
                expect(() => ctor(3, indexOps, valueOps, [7, 9, 11, 15])).toThrowError();
            });
            */
    });

    describe("get method", () => {
      test("should calculate nth terms for K = 2", () => {
        const getter = ctor(2, indexOps, valueOps);
        const values = FIB_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate -nth terms for K = 2", () => {
        const getter = ctor(2, indexOps, valueOps);
        const values = FIB_NEG;
        for (let i = 1; i < values.length; ++i) {
          const k = indexOps.cast(-i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for K = 3", () => {
        const getter = ctor(3, indexOps, valueOps);
        const values = TRIB_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate -nth terms for K = 3", () => {
        const getter = ctor(3, indexOps, valueOps);
        const values = TRIB_NEG;
        for (let i = 1; i < values.length; ++i) {
          const k = indexOps.cast(-i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for K = 4", () => {
        const getter = ctor(4, indexOps, valueOps);
        const values = TETRA_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for K = 5", () => {
        const getter = ctor(5, indexOps, valueOps);
        const values = PENTA_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate -nth terms for K = 5", () => {
        const getter = ctor(5, indexOps, valueOps);
        const values = PENTA_NEG;
        for (let i = 1; i < values.length; ++i) {
          const k = indexOps.cast(-i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for K = 6", () => {
        const getter = ctor(6, indexOps, valueOps);
        const values = HEXA_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for K = 7", () => {
        const getter = ctor(7, indexOps, valueOps);
        const values = HEPTA_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for Lucas sequence", () => {
        const customs = castArray([2, 1], valueOps);
        const getter = ctor(2, indexOps, valueOps, customs);
        const values = LUCAS_POS;
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate -nth terms for Lucas sequence", () => {
        const customs = castArray([2, 1], valueOps);
        const getter = ctor(2, indexOps, valueOps, customs);
        const values = LUCAS_NEG;
        for (let i = 1; i < values.length; ++i) {
          const k = indexOps.cast(-i);
          const v = valueOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for custom initial terms", () => {
        const customs = castArray([1, 2, 3], valueOps);
        const getter = ctor(3, indexOps, valueOps, customs);
        const values = [1, 2, 3, 6, 11, 20, 37, 68, 125, 230, 423];
        const N = values.length;
        for (let i = 0; i < N; ++i) {
          const k = indexOps.cast(i);
          const v = indexOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate -nth terms for custom initial terms", () => {
        const customs = castArray([1, 2, 3], valueOps);
        const getter = ctor(3, indexOps, valueOps, customs);
        const values = [1, 0, 1, 0, -1, 2, -1, -2, 5, -4, -3];
        for (let i = 1; i < values.length; ++i) {
          const k = indexOps.cast(-i);
          const v = indexOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for some custom initial terms", () => {
        const customs = castArray([5, 2], valueOps);
        const getter = ctor(3, indexOps, valueOps, customs);
        const values = [5, 2, 7, 14, 23, 44, 81, 148, 273, 502, 923];
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = indexOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });

      test("should calculate nth terms for few custom initial terms", () => {
        const customs = castArray([4], valueOps);
        const getter = ctor(3, indexOps, valueOps, customs);
        const values = [4, 4, 8, 16, 28, 52, 96, 176, 324, 596, 1096];
        for (let i = 0; i < values.length; ++i) {
          const k = indexOps.cast(i);
          const v = indexOps.cast(values[i]);
          expect(getter.get(k)).toBe(v);
        }
      });
    });
  });
}
