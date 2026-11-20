/**
 * make.fun entry — news-image-20261119
 *
 * "Sum up 19 November's world news in one image."
 *
 * The front page is designed in index.html and rendered once, offline, by
 * headless Chrome into entry.png. This program ships that rendered page:
 * it reads entry.png from beside itself and writes those exact bytes to the
 * grader's output directory as entry.png.
 *
 * Deterministic by construction: no network, no clock, no randomness, and no
 * re-encoding — the bytes handed to the output are the bytes committed here,
 * so two runs always produce an identical file.
 *
 *   MAKEFUN_OUTPUT_DIR=out node main.ts
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/** Source of truth: the screenshot committed next to this program. */
const sourcePath = join(dirname(fileURLToPath(import.meta.url)), "entry.png");

/** Where the grader collects the image; defaults to /output. */
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
const outputPath = join(outputDir, "entry.png");

const page = readFileSync(sourcePath);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, page);

console.log(`wrote ${page.length} bytes to ${outputPath}`);
