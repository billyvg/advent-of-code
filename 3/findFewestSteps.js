import { plotWire } from "./plotWire.js";

// Given a list of wire paths in the form of `<direction><length>`,
// return a data structure of every coordinate where the wire exists
function createWire(wire) {
  const data = new Map([[0, new Map([[0, 1]])]]);

  plotWire(wire, (x, y, steps) => {
    data.set(
      x,
      data.has(x) ? data.get(x).set(y, steps) : new Map([[y, steps]])
    );
  });

  return data;
}

export function findFewestSteps(wire1, wire2) {
  const initialWireMap = createWire(wire1);

  let smallestDistance;

  plotWire(wire2, (x, y, steps) => {
    // Ignore starting coordinate
    if (x === 0 && y === 0) {
      return;
    }

    // look for existing wire points
    if (initialWireMap.has(x) && initialWireMap.get(x).has(y)) {
      let distance = initialWireMap.get(x).get(y) + steps;
      if (
        typeof smallestDistance === "undefined" ||
        distance < smallestDistance
      ) {
        smallestDistance = distance;
      }
    }
  });

  return smallestDistance;
}
