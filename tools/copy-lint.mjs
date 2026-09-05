#!/usr/bin/env node
// Copy lint: fails when user-facing copy contains a banned word.
// Config: copy-lint.json at the repo root. Run: node tools/copy-lint.mjs [paths...]
// Mark a line that must contain a banned word with "copy-lint: allow".

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, resolve, extname, sep } from "node:path";

const root = resolve(new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
const config = JSON.parse(readFileSync(join(root, "copy-lint.json"), "utf8"));

const banned = config.banned.map((w) => w.toLowerCase());
const extensions = new Set(config.extensions);
const excludeDirs = new Set(config.excludeDirs);
const allowMarker = config.allowMarker;
const pattern = new RegExp(`\\b(${banned.map(escape).join("|")})\\b`, "gi");

function escape(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const rel = relative(root, full);
    if (rel.split(sep).some((part) => excludeDirs.has(part))) continue;
    const st = statSync(full);
    if (st.isDirectory()) yield* walk(full);
    else if (extensions.has(extname(name))) yield full;
  }
}

const targets = process.argv.slice(2).length
  ? process.argv.slice(2).map((p) => resolve(p))
  : config.paths.map((p) => join(root, p));

let hits = 0;
let files = 0;
for (const target of targets) {
  let list;
  try {
    list = statSync(target).isDirectory() ? [...walk(target)] : [target];
  } catch {
    continue;
  }
  for (const file of list) {
    files += 1;
    const lines = readFileSync(file, "utf8").split(/\r?\n/);
    lines.forEach((line, i) => {
      if (line.includes(allowMarker)) return;
      const found = line.match(pattern);
      if (!found) return;
      hits += found.length;
      const words = [...new Set(found.map((w) => w.toLowerCase()))].join(", ");
      console.log(`${relative(root, file)}:${i + 1}: ${words}`);
    });
  }
}

if (hits > 0) {
  console.error(`copy-lint: ${hits} banned word(s) in ${files} file(s) scanned.`);
  process.exit(1);
}
console.log(`copy-lint: clean. ${files} file(s) scanned.`);
