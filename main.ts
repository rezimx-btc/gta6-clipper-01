import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The grader hands this program two directories through the environment:
// where this repository lives, and where the result has to land.
const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

// Copy the video address over. Nothing is printed when it works;
// any failure is reported by leaving with a non-zero status.
try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, target);
} catch {
  process.exit(1);
}
