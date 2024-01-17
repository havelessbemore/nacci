import { SAFE_MAX, SAFE_MIN } from "../globals";
import { OutOfBoundsError } from "./outOfBoundsError";

export class UnsafeError extends OutOfBoundsError {
  constructor(actual: number) {
    super(actual, SAFE_MIN, SAFE_MAX, "value", "Unsafe value");
  }
}
