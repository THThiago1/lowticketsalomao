import { useState } from "react";
import { Reveal } from "../lib/motion";
import { ArrowDown, Corners, Scales } from "../components/decor";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 6 — MAPA S.A.L.O.M. ============ */

const SALOM = [
  {
    letter: "S",
    word: "Sabedoria",
    question: "Estou tomando uma decisão sábia ou apenas emocional?",
    line: "Entenda antes de agir.",
  },
  {
    letter: "A",
    word: "Administração",
    question: "Essa decisão melhora ou prejudica meus recursos?",
    line: "Organize aquilo que entra.",
  },
  {
    letter: "L",
    word: "Labor",
    question: "Estou produzindo valor ou apenas esperando resultado?",
    line: "Transforme intenção em trabalho.",
  },
  {
    letter: "O",
    word: "Ordem financeira",
    question: "Essa decisão aumenta ordem ou desorganização?",
    line: "Observe gastos, compromissos, impulsos e dívidas.",
  },
  {
    letter: "M",
    word: "Mordomia",
    question: "Estou tratando meus recursos como responsabilidade?",
    line: "Considere integridade, propósito, generosidade e gratidão.",
  },
];

export function SalomMap() {
  const [active, setActive] = useState(0);
  const item = SALOM[active];

  return (
    <section className="navy-grid relative overflow-hidden bg-navy py-20 text-ivory-bright sm:py-28" id="mapa-salom">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_10%,rgba(203,167,91,0.1),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeader
              chapter="VI"
              eyebrow="Ferramenta de implementação"
              tone="light"
              lines={[
                <>Transforme princípios em decisões</>,
                <>
                  com o <em className="italic text-gold-soft">Mapa S.A.L.O.M.</em>
                </>,
              ]}
              sub="Os sete princípios mostram o que pensar. O Mapa S.A.L.O.M. ajuda a lembrar como revisar uma decisão — antes de tomá-la."
            />
            <Reveal delay={200}>
              <p className="mt-8 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-gold-soft/80">
                <Scales className="h-5 w-5" strokeWidth={4} />
                Cinco perguntas · Uma pausa sábia
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {/* Letras interativas */}
              <div
                className="grid grid-cols-5 gap-2 sm:gap-3"
                role="tablist"
                aria-label="Letras do Mapa S.A.L.O.M."
              >
                {SALOM.map((s, i) => (
                  <button
                    key={s.letter}
                    role="tab"
                    aria-selected={active === i}
                    onClick={() => setActive(i)}
                    className={`flex flex-col items-center border py-4 transition-all duration-300 sm:py-5 ${
                      active === i
                        ? "border-gold-soft bg-gold text-navy-deep shadow-[0_14px_30px_-14px_rgba(203,167,91,0.7)]"
                        : "border-ivory-bright/20 bg-navy-soft/40 text-ivory-dim hover:border-gold-soft/60 hover:text-gold-soft"
                    }`}
                  >
                    <span className="font-display text-3xl font-semibold leading-none sm:text-4xl">
                      {s.letter}
                    </span>
                    <span
                      className={`mt-2 hidden text-[9px] font-bold uppercase tracking-[0.18em] sm:block ${
                        active === i ? "text-navy/70" : "text-ivory-dim/60"
                      }`}
                    >
                      {s.word.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            {/* Painel */}
            <Reveal delay={180}>
              <div className="relative mt-4 border border-gold/35 bg-navy-deep/60 px-6 py-8 sm:px-10 sm:py-10">
                <Corners />
                <div key={active} className="anim-panel">
                  <p className="eyebrow text-gold-soft">
                    {item.letter} — {item.word}
                  </p>
                  <p className="mt-5 font-display text-[clamp(1.3rem,3.4vw,2rem)] font-medium italic leading-[1.3] text-ivory-bright">
                    “{item.question}”
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="h-px w-8 bg-gold" />
                    <p className="text-[13.5px] font-semibold uppercase tracking-[0.12em] text-ivory-dim">
                      {item.line}
                    </p>
                  </div>
                </div>

                {/* trilho de progresso */}
                <div className="mt-8 flex gap-1.5" aria-hidden="true">
                  {SALOM.map((s, i) => (
                    <span
                      key={s.letter}
                      className={`h-[3px] flex-1 transition-colors duration-500 ${
                        i <= active ? "bg-gold-soft" : "bg-ivory-bright/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 7 — COMO FUNCIONA ============ */

const FLOW = [
  {
    stage: "Entrada",
    title: "Onde você está",
    text: "Você identifica como atualmente lida com trabalho, decisões e dinheiro.",
  },
  {
    stage: "Processo",
    title: "O caminho dos princípios",
    text: "Você percorre os 7 Princípios da Prosperidade Sábia e utiliza exercícios, checklists e o Mapa S.A.L.O.M. para transformar conceitos em decisões práticas.",
  },
  {
    stage: "Resultado",
    title: "O seu plano pessoal",
    text: "Você constrói um Plano Pessoal de Prosperidade Sábia mostrando princípios já praticados, pontos que precisam de atenção e comportamentos que pretende implementar.",
  },
];

export function HowItWorks() {
  return (
    <section className="hairline-b relative bg-ivory-bright py-20 sm:py-28" id="como-funciona">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="VII"
          eyebrow="Como funciona"
          align="center"
          lines={[
            <>
              Dos princípios para a <em className="italic text-gold-deep">aplicação</em>
            </>,
          ]}
          sub="Um percurso em três movimentos — entrada, processo e resultado."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {FLOW.map((step, i) => (
            <Reveal key={step.stage} delay={i * 110}>
              <div className="relative flex gap-5 sm:gap-8">
                {/* trilho vertical */}
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-deep/50 bg-ivory font-display text-base font-semibold text-gold-deep">
                    {i + 1}
                  </span>
                  {i < FLOW.length - 1 && (
                    <span className="flex flex-1 items-center py-1 text-gold-deep/70">
                      <ArrowDown className="h-6 w-6" />
                    </span>
                  )}
                </div>

                <div className={`flex-1 ${i < FLOW.length - 1 ? "pb-10" : ""}`}>
                  <p className="eyebrow text-bronze">{step.stage}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-xl border border-ink/12 bg-ivory px-5 py-4 text-[14.5px] leading-relaxed text-ink-soft">
                    {step.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={330}>
            <div className="relative mt-10 border border-navy/30 bg-navy px-6 py-7 sm:px-9">
              <Corners />
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <Scales className="h-9 w-9 shrink-0 text-gold-soft" strokeWidth={3.8} />
                <p className="text-[14.5px] leading-relaxed text-ivory-dim">
                  <strong className="font-display text-[16px] font-semibold text-ivory-bright">
                    Não é uma previsão de quanto você ganhará.
                  </strong>
                  <br />
                  É uma estrutura para melhorar a maneira como você governa aquilo que
                  passa pelas suas mãos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
