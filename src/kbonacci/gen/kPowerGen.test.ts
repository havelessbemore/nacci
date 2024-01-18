import { run } from "./tester";
import { KPowerGen } from "./kPowerGen";
import { BigOps } from "../../ops/bigOps";
import { NumOps } from "../../ops/numOps";
import { SafeNumOps } from "../../ops/safeNumOps";
import { MatrixEncoding } from "../encoding/matrix/matrixEncoding";
import { RevSumEncoding } from "../encoding/revSum/revSumEncoding";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { TermEncoding } from "../encoding/term/termEncoding";

(() => {
  const ops = [new BigOps(), new NumOps(), new SafeNumOps()];
  const encodingClasses = [
    MatrixEncoding,
    RevSumEncoding,
    SumEncoding,
    TermEncoding,
  ];

  for (const indexOps of ops) {
    for (const valueOps of ops) {
      for (const encodingCls of encodingClasses) {
        run<unknown, unknown>(
          KPowerGen.name,
          indexOps,
          valueOps,
          (K, indexOps, valueOps, customs?: unknown[]) => {
            const encoding = new encodingCls(valueOps);
            return new KPowerGen(K, { customs, encoding, indexOps, valueOps });
          }
        );
      }
    }
  }
})();
