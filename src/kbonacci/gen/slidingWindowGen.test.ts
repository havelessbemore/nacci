import { run } from "./tester";
import { SlidingWindowGen } from "./slidingWindowGen";
import { BigOps } from "../../ops/bigOps";
import { SafeNumOps } from "../../ops/safeNumOps";

const ops = [new BigOps(), new SafeNumOps()];

for (const indexOps of ops) {
  for (const valueOps of ops) {
    run<unknown, unknown>(
      SlidingWindowGen.name,
      indexOps,
      valueOps,
      (K, indexOps, valueOps, customs?: unknown[]) => {
        return new SlidingWindowGen(K, { customs, indexOps, valueOps });
      }
    );
  }
}
