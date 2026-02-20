export function metersToFeet(meters: number): number {
  return meters * 3.28084;
}

export function metersToInches(meters: number): number {
  return meters * 39.3701;
}

export function formatFixed(value: number, digits = 2): string {
  return Number.isFinite(value) ? value.toFixed(digits) : "";
}
