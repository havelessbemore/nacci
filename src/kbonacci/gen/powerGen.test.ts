import { run } from "./tester";
import { PowerGen } from "./powerGen";
import { BigOps } from "../../ops/bigOps";
import { MatrixEncoding } from "../encoding/matrix/matrixEncoding";
import { RevSumEncoding } from "../encoding/revSum/revSumEncoding";
import { SumEncoding } from "../encoding/sum/sumEncoding";
import { TermEncoding } from "../encoding/term/termEncoding";
import { SafeNumOps } from "../../ops/safeNumOps";

const ops = [new BigOps(), new SafeNumOps()];
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
        PowerGen.name,
        indexOps,
        valueOps,
        (K, indexOps, valueOps, customs?: unknown[]) => {
          const encoding = new encodingCls(valueOps);
          return new PowerGen(K, { customs, encoding, indexOps, valueOps });
        },
      );
    }
  }
}
