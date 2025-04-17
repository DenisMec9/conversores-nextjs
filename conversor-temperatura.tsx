import { useState } from "react";

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCelsius(val);
    setFahrenheit(val ? ((parseFloat(val) * 9/5) + 32).toFixed(2) : "");
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFahrenheit(val);
    setCelsius(val ? ((parseFloat(val) - 32) * 5/9).toFixed(2) : "");
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Conversor ºC ↔ ºF</h1>
      <div className="flex flex-col space-y-4 max-w-sm">
        <input type="number" value={celsius} onChange={handleCelsiusChange} placeholder="Celsius" className="p-2 border rounded"/>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} placeholder="Fahrenheit" className="p-2 border rounded"/>
      </div>
    </main>
  )
}
