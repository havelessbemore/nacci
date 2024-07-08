import { Generator } from '../gen/generator';

export declare class Kbonacci implements Generator<number, number> {
    private customs;
    private gen;
    constructor(K: number, customs?: number[], cached?: boolean);
    get K(): number;
    get(index: number): number;
    getCached(): boolean;
    getCustoms(): number[];
    setCached(value: boolean): void;
}
