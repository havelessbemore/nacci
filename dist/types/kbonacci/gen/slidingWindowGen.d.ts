import { Generator } from "./generator";
import { GenConfig } from "./genConfig";
export declare class SlidingWindowGen<K, V> implements Generator<K, V> {
    private delta;
    private indexOps;
    private _K;
    private minN;
    private next;
    private valueOps;
    private values;
    constructor(K: number, config: GenConfig<K, V, never>);
    get K(): number;
    get(N: K): V;
    private forward;
    private reverse;
}
