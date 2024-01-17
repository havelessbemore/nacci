import { run } from "./tester";
import { PowerGetter } from "./powerGetter";
import { MatrixEncoding } from "../encoding/matrix/matrixEncoding";
import { SafeNumOps } from "../../ops/safeNumOps";
import { RevSumEncoding } from "../encoding/revSum/revSumEncoding";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { TermEncoding } from "../encoding/term/termEncoding";

(() => {
  const indexOps = new SafeNumOps();
  const valueOps = new SafeNumOps();
  run(
    PowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new MatrixEncoding(valueOps);
      return new PowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    PowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new RevSumEncoding(valueOps);
      return new PowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    PowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new SumEncoding(valueOps);
      return new PowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
  run(
    PowerGetter.name,
    indexOps,
    valueOps,
    (K, indexOps, valueOps, customs?: number[]) => {
      const encoding = new TermEncoding(valueOps);
      return new PowerGetter(K, indexOps, valueOps, encoding, customs);
    }
  );
})();
