import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TemperatureConverter } from "./temperature-converter";

describe("TemperatureConverter", () => {
  it("converte Celsius para Fahrenheit", () => {
    render(<TemperatureConverter />);

    fireEvent.change(screen.getByLabelText("Celsius (°C)"), { target: { value: "100" } });

    expect(screen.getByLabelText("Fahrenheit (°F)")).toHaveValue("212.00");
  });

  it("mostra erro em valor inválido", () => {
    render(<TemperatureConverter />);

    fireEvent.change(screen.getByLabelText("Celsius (°C)"), { target: { value: "abc" } });

    expect(screen.getByText("Digite um número válido.")).toBeInTheDocument();
  });
});
