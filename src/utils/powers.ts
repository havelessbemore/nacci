import { OutOfBoundsError } from "../error/outOfBoundsError";
import { Getter } from "../type/getter";

export interface KeyOps<T> {
  cast(value: unknown): T;
  equal(a: T, b: T): boolean;
  half(a: T): T;
  isOdd(a: T): boolean;
  sign(a: T): number;
  trunc(a: T): T;
}

export interface ValueOps<T> {
  times(a: T, b: T): T;
  square(a: T): T;
}

export class Powers<K, V> implements Getter<K, V> {
  protected cached: boolean;
  protected keyOps: KeyOps<K>;
  protected valOps: ValueOps<V>;
  protected pows: V[];

  constructor(value: V, keyOps: KeyOps<K>, valOps: ValueOps<V>, cached = true) {
    this.cached = cached;
    this.keyOps = keyOps;
    this.pows = [value];
    this.valOps = valOps;
  }

  get size(): number {
    return this.pows.length;
  }

  clear(): void {
    this.pows.length = 1;
  }

  get(N: K): V {
    const keyOps = this.keyOps;
    const valOps = this.valOps;

    const pows = this.cached ? this.pows : [this.pows[0]];
    let value: V | undefined = undefined;

    for (let i = 0; keyOps.sign(N) > 0; ++i) {
      if (pows[i] == null) {
        pows[i] = valOps.square(pows[i - 1]);
      }
      if (keyOps.isOdd(N)) {
        if (value == null) {
          value = pows[i];
        } else {
          value = valOps.times(value, pows[i]);
        }
      }
      N = keyOps.trunc(keyOps.half(N));
    }

    if (value == null) {
      throw new OutOfBoundsError(N, keyOps.cast(1));
    }

    return value;
  }

  getCached(): boolean {
    return this.cached;
  }

  setCached(cached: boolean): void {
    this.cached = cached;
    if (!cached) {
      this.clear();
    }
  }

  setValue(value: V): void {
    if (value !== this.pows[0]) {
      this.pows = [value];
      this.clear();
    }
  }
}
