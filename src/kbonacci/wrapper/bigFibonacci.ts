import { BigKbonacci } from "./bigKbonacci";

export class BigFibonacci extends BigKbonacci {
  constructor(customs?: bigint[]) {
    super(2, customs);
  }
}
