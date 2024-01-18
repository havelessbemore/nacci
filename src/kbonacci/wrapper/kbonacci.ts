import { SafeNumOps } from "../../ops";
import { Generator } from "../gen/generator";
import { SumEncoding } from "../encoding";
import { KPowerGen } from "../gen";

export class Kbonacci implements Generator<number, number> {
  private customs: number[];
  private gen: KPowerGen<number, number>;

  constructor(K: number, customs?: number[], cached = true) {
    const ops = new SafeNumOps();
    const encoding = new SumEncoding(ops);
    this.customs = customs ?? [];
    this.gen = new KPowerGen(K, { cached, customs, encoding, ops });
  }

  get K(): number {
    return this.gen.K;
  }

  get(index: number): number {
    return this.gen.get(index);
  }

  getCached(): boolean {
    return this.gen.getCached();
  }

  getCustoms(): number[] {
    return this.customs;
  }

  setCached(value: boolean): void {
    this.gen.setCached(value);
  }
}
