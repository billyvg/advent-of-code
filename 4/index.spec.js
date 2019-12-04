import { isValidPassword, isValidPasswordStrict } from "./isValidPassword.js";

describe("Day 4", function() {
  it("part 1 examples", function() {
    expect(isValidPassword(111111)).toBe(true);
    expect(isValidPassword(223450)).toBe(false);
    expect(isValidPassword(123789)).toBe(false);
  });

  it("part 2 examples", function() {
    expect(isValidPasswordStrict(111111)).toBe(false);
    expect(isValidPasswordStrict(123444)).toBe(false);
    expect(isValidPasswordStrict(111122)).toBe(true);
  });
});
