'use client';

import { useState } from "react";

export default function ConversorDistancia() {
  const [metros, setMetros] = useState("");
  const [pes, setPes] = useState("");
  const [polegadas, setPolegadas] = useState("");

  const converter = () => {
    const valorMetros = parseFloat(metros);
    if (!isNaN(valorMetros)) {
      setPes((valorMetros * 3.28084).toFixed(2));
      setPolegadas((valorMetros * 39.3701).toFixed(2));
    }
  };

  const limpar = () => {
    setMetros("");
    setPes("");
    setPolegadas("");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Conversor de Distância</h1>
      <div className="space-y-4">
        <div>
          <label>Metros (m):</label>
          <input
            type="number"
            className="ml-2 p-1 border"
            value={metros}
            onChange={(e) => setMetros(e.target.value)}
            onBlur={converter}
          />
        </div>
        <div>
          <p>Pés (ft): <strong>{pes}</strong></p>
          <p>Polegadas (in): <strong>{polegadas}</strong></p>
        </div>
        <button onClick={limpar} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
          Limpar
        </button>
      </div>
    </div>
  );
}
