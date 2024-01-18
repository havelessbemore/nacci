import { Generator } from "./generator";
import { Ops } from "../../ops/ops";
import { getSum } from "../../utils/array";
import { tryK, tryNumTerms } from "../../utils/try";
import { Powers } from "../../utils/powers";
import { Encoding } from "../encoding/encoding";
import { GenConfig } from "./genConfig";

export class KPowerGen<K, V> implements Generator<K, V> {
  private cached: boolean;
  private customs: V[];
  private encoding: Encoding<V, unknown>;
  private indexOps: Ops<K>;
  private isStd: boolean;
  private _K: number;
  private neg: Powers<K, unknown>;
  private pos: Powers<K, unknown>;
  private v0: V;
  private valueOps: Ops<V>;
  private zero: unknown;

  constructor(K: number, config: GenConfig<K, V, unknown>) {
    tryK(K);

    const cached = config.cached ?? true;
    const customs = config.customs ?? [];
    const encoding = config.encoding;
    const indexOps = config.indexOps ?? config.ops;
    const valueOps = config.valueOps ?? config.ops;
    if (encoding == null) {
      throw new TypeError(`Missing encoding`);
    }
    if (indexOps == null) {
      throw new TypeError(`Missing index operations`);
    }
    if (valueOps == null) {
      throw new TypeError(`Missing value operations`);
    }

    this.cached = cached;
    this.customs = customs;
    this.encoding = encoding;
    this.indexOps = indexOps;
    this.isStd = false;
    this._K = K;
    this.neg = new Powers(encoding.genNegK(K), indexOps, encoding, cached);
    this.pos = new Powers(encoding.genK(K), indexOps, encoding, cached);
    this.zero = encoding.genZero(K);
    this.v0 = encoding.toValue(this.zero, 0);
    this.valueOps = valueOps;
    this.setCustoms(customs);
  }

  get K(): number {
    return this._K;
  }

  get(N: K): V {
    const iOps = this.indexOps;

    const T = iOps.cast(this.customs.length - 1);
    if (iOps.sign(N) >= 0 && iOps.smallerEq(N, T)) {
      return this.customs[iOps.toNumber(N)];
    }

    let data: unknown;
    let delta: K;

    N = iOps.minus(N, T);
    const K = iOps.cast(this.K);
    if (iOps.sign(N) > 0) {
      const mod = iOps.mod(iOps.minus1(N), K);
      delta = iOps.minus1(K);
      N = iOps.trunc(iOps.dividedBy(N, K));
      N = iOps.equal(mod, delta) ? N : iOps.plus1(N);
      delta = iOps.plus(iOps.negative(delta), mod);
      data = this.pos.get(N);
    } else if (iOps.larger(N, iOps.negative(K))) {
      delta = N;
      data = this.zero;
    } else {
      delta = iOps.mod(N, K);
      N = iOps.negative(N);
      N = iOps.trunc(iOps.dividedBy(N, K));
      data = this.neg.get(N);
    }

    const customs = this.isStd ? undefined : this.customs;
    return this.encoding.toValue(data, iOps.toNumber(delta), customs);
  }

  getCached(): boolean {
    return this.cached;
  }

  getCustoms(): V[] {
    return this.customs;
  }

  setCached(value: boolean): void {
    this.cached = value;
    this.neg.setCached(value);
    this.pos.setCached(value);
  }

  setCustoms(customs?: V[]): void {
    const vOps = this.valueOps;
    if (customs == null || customs.length < 1) {
      this.isStd = true;
      this.customs = [this.v0];
      return;
    }
    const K = this.K;
    this.isStd = false;
    tryNumTerms(K, customs);
    customs = Array.from(customs);
    if (customs.length < K) {
      let value: V = getSum(customs, vOps)!;
      for (let i = K - customs.length; i > 0; --i) {
        customs.push(value);
        value = vOps.plus(value, value);
      }
    }
    this.customs = customs;
  }
}
