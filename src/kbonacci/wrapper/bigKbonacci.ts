import { BigOps } from "../../ops/bigOps";
import { Getter } from "../../type/getter";
import { SumEncoding } from "../encoding";
import { KPowerGetter } from "../getter";

export class BigKbonacci implements Getter<bigint, bigint> {
  public K: Readonly<number>;
  private customs: bigint[];
  private getter: KPowerGetter<bigint, bigint>;

  constructor(K: number, customs?: bigint[], cached = true) {
    const ops = new BigOps();
    const encoding = new SumEncoding(ops);
    this.K = K;
    this.customs = customs ?? [];
    this.getter = new KPowerGetter(K, ops, ops, encoding, customs, cached);
  }

  get(index: bigint): bigint {
    return this.getter.get(index);
  }

  getCached(): boolean {
    return this.getter.getCached();
  }

  getCustoms(): bigint[] {
    return this.customs;
  }

  setCached(value: boolean): void {
    this.getter.setCached(value);
  }
}
