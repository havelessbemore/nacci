import { SafeNumOps } from "../../ops/safeNumOps";
import { Generator } from "../gen/generator";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { PowerGen } from "../gen/powerGen";

export class Kbonacci implements Generator<number, number> {
  private customs: number[];
  private gen: PowerGen<number, number>;

  constructor(K: number, customs?: number[], cached = true) {
    const ops = new SafeNumOps();
    const encoding = new SumEncoding(ops);
    this.customs = customs ?? [];
    this.gen = new PowerGen(K, { cached, customs, encoding, ops });
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
