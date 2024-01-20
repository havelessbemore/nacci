import { Generator } from "./generator";
import { GenConfig } from "./genConfig";
export declare class KPowerGen<K, V> implements Generator<K, V> {
    private cached;
    private customs;
    private encoding;
    private indexOps;
    private isStd;
    private _K;
    private neg;
    private pos;
    private v0;
    private valueOps;
    private zero;
    constructor(K: number, config: GenConfig<K, V, unknown>);
    get K(): number;
    get(N: K): V;
    getCached(): boolean;
    getCustoms(): V[];
    setCached(value: boolean): void;
    setCustoms(customs?: V[]): void;
}
