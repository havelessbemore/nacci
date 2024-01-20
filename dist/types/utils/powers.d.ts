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
export declare class Powers<K, V> {
    protected cached: boolean;
    protected keyOps: KeyOps<K>;
    protected valOps: ValueOps<V>;
    protected pows: V[];
    constructor(value: V, keyOps: KeyOps<K>, valOps: ValueOps<V>, cached?: boolean);
    get size(): number;
    clear(): void;
    get(N: K): V;
    getCached(): boolean;
    setCached(cached: boolean): void;
    setValue(value: V): void;
}
