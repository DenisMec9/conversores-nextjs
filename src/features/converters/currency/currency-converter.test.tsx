import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CurrencyConverter } from "./currency-converter";

describe("CurrencyConverter", () => {
  it("converte BRL para USD", () => {
    render(<CurrencyConverter exchangeRate={5} fetchedAt="20/02/2026 21:00" />);

    fireEvent.change(screen.getByLabelText("Real (BRL)"), { target: { value: "10" } });

    expect(screen.getByLabelText("Dólar (USD)")).toHaveValue("2.00");
  });

  it("mostra erro para entrada inválida", () => {
    render(<CurrencyConverter exchangeRate={5} fetchedAt="20/02/2026 21:00" />);

    fireEvent.change(screen.getByLabelText("Real (BRL)"), { target: { value: "xyz" } });

    expect(screen.getByText("Digite um número válido.")).toBeInTheDocument();
  });
});
