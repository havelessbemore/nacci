import { padStart } from "../../utils/array";
import { tryK, tryNumTerms } from "../../utils/try";
import { Getter } from "../../type/getter";
import { NumericOps } from "../../ops/numericOps";
import { getSum } from "../../utils/array";

export class SlidingWindowGetter<K, V> implements Getter<K, V> {
  private K: number;
  private maxV: number;
  private minN: K;
  private next: V;
  private values: V[];

  constructor(
    K: number,
    private indexOps: NumericOps<K>,
    private valueOps: NumericOps<V>,
    customs?: V[]
  ) {
    tryK(K);

    const _0 = valueOps.cast(0);
    if (customs == null || customs.length < 1) {
      const _1 = valueOps.cast(1);
      customs = [_0, _1];
    } else {
      tryNumTerms(K, customs);
    }

    // Initialize properties
    this.K = K;
    this.maxV = 0;
    this.minN = indexOps.minus(indexOps.cast(customs.length), indexOps.cast(K));
    this.next = getSum(customs, valueOps) ?? _0;
    this.values = Array.from(customs);
    padStart(this.values, K, _0);
  }

  get(N: K): V {
    // Shift window
    const ops = this.indexOps;
    if (ops.smaller(N, this.minN)) {
      this.reverse(ops.minus(this.minN, N));
    } else {
      const maxN = ops.plus(this.minN, ops.cast(this.K));
      if (ops.largerEq(N, maxN)) {
        this.forward(ops.plus1(ops.minus(N, maxN)));
      }
    }

    // Return value
    const i = ops.plus(ops.minus(N, this.minN), ops.cast(this.maxV));
    return this.values[ops.toNumber(i) % this.K];
  }

  private forward(i: K): void {
    const iOps = this.indexOps;
    const vOps = this.valueOps;

    while (iOps.sign(i) > 0) {
      const temp = this.values[this.maxV];
      this.values[this.maxV] = this.next;
      this.next = vOps.plus(this.next, vOps.minus(this.next, temp));
      this.maxV = (this.maxV + 1) % this.K;
      this.minN = iOps.plus1(this.minN);
      i = iOps.minus1(i);
    }
  }

  private reverse(i: K): void {
    const iOps = this.indexOps;
    const vOps = this.valueOps;

    while (iOps.sign(i) > 0) {
      const maxV = (this.maxV - 1 + this.K) % this.K;
      const value = this.values[maxV];
      const newValue = vOps.plus(vOps.minus(value, this.next), value);
      this.minN = iOps.minus1(this.minN);
      this.next = value;
      this.maxV = maxV;
      this.values[maxV] = newValue;
      i = iOps.minus1(i);
    }
  }
}
