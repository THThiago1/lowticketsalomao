import { Reveal } from "../lib/motion";
import { Chain, SectionHeader } from "../components/ui";
import { COLLECTION_IMAGE, MiniMock, type MockKind } from "../components/mockups";

/* ============ SEÇÃO 4 — VISÃO GERAL DO SISTEMA ============ */

const TOOLS: { kind: MockKind; num: string; name: string }[] = [
  { kind: "diagnostic", num: "02", name: "Diagnóstico da Prosperidade Sábia" },
  { kind: "map", num: "03", name: "Mapa S.A.L.O.M." },
  { kind: "plan", num: "04", name: "Plano Pouco a Pouco" },
  { kind: "xray", num: "05", name: "Raio-X dos Seus Recursos" },
  { kind: "decision", num: "06", name: "Checklist da Decisão Financeira Sábia" },
  { kind: "doc", num: "07", name: "Plano Pessoal de Prosperidade Sábia" },
];

const SYSTEM_PATH = ["Compreender", "Diagnosticar", "Decidir", "Organizar", "Implementar"];

export function SystemOverview() {
  return (
    <section id="sistema" className="hairline-b relative scroll-mt-8 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="III"
          eyebrow="O sistema completo"
          lines={[
            <>Não é apenas um ebook.</>,
            <>
              É um <em className="italic text-gold-deep">sistema</em> para levar
            </>,
            <>sabedoria à prática.</>,
          ]}
          sub="Você recebe o guia principal e seis ferramentas de aplicação para compreender os princípios, avaliar sua situação, revisar decisões e construir seu próprio plano de ação."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Box da coleção em destaque */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="anim-float">
                <img
                  src={COLLECTION_IMAGE}
                  alt="Coleção completa Os 7 Princípios da Prosperidade de Salomão"
                  loading="lazy"
                  decoding="async"
                  className="mx-auto h-auto w-full max-w-[280px] sm:max-w-[300px] lg:max-w-[320px]"
                />
              </div>
              <p className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">
                Coleção completa
              </p>
            </Reveal>
          </div>

          {/* As seis ferramentas */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {TOOLS.map((tool, i) => (
                <Reveal key={tool.name} delay={(i % 3) * 80}>
                  <article className="group flex h-full flex-col border border-ink/15 bg-ivory-bright transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-deep/50 hover:shadow-[0_24px_50px_-28px_rgba(13,22,38,0.5)]">
                    <div className="overflow-hidden border-b border-ink/12">
                      <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                        <MiniMock kind={tool.kind} />
                      </div>
                    </div>
                    <div className="flex items-baseline gap-3 p-4">
                      <span className="font-display text-sm font-semibold text-gold-deep">
                        {tool.num}
                      </span>
                      <h3 className="font-display text-[14.5px] font-semibold leading-snug text-ink">
                        {tool.name}
                      </h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Percurso do sistema */}
        <Reveal delay={150}>
          <div className="mt-16">
            <p className="eyebrow mb-6 text-center text-bronze">O percurso do sistema</p>
            <div className="flex justify-center">
              <Chain items={SYSTEM_PATH} />
            </div>
            <p className="mx-auto mt-5 max-w-md text-center text-[12.5px] italic leading-relaxed text-ink-faint">
              Cada material tem uma função clara dentro do percurso — do entendimento à
              implementação.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
