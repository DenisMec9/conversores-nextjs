import { describe, expect, it } from "vitest";
import { metersToFeet, metersToInches } from "./converter";

describe("distance converter", () => {
  it("converte metros para pés", () => {
    expect(metersToFeet(1)).toBeCloseTo(3.28084, 5);
  });

  it("converte metros para polegadas", () => {
    expect(metersToInches(1)).toBeCloseTo(39.3701, 4);
  });
});
