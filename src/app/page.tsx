import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao App de Conversores!</h1>
      <p className="mb-4">Este aplicativo permite realizar conversões úteis do dia a dia.</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><Link href="/conversor-dolar" className="text-blue-600 underline">Conversor de Dólar</Link></li>
        <li><Link href="/conversor-temperatura" className="text-blue-600 underline">Conversor de Temperatura</Link></li>
        <li><Link href="/conversor-distancia" className="text-blue-600 underline">Conversor de Distância</Link></li>
        <li><Link href="/sobre" className="text-blue-600 underline">Sobre</Link></li>
      </ul>
    </div>
  );
}
