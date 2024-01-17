import { Kbonacci } from "./kbonacci";

export class Fibonacci extends Kbonacci {
  constructor(customs?: number[], cached?: boolean) {
    super(2, customs, cached);
  }
}
