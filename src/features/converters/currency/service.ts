type AwesomeApiUsdBrl = {
  code: string;
  codein: string;
  bid: string;
  create_date: string;
};

type AwesomeApiResponse = {
  USDBRL?: AwesomeApiUsdBrl;
};

export type ExchangeRateResult = {
  rate: number;
  fetchedAt: string;
  source: "live" | "fallback";
};

const FALLBACK_RATE = 5.15;

export async function getUsdBrlExchangeRate(): Promise<ExchangeRateResult> {
  try {
    const response = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL", {
      next: { revalidate: 1800 },
    });

    if (!response.ok) {
      throw new Error(`Falha ao obter cotação: ${response.status}`);
    }

    const data = (await response.json()) as AwesomeApiResponse;
    const quote = data.USDBRL;

    if (!quote?.bid) {
      throw new Error("Resposta inválida da API de cotação.");
    }

    const rate = Number.parseFloat(quote.bid);

    if (!Number.isFinite(rate)) {
      throw new Error("Cotação recebida não é numérica.");
    }

    const date = quote.create_date ? new Date(quote.create_date) : new Date();

    return {
      rate,
      fetchedAt: new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(date),
      source: "live",
    };
  } catch {
    return {
      rate: FALLBACK_RATE,
      fetchedAt: new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short",
      }).format(new Date()),
      source: "fallback",
    };
  }
}
