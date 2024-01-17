export class IntegerError extends TypeError {
  constructor(value: unknown, label = "Value") {
    super(`Not an integer. ${label}: ${String(value)}`);
  }
}
