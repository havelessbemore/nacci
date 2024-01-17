import { NumericOps } from "../../ops/numericOps";
import { getSum } from "../../utils/array";
import { Getter } from "../../type/getter";
import { tryK, tryNumTerms } from "../../utils/try";
import { Powers } from "../../utils/powers";
import { Encoding } from "../encoding/encoding";

export class PowerGetter<K, V> implements Getter<K, V> {
  private customs: V[];
  private isStd: boolean;
  private neg: Powers<K, unknown>;
  private pos: Powers<K, unknown>;
  private v0: V;

  constructor(
    private K: number,
    private indexOps: NumericOps<K>,
    private valueOps: NumericOps<V>,
    private encoding: Encoding<V, unknown>,
    customs?: V[],
    private cached = true
  ) {
    tryK(K);
    const one = encoding.genOne(K);
    this.customs = [];
    this.isStd = false;
    this.neg = new Powers(encoding.genNegOne(K), indexOps, encoding, cached);
    this.pos = new Powers(one, indexOps, encoding, cached);
    this.v0 = encoding.toValue(one, -1);
    this.setCustoms(customs);
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
