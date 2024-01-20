import { Ops } from "../../ops/ops";
import { Generator } from "./generator";
export declare function run<K, V>(name: string, indexOps: Ops<K>, valueOps: Ops<V>, ctor: (K: number, indexOps: Ops<K>, valueOps: Ops<V>, customs?: V[]) => Generator<K, V>): void;
