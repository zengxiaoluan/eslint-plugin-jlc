import { execSync } from "node:child_process";
import { kill } from "node:process";

export function getChangedFiles() {
  let files = execSync("git diff HEAD --name-only --diff-filter=d")
    .toString()
    .split("\n")
    .filter((_) => _);

  return files;
}

async function main() {
  let files = await getChangedFiles().filter(
    (_) => _ !== "README.md" && _ !== "CONTRIBUTING.md"
  );
  for (const file of files) {
    if (/[A-Z]/.test(file)) {
      console.log(file);
      kill(-1);
    }
  }
}

main();
