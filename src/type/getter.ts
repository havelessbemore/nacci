export interface Getter<K, V> {
  get(key: K): V;
}
