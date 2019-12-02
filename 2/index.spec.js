import { parser } from "./parser";

describe("Day 2", function() {
  it("part 1 examples", function() {
    // 1,0,0,0,99 becomes 2,0,0,0,99 (1 + 1 = 2).
    // 2,3,0,3,99 becomes 2,3,0,6,99 (3 * 2 = 6).
    // 2,4,4,5,99,0 becomes 2,4,4,5,99,9801 (99 * 99 = 9801).
    // 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99.
    expect(parser("1,0,0,0,99")).toBe("2,0,0,0,99");
    expect(parser("2,3,0,3,99")).toBe("2,3,0,6,99");
    expect(parser("2,4,4,5,99")).toBe("2,4,4,5,99,9801");
    expect(parser("1,1,1,4,99,5,6,0,99")).toBe("30,1,1,4,2,5,6,0,99");
  });
});
