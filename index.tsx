import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-4">Conversores Next.js</h1>
      <p className="mb-4">Bem-vindo ao app de conversores! Aqui você pode realizar conversões de dólar, temperatura e medidas.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Link href="/sobre" className="text-blue-500 underline">Sobre o Desenvolvedor</Link></li>
        <li><Link href="/conversor-dolar" className="text-blue-500 underline">Conversor de Dólar</Link></li>
        <li><Link href="/conversor-temperatura" className="text-blue-500 underline">Conversor de Temperatura</Link></li>
        <li><Link href="/conversor-distancia" className="text-blue-500 underline">Conversor de Distância</Link></li>
      </ul>
    </main>
  )
}
