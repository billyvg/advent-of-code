import { promises } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

import { calculateTotalFuel } from "./calculateTotalFuel.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { readFile } = promises;

async function main() {
  const content = await readFile(resolve(__dirname, "./input"));
  const inputs = content
    .toString()
    .split("\n")
    .map(Number);

  const value = inputs.reduce((acc, mass) => acc + calculateTotalFuel(mass), 0);

  console.log(value);

  return value;
}

main();
