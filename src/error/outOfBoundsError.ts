export class OutOfBoundsError extends RangeError {
  constructor(
    actual: unknown,
    min?: unknown,
    max?: unknown,
    label = "index",
    msg = "Out of bounds"
  ) {
    const message = [msg];
    if (min != null || max != null) {
      message.push(`. Expected`);
      if (min != null) {
        message.push(` ${String(min)} <=`);
      }
      message.push(` ${label}`);
      if (max != null) {
        message.push(` <= ${String(max)}`);
      }
    }
    message.push(`. ${label}: ${String(actual)}`);
    super(message.join(""));
  }
}
