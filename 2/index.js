import { fileURLToPath } from "url";
import { promises } from "fs";
import { resolve, dirname } from "path";

import { parser } from "./parser.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { readFile } = promises;

async function main() {
  const content = await readFile(resolve(__dirname, "./input"));
  const inputs = content.toString().trim();

  const value = console.log(parser(inputs));
  return value;
}

main();
