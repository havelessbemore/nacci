import { NumericOps } from "../../ops/numericOps";
import { Getter } from "../../type/getter";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { KPowerGetter } from "../getter/kPowerGetter";

export class BaseKbonacci<I, V> implements Getter<I, V> {
  public K: Readonly<number>;
  private customs: V[];
  private getter: Getter<I, V>;

  constructor(
    K: number,
    indexOps: NumericOps<I>,
    valueOps: NumericOps<V>,
    customs?: V[]
  ) {
    const encoding = new SumEncoding(valueOps);
    this.K = K;
    this.customs = customs ?? [];
    this.getter = new KPowerGetter(K, indexOps, valueOps, encoding, customs);
  }

  get(index: I): V {
    return this.getter.get(index);
  }

  getCustoms(): V[] {
    return this.customs;
  }
}
