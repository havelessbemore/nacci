import { SafeNumOps } from "../../ops/safeNumOps";
import { BaseKbonacci } from "./baseKbonacci";

export class Kbonacci extends BaseKbonacci<number, number> {
  constructor(K: number, customs?: number[]) {
    const ops = new SafeNumOps();
    super(K, ops, ops, customs);
  }
}
