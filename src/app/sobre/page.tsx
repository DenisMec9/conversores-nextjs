'use client';

export default function Sobre() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sobre o Aplicativo</h1>
      <p className="text-base leading-relaxed">
        Este aplicativo foi desenvolvido com o objetivo de facilitar a conversão de unidades de medida
        de forma prática e intuitiva. Atualmente, ele conta com os seguintes conversores:
      </p>
      <ul className="list-disc list-inside mt-4 space-y-1">
        <li>Conversor de distância entre metros, pés e polegadas</li>
        <li>Conversor de temperatura entre graus Celsius e Fahrenheit</li>
        <li>Conversor de dólar para real e vice-versa, com cotação fixa de 14/04/2025</li>
      </ul>
      <p className="mt-4">
        A ideia é proporcionar uma ferramenta útil e acessível, tanto para estudantes quanto para profissionais que precisam dessas conversões no dia a dia.
      </p>
    </div>
  );
}
