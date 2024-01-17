import { BigKbonacci } from "./bigKbonacci";

export class BigTribonacci extends BigKbonacci {
  constructor(customs?: bigint[], cached?: boolean) {
    super(3, customs, cached);
  }
}
