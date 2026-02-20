import React, { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] md:p-8">
      <header className="mb-6 space-y-2">
        <h1 className="font-display text-3xl leading-tight text-[var(--color-ink)]">{title}</h1>
        {description ? <p className="text-sm text-[var(--color-muted)]">{description}</p> : null}
      </header>
      {children}
    </section>
  );
}
