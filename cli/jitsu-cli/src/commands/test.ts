import { run as jest } from "jest-cli";
import { loadPackageJson } from "./shared";
import chalk from "chalk";
import { b } from "../lib/chalk-code-highlight";

export async function test({ dir }: { dir?: string }) {
  const projectDir = dir || process.cwd();

  const packageJson = loadPackageJson(projectDir);

  console.log(`Running tests for ${b(packageJson.name)}`);

  const jestArgs = ["--passWithNoTests", "--projects", projectDir, "--preset", "ts-jest"];

  await jest(jestArgs);
}
