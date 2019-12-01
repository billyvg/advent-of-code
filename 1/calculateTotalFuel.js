import { calculateFuelForMass } from "./calculateFuelForMass.js";

// Fuel itself requires fuel just like a module - take its mass, divide by three,
// round down, and subtract 2.
//
// However, that fuel also requires fuel, and that fuel requires fuel, and so on.
// Any mass that would require negative fuel should instead be treated as if it
// requires zero fuel; the remaining mass, if any, is instead handled by wishing
// really hard, which has no mass and is outside the scope of this calculation.
export function calculateTotalFuel(mass) {
  const initial = calculateFuelForMass(mass);
  let calc = initial;
  let total = initial;
  while ((calc = calculateFuelForMass(calc))) {
    if (calc <= 0) {
      return;
    }
    total += calc;
  }
  return total;
}
