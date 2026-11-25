import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const emoji = "🧞";
if ([...emoji].length !== 1) {
  throw new Error("entry must contain exactly one emoji");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${emoji}\n`);
