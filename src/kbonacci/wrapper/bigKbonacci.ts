import { BigOps } from "../../ops/bigOps";
import { SumEncoding } from "../encoding";
import { Generator } from "../gen";
import { KPowerGen } from "../gen/kPowerGen";

export class BigKbonacci implements Generator<bigint, bigint> {
  private customs: bigint[];
  private gen: KPowerGen<bigint, bigint>;

  constructor(K: number, customs?: bigint[], cached = true) {
    const ops = new BigOps();
    const encoding = new SumEncoding(ops);
    this.customs = customs ?? [];
    this.gen = new KPowerGen(K, { cached, customs, encoding, ops });
  }

  get K(): number {
    return this.gen.K;
  }

  get(index: bigint): bigint {
    return this.gen.get(index);
  }

  getCached(): boolean {
    return this.gen.getCached();
  }

  getCustoms(): bigint[] {
    return this.customs;
  }

  setCached(value: boolean): void {
    this.gen.setCached(value);
  }
}
