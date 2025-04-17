import { useState } from "react";

export default function ConversorDistancia() {
  const [metros, setMetros] = useState("");
  const [pes, setPes] = useState("");
  const [polegadas, setPolegadas] = useState("");

  const handleMetrosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setMetros(val);
    const m = parseFloat(val);
    if (!isNaN(m)) {
      setPes((m * 3.28084).toFixed(2));
      setPolegadas((m * 39.3701).toFixed(2));
    } else {
      setPes("");
      setPolegadas("");
    }
  };

  const handlePesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPes(val);
    const p = parseFloat(val);
    if (!isNaN(p)) {
      const m = p / 3.28084;
      setMetros(m.toFixed(2));
      setPolegadas((m * 39.3701).toFixed(2));
    } else {
      setMetros("");
      setPolegadas("");
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Conversor Metros ↔ Pés ↔ Polegadas</h1>
      <div className="flex flex-col space-y-4 max-w-sm">
        <input type="number" value={metros} onChange={handleMetrosChange} placeholder="Metros" className="p-2 border rounded"/>
        <input type="number" value={pes} onChange={handlePesChange} placeholder="Pés" className="p-2 border rounded"/>
        <input type="text" value={polegadas} placeholder="Polegadas" readOnly className="p-2 border rounded bg-gray-100"/>
      </div>
    </main>
  )
}
