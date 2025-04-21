import { useState } from "react";

export default function ConversorDolar() {
  const cotacaoDolar = 5.16; // cotação fixa de 14/04/2025
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  const converterParaDolar = () => {
    const valor = parseFloat(real);
    if (!isNaN(valor)) setDolar((valor / cotacaoDolar).toFixed(2));
  };

  const converterParaReal = () => {
    const valor = parseFloat(dolar);
    if (!isNaN(valor)) setReal((valor * cotacaoDolar).toFixed(2));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Conversor de Dólar</h1>
      <div className="space-y-4">
        <div>
          <label>Reais (R$):</label>
          <input
            className="ml-2 p-1 border"
            value={real}
            onChange={(e) => setReal(e.target.value)}
            onBlur={converterParaDolar}
          />
        </div>
        <div>
          <label>Dólares (US$):</label>
          <input
            className="ml-2 p-1 border"
            value={dolar}
            onChange={(e) => setDolar(e.target.value)}
            onBlur={converterParaReal}
          />
        </div>
        <p className="text-sm text-gray-500">Cotação usada: R$ {cotacaoDolar} (14/04/2025)</p>
      </div>
    </div>
  );
}
