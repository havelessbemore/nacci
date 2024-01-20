export interface Generator<K, V> {
    K: Readonly<number>;
    get(key: K): V;
}
