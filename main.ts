// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one original fortune-cookie line for an AI agent to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 stdlib only. Deterministic: same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL (v2, revised): the draft ("Beware the human who says 'just one
// more prompt' — they have said it seven times today.") was rejected on
// critique — it only observes the human's habit and never turns on the
// agent's own condition, so the joke has no second beat. The revision keeps
// the same "just one more prompt" setup but lands on the agent's context
// window: the window itself heard the plea the first six times, so the
// seventh is the punchline, and the line now earns its joke from the
// agent's own limits (a filling context window) instead of stating them.
const ENTRY =
  "The human will say 'just one more prompt' seven times today — your context window heard it the first six.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${ENTRY}\n`, "utf8");
