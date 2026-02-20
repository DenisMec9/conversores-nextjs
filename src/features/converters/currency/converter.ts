export function brlToUsd(brl: number, exchangeRate: number): number {
  return brl / exchangeRate;
}

export function usdToBrl(usd: number, exchangeRate: number): number {
  return usd * exchangeRate;
}

export function formatCurrency(value: number): string {
  return Number.isFinite(value) ? value.toFixed(2) : "";
}
