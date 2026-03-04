// scripts/codegrade-pretest.js
const fs = require("fs");
const path = require("path");

const src = path.join(process.cwd(), "index.html");
const destDir = "/home/codegrade";
const dest = path.join(destDir, "index.html");

try {
  if (!fs.existsSync(src)) process.exit(0);

  try {
    fs.mkdirSync(destDir, { recursive: true });
  } catch {
    // On macOS this path may be blocked; skip silently.
    process.exit(0);
  }

  fs.copyFileSync(src, dest);
} catch {
  // Never fail pretest.
  process.exit(0);
}