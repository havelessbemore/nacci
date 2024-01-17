import { BigOps } from "../../ops/bigOps";
import { BaseKbonacci } from "./baseKbonacci";

export class BigKbonacci extends BaseKbonacci<bigint, bigint> {
  constructor(K: number, customs?: bigint[]) {
    const ops = new BigOps();
    super(K, ops, ops, customs);
  }
}
