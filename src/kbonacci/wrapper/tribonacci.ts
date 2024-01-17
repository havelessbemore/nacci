import { Kbonacci } from "./kbonacci";

export class Tribonacci extends Kbonacci {
  constructor(customs?: number[], cached?: boolean) {
    super(3, customs, cached);
  }
}
