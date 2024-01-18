import { padStart } from "../../utils/array";
import { tryK, tryNumTerms } from "../../utils/try";
import { Generator } from "./generator";
import { Ops } from "../../ops/ops";
import { getSum } from "../../utils/array";
import { GenConfig } from "./genConfig";

export class SlidingWindowGen<K, V> implements Generator<K, V> {
  private delta: number;
  private indexOps: Ops<K>;
  private _K: number;
  private minN: K;
  private next: V;
  private valueOps: Ops<V>;
  private values: V[];

  constructor(K: number, config: GenConfig<K, V, never>) {
    tryK(K);

    let customs = config.customs ?? [];
    const indexOps = config.indexOps ?? config.ops;
    const valueOps = config.valueOps ?? config.ops;
    if (indexOps == null) {
      throw new TypeError(`Missing index operations`);
    }
    if (valueOps == null) {
      throw new TypeError(`Missing value operations`);
    }

    const _0 = valueOps.cast(0);
    if (customs == null || customs.length < 1) {
      const _1 = valueOps.cast(1);
      customs = [_0, _1];
    } else {
      tryNumTerms(K, customs);
    }

    // Initialize properties
    this.delta = 0;
    this.indexOps = indexOps;
    this._K = K;
    this.valueOps = valueOps;
    this.minN = indexOps.minus(indexOps.cast(customs.length), indexOps.cast(K));
    this.next = getSum(customs, valueOps) ?? _0;
    this.values = Array.from(customs);
    padStart(this.values, K, _0);
  }

  get K(): number {
    return this._K;
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
    const i = ops.plus(ops.minus(N, this.minN), ops.cast(this.delta));
    return this.values[ops.toNumber(i) % this.K];
  }

  private forward(i: K): void {
    const iOps = this.indexOps;
    const vOps = this.valueOps;

    while (iOps.sign(i) > 0) {
      const temp = this.values[this.delta];
      this.values[this.delta] = this.next;
      this.next = vOps.plus(this.next, vOps.minus(this.next, temp));
      this.delta = (this.delta + 1) % this.K;
      this.minN = iOps.plus1(this.minN);
      i = iOps.minus1(i);
    }
  }

  private reverse(i: K): void {
    const iOps = this.indexOps;
    const vOps = this.valueOps;

    while (iOps.sign(i) > 0) {
      const delta = (this.delta - 1 + this.K) % this.K;
      const value = this.values[delta];
      const newValue = vOps.plus(vOps.minus(value, this.next), value);
      this.minN = iOps.minus1(this.minN);
      this.next = value;
      this.delta = delta;
      this.values[delta] = newValue;
      i = iOps.minus1(i);
    }
  }
}
