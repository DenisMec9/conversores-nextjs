"use client";

import React, { ChangeEvent, useState } from "react";
import { PageShell } from "@/components/ui/page-shell";
import { formatFixed, metersToFeet, metersToInches } from "@/features/converters/distance/converter";
import { parseNumericInput } from "@/lib/number-input";

export function DistanceConverter() {
  const [meters, setMeters] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [metersError, setMetersError] = useState("");

  function handleMetersChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setMeters(value);
    setMetersError("");

    if (!value.trim()) {
      setFeet("");
      setInches("");
      return;
    }

    const parsed = parseNumericInput(value);
    if (!parsed.ok) {
      setMetersError(parsed.error);
      setFeet("");
      setInches("");
      return;
    }

    setFeet(formatFixed(metersToFeet(parsed.value)));
    setInches(formatFixed(metersToInches(parsed.value)));
  }

  return (
    <PageShell title="Conversor de Distância" description="Converte metros para pés e polegadas.">
      <div className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-[var(--color-muted)]">Metros (m)</span>
          <input
            type="text"
            inputMode="decimal"
            value={meters}
            onChange={handleMetersChange}
            className="w-full rounded-xl border border-[var(--color-border)] bg-white p-3"
            placeholder="Digite o valor em metros"
            aria-invalid={Boolean(metersError)}
          />
          {metersError ? <p className="mt-1 text-sm text-red-700">{metersError}</p> : null}
        </label>

        <div className="grid gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-4 sm:grid-cols-2">
          <p className="text-sm text-[var(--color-muted)]">
            <strong className="block text-2xl text-[var(--color-ink)]">{feet || "-"}</strong>
            pés
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            <strong className="block text-2xl text-[var(--color-ink)]">{inches || "-"}</strong>
            polegadas
          </p>
        </div>
      </div>
    </PageShell>
  );
}
