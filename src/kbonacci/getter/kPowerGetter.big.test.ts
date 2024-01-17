import { run } from "./tester";
import { KPowerGetter } from "./kPowerGetter";
import { BigOps } from "../../ops/bigOps";
import { MatrixEncoding } from "../encoding/matrix/matrixEncoding";
import { RevSumEncoding } from "../encoding/revSum/revSumEncoding";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { TermEncoding } from "../encoding/term/termEncoding";

(() => {
  const indexOps = new BigOps();
  const valueOps = new BigOps();
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: bigint[]) => {
      const encoding = new MatrixEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: bigint[]) => {
      const encoding = new RevSumEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: bigint[]) => {
      const encoding = new SumEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    KPowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: bigint[]) => {
      const encoding = new TermEncoding(valueOps);
      return new KPowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
})();
