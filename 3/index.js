import { findFewestSteps } from "./findFewestSteps.js";
import { findManhattanDistance } from "./findManhattanDistance.js";

export default async function main(input) {
  const parsedInput = input.split("\n").map(paths => paths.split(","));
  const value = findManhattanDistance(...parsedInput);
  const value2 = findFewestSteps(...parsedInput);
  return [value, value2];
}
