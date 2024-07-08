import { Ops } from '../ops/ops';

export declare function castArray<T>(array: unknown[], ops: Ops<T>): T[];
export declare function copy<T>(A: T[], B: T[], target?: number, start?: number, end?: number): T[];
export declare function getSum<T>(arr: T[], ops: Ops<T>): T | undefined;
export declare function padStart<T>(array: T[], targetLength: number, padValue: T): void;
