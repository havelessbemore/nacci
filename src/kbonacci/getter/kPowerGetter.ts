import { Getter } from "../../type/getter";
import { NumericOps } from "../../ops/numericOps";
import { getSum } from "../../utils/array";
import { tryK, tryNumTerms } from "../../utils/try";
import { Powers } from "../../utils/powers";
import { Encoding } from "../encoding/encoding";

export class KPowerGetter<K, V> implements Getter<K, V> {
  private customs: V[];
  private isStd: boolean;
  private neg: Powers<K, unknown>;
  private pos: Powers<K, unknown>;
  private v0: V;
  private zero: unknown;

  constructor(
    private K: number,
    private indexOps: NumericOps<K>,
    private valueOps: NumericOps<V>,
    private encoding: Encoding<V, unknown>,
    customs?: V[]
  ) {
    tryK(K);
    this.customs = [];
    this.isStd = false;
    this.neg = new Powers(encoding.genNegK(K), indexOps, encoding, true);
    this.pos = new Powers(encoding.genK(K), indexOps, encoding, true);
    this.zero = encoding.genZero(K);
    this.v0 = encoding.toValue(this.zero, 0);
    this.setCustoms(customs);
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

  getCustoms(): V[] {
    return this.customs;
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
