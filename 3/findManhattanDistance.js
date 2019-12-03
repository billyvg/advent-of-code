// Return tuple of (axis, direction, length)
// where axis is "x" or "y"
const xAxis = ["R", "L"];
const positiveDirection = ["U", "R"];

function parsePath(path) {
  return [
    xAxis.includes(path[0]) ? "x" : "y",
    positiveDirection.includes(path[0]) ? 1 : -1,
    Number(path.slice(1))
  ];
}

function plotWire(wire, callback) {
  wire.reduce(
    (lastPoint, wirePath) => {
      const [axis, direction, length] = parsePath(wirePath);
      const [initialX, initialY] = lastPoint;

      let endingPoint =
        axis === "x"
          ? [initialX + length * direction, initialY]
          : [initialX, initialY + length * direction];

      Array(length)
        .fill()
        .forEach((_, i) => {
          const coordinates =
            axis === "x"
              ? [initialX + i * direction + direction, initialY]
              : [initialX, initialY + i * direction + direction];

          callback(...coordinates);
        });

      return endingPoint;
    },
    [0, 0]
  );
}

// Given a list of wire paths in the form of `<direction><length>`,
// return a data structure of every coordinate where the wire exists
function createWire(wire) {
  const data = new Map([[0, new Map([[0, 1]])]]);

  plotWire(wire, (x, y) => {
    data.set(x, data.has(x) ? data.get(x).set(y, 1) : new Map([[y, 1]]));
  });

  return data;
}

export function findManhattanDistance(wire1, wire2) {
  const initialWireMap = createWire(wire1);

  let smallestDistance;

  plotWire(wire2, (x, y) => {
    // Ignore starting coordinate
    if (x === 0 && y === 0) {
      return;
    }

    // look for existing wire points
    if (initialWireMap.has(x) && initialWireMap.get(x).has(y)) {
      let distance = Math.abs(x) + Math.abs(y);
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
