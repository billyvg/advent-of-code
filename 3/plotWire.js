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

export function plotWire(wire, callback) {
  wire.reduce(
    ([lastPoint, iteration], wirePath) => {
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

          callback(...[...coordinates, iteration + i + 1]);
        });

      return [endingPoint, iteration + length];
    },
    [[0, 0], 0]
  );
}
