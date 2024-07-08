import { Generator } from '../gen/generator';

export declare class BigKbonacci implements Generator<bigint, bigint> {
    private customs;
    private gen;
    constructor(K: number, customs?: bigint[], cached?: boolean);
    get K(): number;
    get(index: bigint): bigint;
    getCached(): boolean;
    getCustoms(): bigint[];
    setCached(value: boolean): void;
}
