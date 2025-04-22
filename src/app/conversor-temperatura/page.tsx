'use client';

import { useState } from 'react';

export default function ConversorTemperatura() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setFahrenheit(((parsed * 9) / 5 + 32).toFixed(2));
    } else {
      setFahrenheit('');
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    const parsed = parseFloat(value);
    if (!isNaN(parsed)) {
      setCelsius((((parsed - 32) * 5) / 9).toFixed(2));
    } else {
      setCelsius('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Conversor de Temperatura</h1>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block font-medium">Celsius (°C):</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            className="border p-2 rounded w-full"
            placeholder="Digite em °C"
          />
        </div>
        <div>
          <label className="block font-medium">Fahrenheit (°F):</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="border p-2 rounded w-full"
            placeholder="Digite em °F"
          />
        </div>
      </div>
    </div>
  );
}
