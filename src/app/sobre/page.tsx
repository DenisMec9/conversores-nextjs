import { PageShell } from "@/components/ui/page-shell";

export default function SobrePage() {
  return (
    <PageShell
      title="Sobre o projeto"
      description="Aplicação construída para praticar arquitetura moderna em Next.js com foco em manutenção e UX."
    >
      <div className="space-y-4 text-[var(--color-muted)]">
        <p>
          O aplicativo reúne conversores úteis para o dia a dia e foi refatorado para uma base mais robusta, com separação
          clara entre apresentação e regra de negócio.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Conversor de moeda com cotação real em cache.</li>
          <li>Conversor de temperatura entre Celsius e Fahrenheit.</li>
          <li>Conversor de distância entre metros, pés e polegadas.</li>
        </ul>
      </div>
    </PageShell>
  );
}
