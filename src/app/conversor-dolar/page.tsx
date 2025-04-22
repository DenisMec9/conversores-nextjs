'use client';

import { useState } from 'react';

export default function ConversorDolar() {
  const [real, setReal] = useState('');
  const [dolar, setDolar] = useState('');

  const cotacao = 5.15;

  const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setReal(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setDolar((parsed / cotacao).toFixed(2));
    } else {
      setDolar('');
    }
  };

  const handleDolarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDolar(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setReal((parsed * cotacao).toFixed(2));
    } else {
      setReal('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Conversor de Dólar e Real</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-medium">Real (BRL):</label>
          <input
            type="number"
            value={real}
            onChange={handleRealChange}
            className="border p-2 rounded w-full"
            placeholder="Digite em R$"
          />
        </div>
        <div>
          <label className="block font-medium">Dólar (USD):</label>
          <input
            type="number"
            value={dolar}
            onChange={handleDolarChange}
            className="border p-2 rounded w-full"
            placeholder="Digite em US$"
          />
        </div>
      </div>
    </div>
  );
}
