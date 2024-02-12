import { SAFE_MIN, SAFE_MAX } from "../globals";

export function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

export function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function isInteger(value: unknown): value is number {
  return Number.isInteger(value);
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}

export function isSafeNumber(value: number): boolean {
  return value >= SAFE_MIN && value <= SAFE_MAX;
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}
