import { CurrencyConverter } from "@/features/converters/currency/currency-converter";
import { getUsdBrlExchangeRate } from "@/features/converters/currency/service";

export default async function MoedaPage() {
  const exchange = await getUsdBrlExchangeRate();

  return (
    <div className="space-y-3">
      {exchange.source === "fallback" ? (
        <p className="rounded-xl border border-amber-300 bg-amber-50 p-3 text-sm text-amber-800">
          Não foi possível consultar a cotação em tempo real; usando valor de fallback.
        </p>
      ) : null}
      <CurrencyConverter exchangeRate={exchange.rate} fetchedAt={exchange.fetchedAt} />
    </div>
  );
}
