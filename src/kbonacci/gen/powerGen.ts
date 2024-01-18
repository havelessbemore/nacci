import { Ops } from "../../ops/ops";
import { getSum } from "../../utils/array";
import { Generator } from "./generator";
import { tryK, tryNumTerms } from "../../utils/try";
import { Powers } from "../../utils/powers";
import { Encoding } from "../encoding/encoding";
import { GenConfig } from "./genConfig";

export class PowerGen<K, V> implements Generator<K, V> {
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
    this.customs = [];
    this.encoding = encoding;
    this.indexOps = indexOps;
    this.isStd = false;
    this._K = K;
    this.neg = new Powers(encoding.genNegOne(K), indexOps, encoding, cached);
    const one = encoding.genOne(K);
    this.pos = new Powers(one, indexOps, encoding, cached);
    this.v0 = encoding.toValue(one, -1);
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

    N = iOps.minus(N, T);
    const data =
      iOps.sign(N) > 0 ? this.pos.get(N) : this.neg.get(iOps.negative(N));

    const customs = this.isStd ? undefined : this.customs;
    return this.encoding.toValue(data, 0, customs);
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
