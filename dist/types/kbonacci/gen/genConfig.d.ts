import { Ops } from "../../ops";
import { Encoding } from "../encoding";
export interface GenConfig<I, V = I, D = unknown> {
    cached?: boolean;
    customs?: V[];
    encoding?: Encoding<V, D>;
    ops?: Ops<I & V>;
    indexOps?: Ops<I>;
    valueOps?: Ops<V>;
}
