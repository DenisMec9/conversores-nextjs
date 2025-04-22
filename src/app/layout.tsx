import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Conversores",
  description: "Conversores em Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-500 text-white p-4">
          <nav className="flex gap-4">
            <Link href="/">Início</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/conversor-dolar">Dólar</Link>
            <Link href="/conversor-temperatura">Temperatura</Link>
            <Link href="/conversor-distancia">Distância</Link>
          </nav>
        </header>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
