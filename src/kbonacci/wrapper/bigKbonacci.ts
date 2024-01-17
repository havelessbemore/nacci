import { BigOps } from "../../ops/bigOps";
import { Getter } from "../../type/getter";
import { SumEncoding } from "../encoding";
import { KPowerGetter } from "../getter";

export class BigKbonacci implements Getter<bigint, bigint> {
  public K: Readonly<number>;
  private customs: bigint[];
  private getter: Getter<bigint, bigint>;

  constructor(K: number, customs?: bigint[]) {
    const ops = new BigOps();
    const encoding = new SumEncoding(ops);
    this.K = K;
    this.customs = customs ?? [];
    this.getter = new KPowerGetter(K, ops, ops, encoding, customs);
  }

  get(index: bigint): bigint {
    return this.getter.get(index);
  }

  getCustoms(): bigint[] {
    return this.customs;
  }
}
