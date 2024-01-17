import { SafeNumOps } from "../../ops";
import { Getter } from "../../type/getter";
import { SumEncoding } from "../encoding";
import { KPowerGetter } from "../getter";

export class Kbonacci implements Getter<number, number> {
  public K: Readonly<number>;
  private customs: number[];
  private getter: KPowerGetter<number, number>;

  constructor(K: number, customs?: number[], cached = true) {
    const ops = new SafeNumOps();
    const encoding = new SumEncoding(ops);
    this.K = K;
    this.customs = customs ?? [];
    this.getter = new KPowerGetter(K, ops, ops, encoding, customs, cached);
  }

  get(index: number): number {
    return this.getter.get(index);
  }

  getCached(): boolean {
    return this.getter.getCached();
  }

  getCustoms(): number[] {
    return this.customs;
  }

  setCached(value: boolean): void {
    this.getter.setCached(value);
  }
}
