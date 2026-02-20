"use client";

import React, { ChangeEvent, useState } from "react";
import { PageShell } from "@/components/ui/page-shell";
import { brlToUsd, formatCurrency, usdToBrl } from "@/features/converters/currency/converter";
import { parseNumericInput } from "@/lib/number-input";

type CurrencyConverterProps = {
  exchangeRate: number;
  fetchedAt: string;
};

export function CurrencyConverter({ exchangeRate, fetchedAt }: CurrencyConverterProps) {
  const [brl, setBrl] = useState("");
  const [usd, setUsd] = useState("");
  const [brlError, setBrlError] = useState("");
  const [usdError, setUsdError] = useState("");

  function handleBrlChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setBrl(value);
    setBrlError("");
    setUsdError("");

    if (!value.trim()) {
      setUsd("");
      return;
    }

    const parsed = parseNumericInput(value);
    if (!parsed.ok) {
      setBrlError(parsed.error);
      setUsd("");
      return;
    }

    setUsd(formatCurrency(brlToUsd(parsed.value, exchangeRate)));
  }

  function handleUsdChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUsd(value);
    setUsdError("");
    setBrlError("");

    if (!value.trim()) {
      setBrl("");
      return;
    }

    const parsed = parseNumericInput(value);
    if (!parsed.ok) {
      setUsdError(parsed.error);
      setBrl("");
      return;
    }

    setBrl(formatCurrency(usdToBrl(parsed.value, exchangeRate)));
  }

  return (
    <PageShell
      title="Conversor de Moeda"
      description={`Cotação usada: 1 USD = ${exchangeRate.toFixed(4)} BRL (atualizada em ${fetchedAt})`}
    >
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-muted)]">Real (BRL)</span>
          <input
            type="text"
            inputMode="decimal"
            value={brl}
            onChange={handleBrlChange}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white p-3"
            placeholder="Digite o valor em R$"
            aria-invalid={Boolean(brlError)}
          />
          {brlError ? <p className="mt-1 text-sm text-red-700">{brlError}</p> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-muted)]">Dólar (USD)</span>
          <input
            type="text"
            inputMode="decimal"
            value={usd}
            onChange={handleUsdChange}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white p-3"
            placeholder="Digite o valor em US$"
            aria-invalid={Boolean(usdError)}
          />
          {usdError ? <p className="mt-1 text-sm text-red-700">{usdError}</p> : null}
        </label>
      </div>
    </PageShell>
  );
}
