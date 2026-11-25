// Dad Joke Showdown — one dad joke, written to /output/entry.txt.
// The joke is the whole entry: it must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my son I'd teach him to tell dad jokes. He said, 'Dad, that's a pretty low bar.' I said, 'Exactly — now limbo under it.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
