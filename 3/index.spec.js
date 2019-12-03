import { findManhattanDistance } from "./findManhattanDistance.js";
import { findFewestSteps } from "./findFewestSteps.js";

function parse(input) {
  return input
    .trim()
    .split("\n")
    .map(row => row.split(","));
}

describe("Day 3", function() {
  it("part 1 examples", function() {
    expect(
      findManhattanDistance(["R8", "U5", "L5", "D3"], ["U7", "R6", "D4", "L4"])
    ).toBe(6);

    expect(
      findManhattanDistance(
        ...parse(`R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`)
      )
    ).toBe(159);

    expect(
      findManhattanDistance(
        ...parse(`R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`)
      )
    ).toBe(135);
  });

  it("part 2 examples", function() {
    expect(
      findFewestSteps(["R8", "U5", "L5", "D3"], ["U7", "R6", "D4", "L4"])
    ).toBe(30);

    expect(
      findFewestSteps(
        ...parse(`R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`)
      )
    ).toBe(610);

    expect(
      findFewestSteps(
        ...parse(`R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`)
      )
    ).toBe(410);
  });
});
