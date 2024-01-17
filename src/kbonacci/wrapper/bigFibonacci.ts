import { BigKbonacci } from "./bigKbonacci";

export class BigFibonacci extends BigKbonacci {
  constructor(customs?: bigint[], cached?: boolean) {
    super(2, customs, cached);
  }
}
