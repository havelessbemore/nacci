import { SafeNumOps } from "../../ops";
import { Getter } from "../../type/getter";
import { SumEncoding } from "../encoding";
import { KPowerGetter } from "../getter";

export class Kbonacci implements Getter<number, number> {
  public K: Readonly<number>;
  private customs: number[];
  private getter: Getter<number, number>;

  constructor(K: number, customs?: number[]) {
    const ops = new SafeNumOps();
    const encoding = new SumEncoding(ops);
    this.K = K;
    this.customs = customs ?? [];
    this.getter = new KPowerGetter(K, ops, ops, encoding, customs);
  }

  get(index: number): number {
    return this.getter.get(index);
  }

  getCustoms(): number[] {
    return this.customs;
  }
}
