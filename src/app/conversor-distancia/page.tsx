'use client';

import { useState } from 'react';

export default function ConversorDistancia() {
  const [metros, setMetros] = useState('');
  const [pes, setPes] = useState('');
  const [polegadas, setPolegadas] = useState('');

  const handleMetroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMetros(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setPes((parsed * 3.28084).toFixed(2));
      setPolegadas((parsed * 39.3701).toFixed(2));
    } else {
      setPes('');
      setPolegadas('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Conversor de Distância</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-medium">Metros (m):</label>
          <input
            type="number"
            value={metros}
            onChange={handleMetroChange}
            className="border p-2 rounded w-full"
            placeholder="Digite em metros"
          />
        </div>
        <div>
          <p><strong>{pes}</strong> pés</p>
          <p><strong>{polegadas}</strong> polegadas</p>
        </div>
      </div>
    </div>
  );
}
