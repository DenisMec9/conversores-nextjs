'use client';

import { useState } from "react";

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const converterParaFahrenheit = () => {
    const valor = parseFloat(celsius);
    if (!isNaN(valor)) {
      setFahrenheit(((valor * 9) / 5 + 32).toFixed(2));
    }
  };

  const converterParaCelsius = () => {
    const valor = parseFloat(fahrenheit);
    if (!isNaN(valor)) {
      setCelsius((((valor - 32) * 5) / 9).toFixed(2));
    }
  };

  const limpar = () => {
    setCelsius("");
    setFahrenheit("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Conversor de Temperatura</h1>
      <div className="space-y-4">
        <div>
          <label>Graus Celsius (°C):</label>
          <input
            type="number"
            className="ml-2 p-1 border"
            value={celsius}
            onChange={(e) => setCelsius(e.target.value)}
            onBlur={converterParaFahrenheit}
          />
        </div>
        <div>
          <label>Graus Fahrenheit (°F):</label>
          <input
            type="number"
            className="ml-2 p-1 border"
            value={fahrenheit}
            onChange={(e) => setFahrenheit(e.target.value)}
            onBlur={converterParaCelsius}
          />
        </div>
        <button onClick={limpar} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Limpar
        </button>
      </div>
    </div>
  );
}
