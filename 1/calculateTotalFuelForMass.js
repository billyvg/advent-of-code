import { calculateFuelForMass } from "./calculateFuelForMass.js";

// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module,
// take its mass, divide by three, round down, and subtract 2.
export function calculateTotalFuel(masses) {
  return masses.reduce((acc, mass) => acc + calculateFuelForMass(mass), 0);
}
