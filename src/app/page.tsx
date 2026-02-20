import Link from "next/link";
import { converterCards } from "@/config/navigation";

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-soft)]">
        <p className="mb-3 inline-flex rounded-full bg-[var(--color-card)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)]">
          Conversores do dia a dia
        </p>
        <h1 className="font-display text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
          Conversões rápidas com visual moderno e código organizado.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--color-muted)]">
          Projeto em Next.js com separação por domínio, componentes reutilizáveis e experiência focada em clareza.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {converterCards.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-soft)]"
          >
            <p className="font-display text-2xl text-[var(--color-ink)]">{item.label}</p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">{item.description}</p>
            <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-accent)]">Abrir conversor</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
