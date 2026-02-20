import { z } from "zod";

const normalizedNumberSchema = z
  .string()
  .trim()
  .min(1, "Digite um número válido.")
  .transform((value) => value.replace(",", "."))
  .refine((value) => /^[-+]?(?:\d+\.?\d*|\d*\.?\d+)$/.test(value), "Digite um número válido.")
  .transform((value) => Number.parseFloat(value))
  .refine((value) => Number.isFinite(value), "Digite um número válido.");

type NumericParseResult =
  | { ok: true; value: number }
  | { ok: false; error: string };

export function parseNumericInput(value: string): NumericParseResult {
  const parsed = normalizedNumberSchema.safeParse(value);

  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message ?? "Digite um número válido." };
  }

  return { ok: true, value: parsed.data };
}
