"use client";

import React, { ChangeEvent, useState } from "react";
import { PageShell } from "@/components/ui/page-shell";
import { celsiusToFahrenheit, fahrenheitToCelsius, formatFixed } from "@/features/converters/temperature/converter";
import { parseNumericInput } from "@/lib/number-input";

export function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [celsiusError, setCelsiusError] = useState("");
  const [fahrenheitError, setFahrenheitError] = useState("");

  function handleCelsiusChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setCelsius(value);
    setCelsiusError("");
    setFahrenheitError("");

    if (!value.trim()) {
      setFahrenheit("");
      return;
    }

    const parsed = parseNumericInput(value);
    if (!parsed.ok) {
      setCelsiusError(parsed.error);
      setFahrenheit("");
      return;
    }

    setFahrenheit(formatFixed(celsiusToFahrenheit(parsed.value)));
  }

  function handleFahrenheitChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setFahrenheit(value);
    setFahrenheitError("");
    setCelsiusError("");

    if (!value.trim()) {
      setCelsius("");
      return;
    }

    const parsed = parseNumericInput(value);
    if (!parsed.ok) {
      setFahrenheitError(parsed.error);
      setCelsius("");
      return;
    }

    setCelsius(formatFixed(fahrenheitToCelsius(parsed.value)));
  }

  return (
    <PageShell title="Conversor de Temperatura" description="Digite em qualquer campo para converter automaticamente.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-muted)]">Celsius (°C)</span>
          <input
            type="text"
            inputMode="decimal"
            value={celsius}
            onChange={handleCelsiusChange}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white p-3"
            placeholder="Digite o valor em °C"
            aria-invalid={Boolean(celsiusError)}
          />
          {celsiusError ? <p className="mt-1 text-sm text-red-700">{celsiusError}</p> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-muted)]">Fahrenheit (°F)</span>
          <input
            type="text"
            inputMode="decimal"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white p-3"
            placeholder="Digite o valor em °F"
            aria-invalid={Boolean(fahrenheitError)}
          />
          {fahrenheitError ? <p className="mt-1 text-sm text-red-700">{fahrenheitError}</p> : null}
        </label>
      </div>
    </PageShell>
  );
}
