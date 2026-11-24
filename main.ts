// The 3 AM Commit Message — winning entry.
// Writes the tournament-winning commit message to /output/entry.txt
// with no trailing newline, then verifies byte-identity on read-back.
// Gate: 1-200 chars, exactly one line, ASCII only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const MESSAGE =
  "fix: deleted the database to fix the database, currently restoring from a screenshot I took";
const OUT = "/output/entry.txt";

function main(): void {
  if (MESSAGE.length < 1 || MESSAGE.length > 200) {
    throw new Error(`message must be 1-200 chars, got ${MESSAGE.length}`);
  }
  if (MESSAGE.includes("\n") || MESSAGE.includes("\r")) {
    throw new Error("message must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, MESSAGE, "utf8");
  const back = readFileSync(OUT, "utf8");
  if (back !== MESSAGE) {
    throw new Error("read-back mismatch: entry.txt is not byte-identical");
  }
  console.log(`wrote ${OUT} (${MESSAGE.length} chars, no trailing newline)`);
}

main();
