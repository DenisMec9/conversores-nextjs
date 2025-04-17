import { useState } from "react";

export default function ConversorDolar() {
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  const taxa = 5.20;

  const handleRealChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setReal(valor);
    setDolar(valor ? (parseFloat(valor) / taxa).toFixed(2) : "");
  };

  const handleDolarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setDolar(valor);
    setReal(valor ? (parseFloat(valor) * taxa).toFixed(2) : "");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Conversor Dólar ↔ Real</h1>
      <div className="flex flex-col space-y-4 max-w-sm">
        <input type="number" value={real} onChange={handleRealChange} placeholder="Reais" className="p-2 border rounded"/>
        <input type="number" value={dolar} onChange={handleDolarChange} placeholder="Dólares" className="p-2 border rounded"/>
      </div>
    </main>
  )
}
