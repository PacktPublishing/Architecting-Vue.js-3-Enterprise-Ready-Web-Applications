import { describe, it, expect } from "vitest";
import { increment } from "../../helpers";

describe("increment", () => {
  it("increments the current number by 1", () => {
    expect(increment(0, 10)).toBe(1);
  });

  it("does not increment the current number over the max", () => {
    expect(increment(10, 10)).toBe(10);
  });

  it("has a default max of 10", () => {
    expect(increment(10)).toBe(10);
  });
});
