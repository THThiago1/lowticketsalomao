import { Reveal } from "../lib/motion";
import { MiniMock, type MockKind } from "../components/mockups";
import { SectionHeader } from "../components/ui";

const ITEMS: { kind: MockKind; name: string; desc: string }[] = [
  {
    kind: "book",
    name: "Guia principal — Os 7 Princípios da Prosperidade de Salomão",
    desc: "Mini-ebook visual apresentando os sete princípios, sua fundamentação e a aplicação de cada um à vida financeira moderna.",
  },
  {
    kind: "diagnostic",
    name: "Diagnóstico da Prosperidade Sábia",
    desc: "Avaliação prática para identificar quais princípios já aparecem na sua vida — e quais merecem atenção.",
  },
  {
    kind: "map",
    name: "Mapa S.A.L.O.M.",
    desc: "Framework de cinco perguntas para revisar decisões relacionadas a dinheiro, trabalho, negócios e compromissos financeiros.",
  },
  {
    kind: "plan",
    name: "Plano Pouco a Pouco",
    desc: "Ferramenta para transformar objetivos financeiros amplos em pequenas ações recorrentes de construção.",
  },
  {
    kind: "xray",
    name: "Raio-X dos Seus Recursos",
    desc: "Mapa para visualizar entradas, saídas, compromissos, dívidas, reservas e recursos.",
  },
  {
    kind: "decision",
    name: "Checklist da Decisão Financeira Sábia",
    desc: "Perguntas para consultar antes de compras relevantes, dívidas, novas obrigações, oportunidades ou decisões financeiras importantes.",
  },
  {
    kind: "doc",
    name: "Plano Pessoal de Prosperidade Sábia",
    desc: "Página de implementação para transformar os aprendizados em princípios e comportamentos práticos.",
  },
];

export function Deliverables() {
  return (
    <section className="hairline-b relative bg-ivory py-20 sm:py-28" id="incluido">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            chapter="VIII"
            eyebrow="O que está incluído"
            lines={[
              <>
                Tudo que você <em className="italic text-gold-deep">recebe</em>
              </>,
            ]}
            sub="Um guia principal e seis ferramentas de aplicação — para ler, diagnosticar, decidir e implementar."
          />
          <Reveal delay={200}>
            <p className="shrink-0 border border-gold-deep/40 bg-ivory-bright px-5 py-4 font-display text-lg font-medium text-navy">
              7 materiais <span className="text-gold-deep">·</span>{" "}
              <span className="italic">1 percurso completo</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.name} delay={(i % 3) * 90}>
              <article
                className={`group flex h-full flex-col border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-28px_rgba(13,22,38,0.5)] ${
                  i === 0
                    ? "border-gold-deep/60 bg-ivory-bright shadow-[0_18px_40px_-26px_rgba(13,22,38,0.45)]"
                    : "border-ink/15 bg-ivory-bright"
                }`}
              >
                <div className="overflow-hidden border-b border-ink/12">
                  <div className="transition-transform duration-500 group-hover:scale-[1.04]">
                    <MiniMock kind={item.kind} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-display text-sm font-semibold text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[17px] font-semibold leading-snug text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-soft">
                    {item.desc}
                  </p>
                  {i === 0 && (
                    <p className="mt-4 inline-flex w-fit border border-gold/60 bg-gold/10 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                      Material central
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
