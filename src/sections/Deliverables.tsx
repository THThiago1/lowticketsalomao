import { Reveal } from "../lib/motion";
import { MiniMock, type MockKind } from "../components/mockups";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 8 — TUDO O QUE O CLIENTE RECEBE ============ */

const ITEMS: { kind: MockKind; name: string; desc: string }[] = [
  {
    kind: "book",
    name: "Guia Principal — Os 7 Princípios da Prosperidade de Salomão",
    desc: "Conheça os sete princípios, sua fundamentação e como eles podem ser levados para situações relacionadas a dinheiro, trabalho, administração e propósito.",
  },
  {
    kind: "diagnostic",
    name: "Diagnóstico da Prosperidade Sábia",
    desc: "Identifique quais princípios já aparecem na sua forma de lidar com recursos e quais pontos merecem mais atenção.",
  },
  {
    kind: "map",
    name: "Mapa S.A.L.O.M.",
    desc: "Use cinco perguntas para revisar decisões antes de agir e criar uma pausa entre impulso e escolha.",
  },
  {
    kind: "plan",
    name: "Plano Pouco a Pouco",
    desc: "Transforme objetivos financeiros amplos em pequenas ações executáveis, evitando depender de uma única grande mudança.",
  },
  {
    kind: "xray",
    name: "Raio-X dos Seus Recursos",
    desc: "Visualize entradas, saídas, dívidas, compromissos e reservas para enxergar com mais clareza como seus recursos estão organizados.",
  },
  {
    kind: "decision",
    name: "Checklist da Decisão Financeira Sábia",
    desc: "Tenha uma sequência de critérios para consultar antes de compras, dívidas, novos compromissos e outras decisões relevantes.",
  },
  {
    kind: "doc",
    name: "Plano Pessoal de Prosperidade Sábia",
    desc: "Reúna suas principais descobertas e defina quais comportamentos e princípios pretende colocar em prática.",
  },
];

export function Deliverables() {
  return (
    <section id="incluido" className="hairline-b relative scroll-mt-8 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            chapter="VII"
            eyebrow="Tudo o que você recebe"
            lines={[
              <>Um kit de aplicação,</>,
              <>
                não apenas <em className="italic text-gold-deep">conteúdo para ler</em>
              </>,
            ]}
            sub="O guia principal apresenta os princípios; as seis ferramentas levam a reflexão para a prática — cada uma com uma função clara no percurso."
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
                  <p className="mt-3 text-[9.5px] font-bold uppercase tracking-[0.22em] text-bronze">
                    Para que serve
                  </p>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-soft">
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
