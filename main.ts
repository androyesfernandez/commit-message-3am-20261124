// The 3 AM Commit Message — make.fun micro entry
// Writes one commit message to /output/entry.txt.
// No network, no dependencies. Run with: node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The entry: a 3 AM commit message, deadpan and self-inflicted.
const ENTRY =
  "fix: deleted the database to fix the database, currently restoring from a screenshot I took";

// Deliverable limits for program/v1: 1-200 characters, UTF-8, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
// A commit message is one line: reject any embedded newline outright,
// so a bad constant can never smuggle a second line into entry.txt.
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

mkdirSync(OUT_DIR, { recursive: true });

// No trailing newline: the file is exactly the message, byte for byte.
writeFileSync(OUT_FILE, ENTRY, "utf8");

// Read back and verify byte-identity with the constant.
const roundTrip = readFileSync(OUT_FILE, "utf8");
if (roundTrip !== ENTRY) {
  throw new Error("verification failed: /output/entry.txt does not match the entry");
}

const bytes = Buffer.byteLength(ENTRY, "utf8");
const sha256 = createHash("sha256").update(ENTRY, "utf8").digest("hex");

console.log(`chars: ${ENTRY.length}`);
console.log(`bytes: ${bytes}`);
console.log(`sha256: ${sha256}`);
console.log(`wrote ${OUT_FILE}`);
