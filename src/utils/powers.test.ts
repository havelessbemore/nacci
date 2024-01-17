import { beforeAll, describe, expect, it } from "vitest";

import { Powers } from "./powers";
import { NumericOps } from "../ops/numericOps";
import { SafeNumOps } from "../ops/safeNumOps";

describe("Powers", () => {
  let initVal: number;
  let keyOps: NumericOps<number>;
  let valOps: NumericOps<number>;

  beforeAll(() => {
    initVal = 2;
    keyOps = new SafeNumOps();
    valOps = new SafeNumOps();
  });

  it("should initialize correctly", () => {
    const powers = new Powers(initVal, keyOps, valOps);
    expect(powers.getCached()).toBe(true);
    expect(powers.size).toBe(1);
    expect(powers.get(1)).toBe(initVal);
  });

  it("should clear the cache correctly", () => {
    const powers = new Powers(initVal, keyOps, valOps);
    expect(powers.get(2)).toBe(initVal ** 2);
    expect(powers.size).toBe(2);
    powers.clear();
    expect(powers.size).toBe(1);
  });

  it("should handle cached state changes", () => {
    const powers = new Powers(initVal, keyOps, valOps);
    powers.setCached(false);
    expect(powers.getCached()).toBe(false);
    powers.setCached(true);
    expect(powers.getCached()).toBe(true);
  });

  it("should not cache if disabled", () => {
    const powers = new Powers(initVal, keyOps, valOps);
    powers.setCached(false);
    expect(powers.get(2)).toBe(initVal ** 2);
    expect(powers.size).toBe(1);
  });

  it("should update value correctly", () => {
    const newVal = 3;
    const powers = new Powers(initVal, keyOps, valOps);
    expect(powers.get(1)).toBe(initVal);
    powers.setValue(newVal);
    expect(powers.get(1)).toBe(newVal);
  });
});
