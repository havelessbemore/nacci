import { NumericOps } from "../ops/numericOps";

export function copy<T>(
  A: T[],
  B: T[],
  target = 0,
  start = 0,
  end = A.length
): T[] {
  if (A === B) {
    return A.copyWithin(target, start, end);
  }
  if (target < 0) {
    target = Math.max(0, B.length + target);
  }
  if (start < 0) {
    start = Math.max(0, A.length + start);
  }
  if (end < 0) {
    end = Math.max(0, A.length + end);
  }
  end = start + Math.max(0, Math.min(B.length - target, end - start));
  while (start < end) {
    B[target++] = A[start++];
  }
  return B;
}

export function getSum<T>(arr: T[], ops: NumericOps<T>): T | undefined {
  const N = arr.length;
  if (N < 1) {
    return undefined;
  }
  let value = arr[0];
  for (let i = 1; i < N; ++i) {
    value = ops.plus(value, arr[i]);
  }
  return value;
}

export function padStart<T>(
  array: T[],
  targetLength: number,
  padValue: T
): void {
  if (targetLength <= array.length) {
    return;
  }
  const N = array.length;
  const i = targetLength - N;
  array.length = targetLength;
  array.fill(padValue, N, i);
  array.copyWithin(i, 0, N);
  array.fill(padValue, 0, Math.min(i, N));
}
