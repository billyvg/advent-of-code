import { findManhattanDistance } from "./findManhattanDistance.js";

export default async function main(input) {
  const value = findManhattanDistance(
    ...input.split("\n").map(paths => paths.split(","))
  );
  return value;
}
