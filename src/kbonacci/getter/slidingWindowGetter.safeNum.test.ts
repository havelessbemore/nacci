import { run } from "./tester";
import { SlidingWindowGetter } from "./slidingWindowGetter";
import { SafeNumOps } from "../../ops/safeNumOps";

(() => {
  const indexOps = new SafeNumOps();
  const valueOps = new SafeNumOps();
  run(
    SlidingWindowGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      return new SlidingWindowGetter(K, indexOps, valueOps, customs);
    }
  );
})();
