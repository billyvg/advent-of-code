// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module,
// take its mass, divide by three, round down, and subtract 2.
export function calculateFuelForMass(mass) {
  return mass >= 6 ? Math.floor(mass / 3) - 2 : 0;
}
