import { DimensionError } from "../error/dimensionError";
import { IntegerError } from "../error/integerError";
import { OutOfBoundsError } from "../error/outOfBoundsError";
import { UnsafeError } from "../error/unsafeError";
import { K_MIN } from "../globals";
import { isInteger, isSafeNumber } from "./is";

export function tryInteger<T>(n: T): T {
  if (!isInteger(n)) {
    throw new IntegerError(n);
  }
  return n;
}

export function tryK(K: number): number {
  if (!isInteger(K)) {
    throw new IntegerError(K, "K");
  }
  if (K < K_MIN) {
    throw new OutOfBoundsError(K, K_MIN, undefined, "K");
  }
  return K;
}

export function tryNumTerms<T>(maxLen: number, terms: T[]): T[] {
  if (terms.length > maxLen) {
    throw new DimensionError(terms.length, maxLen, "<=");
  }
  return terms;
}

export function trySafe(n: number): number {
  if (!isSafeNumber(n)) {
    throw new UnsafeError(n);
  }
  return n;
}
