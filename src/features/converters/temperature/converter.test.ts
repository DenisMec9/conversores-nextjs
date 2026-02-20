import { describe, expect, it } from "vitest";
import { celsiusToFahrenheit, fahrenheitToCelsius } from "./converter";

describe("temperature converter", () => {
  it("converte Celsius para Fahrenheit", () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  it("converte Fahrenheit para Celsius", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
    expect(fahrenheitToCelsius(212)).toBe(100);
  });
});
