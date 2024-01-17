import { run } from "./tester";
import { SlidingWindowGetter } from "./slidingWindowGetter";
import { BigOps } from "../../ops/bigOps";

(() => {
  const indexOps = new BigOps();
  const valueOps = new BigOps();
  run(
    SlidingWindowGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: bigint[]) => {
      return new SlidingWindowGetter(K, indexOps, valueOps, customs);
    }
  );
})();
