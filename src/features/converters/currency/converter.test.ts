import { describe, expect, it } from "vitest";
import { brlToUsd, usdToBrl } from "./converter";

describe("currency converter", () => {
  it("converte BRL para USD", () => {
    expect(brlToUsd(10, 5)).toBe(2);
  });

  it("converte USD para BRL", () => {
    expect(usdToBrl(2, 5)).toBe(10);
  });
});
