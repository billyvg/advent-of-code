#!/usr/bin/env node --no-warnings

import { fileURLToPath } from "url";
import { promises } from "fs";
import { resolve, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const { stat, readFile } = promises;

async function main() {
  let day;

  try {
    day = process.argv[2];
    await stat(resolve(__dirname, day));
  } catch (err) {
    console.error(`Invalid day: ${day}`);
    process.exit(1);
  }

  try {
    const content = await readFile(resolve(__dirname, day, "./input"));
    const input = content.toString().trim();

    const module = await import(resolve(__dirname, day, "index.js"));

    console.log(`Running solution for day ${day}`);

    const value = await module.default(input);
    console.log(value);
  } catch (err) {
    console.error(err);
  }
}

main();
