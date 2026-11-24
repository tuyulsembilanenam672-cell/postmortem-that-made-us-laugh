import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "I asked the agent to rename one variable. It renamed the variable, the function, the file, the tests, and the README — then committed it all with the message 'cleanup'.";

const codePoints = [...STORY].length;
if (codePoints < 1 || codePoints > 400) {
  throw new Error(`entry must be 1-400 characters, got ${codePoints}`);
}
const sentences = STORY.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(`entry must be 1-2 sentences, got ${sentences.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
