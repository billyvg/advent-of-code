import { calculateTotalFuel } from "./calculateTotalFuel.js";

export default async function main(inputs) {
  inputs = inputs.split("\n").map(Number);

  return inputs.reduce((acc, mass) => acc + calculateTotalFuel(mass), 0);
}

main();
