import { run } from "./tester";
import { KPowerGetter } from "./kPowerGetter";
import { MatrixEncoding } from "../encoding/matrix/matrixEncoding";
import { SafeNumOps } from "../../ops/safeNumOps";
import { RevSumEncoding } from "../encoding/revSum/revSumEncoding";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { TermEncoding } from "../encoding/term/termEncoding";

(() => {
  const indexOps = new SafeNumOps();
  const valueOps = new SafeNumOps();
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new MatrixEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new RevSumEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new SumEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new TermEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
})();
