import type { ReactNode } from "react";
import { Reveal } from "../lib/motion";
import { Diamond, Seal } from "../components/decor";
import { Chain, QuestionCard, SectionHeader, Tag } from "../components/ui";

type Principle = {
  numeral: string;
  title: string;
  ref: string;
  text: ReactNode;
  question?: string;
  questionLabel?: string;
  pillar?: string;
  chain?: string[];
  chainNote?: string;
  questions?: string[];
  highlight?: string;
  highlightBig?: boolean;
};

const PRINCIPLES: Principle[] = [
  {
    numeral: "I",
    title: "Sabedoria antes da riqueza",
    ref: "Pv 4.7",
    text: (
      <>
        Antes de aprender a ganhar mais, aprenda a decidir melhor.{" "}
        <strong className="font-semibold text-ink">Sabedoria vem antes da estratégia financeira.</strong>
      </>
    ),
    question: "Qual é a decisão prudente?",
    questionLabel: "A pergunta do princípio",
    pillar: "A Mente Próspera",
  },
  {
    numeral: "II",
    title: "A Lei da Diligência",
    ref: "Pv 13.4",
    text: (
      <>
        Desejo sem execução não produz prosperidade. Existe produção, trabalho, preparo,
        consistência e entrega de valor.
      </>
    ),
    pillar: "Produzir valor antes de esperar colher",
  },
  {
    numeral: "III",
    title: "O Crescimento Progressivo",
    ref: "Pv 13.11",
    text: (
      <>
        Em vez de perseguir uma grande oportunidade capaz de resolver tudo rapidamente,
        construir através de <strong className="font-semibold text-ink">decisões corretas repetidas</strong>{" "}
        ao longo do tempo.
      </>
    ),
    chain: ["Produzir", "Reter", "Construir", "Repetir"],
    chainNote:
      "Essa sequência é uma aplicação contemporânea dos princípios bíblicos e não uma fórmula financeira literal das Escrituras.",
  },
  {
    numeral: "IV",
    title: "A Lei da Administração",
    ref: "Pv 27.23",
    text: (
      <>
        Não basta ganhar. É necessário compreender{" "}
        <strong className="font-semibold text-ink">o que acontece depois que o dinheiro entra</strong>.
      </>
    ),
    questions: [
      "Quanto entra?",
      "Quanto sai?",
      "Quanto é consumido?",
      "Quanto é preservado?",
      "Quais compromissos prendem a renda futura?",
    ],
    chain: ["Ganhar", "Reter", "Administrar", "Proteger"],
  },
  {
    numeral: "V",
    title: "A Lei da Integridade",
    ref: "Pv 11.1",
    text: (
      <>
        Não importa apenas quanto foi conquistado. Também importa{" "}
        <strong className="font-semibold text-ink">como foi conquistado</strong>.
      </>
    ),
    question: "Eu precisaria abrir mão da minha integridade para conseguir isso?",
    questionLabel: "O teste do princípio",
    pillar: "A Riqueza Limpa",
  },
  {
    numeral: "VI",
    title: "A Lei da Generosidade",
    ref: "Pv 11.25",
    text: (
      <>
        Prosperidade bíblica não termina na própria pessoa. Recursos podem servir
        responsabilidades pessoais — e também outras pessoas.
      </>
    ),
    highlight: "Recursos também possuem propósito.",
  },
  {
    numeral: "VII",
    title: "A Lei do Propósito",
    ref: "Ec 5.10",
    text: (
      <>
        Depois de produzir, administrar, preservar, construir e repartir, ainda existe uma
        pergunta: <em className="font-display font-medium text-navy">“Para quê?”</em> Se nenhuma conquista
        satisfaz e toda a vida passa a girar ao redor de acumular, o dinheiro deixa de
        funcionar como ferramenta — e passa a governar.
      </>
    ),
    highlight: "Tenha dinheiro sem deixar o dinheiro ter você.",
    highlightBig: true,
  },
];

export function Principles() {
  return (
    <section id="principios" className="hairline-b relative bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Coluna fixa */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              chapter="V"
              eyebrow="O mecanismo"
              lines={[
                <>Os 7 Princípios</>,
                <>
                  da <em className="italic text-gold-deep">Prosperidade Sábia</em>
                </>,
              ]}
              sub="Cada princípio transforma um ensinamento de Provérbios e Eclesiastes em uma postura prática diante do trabalho e do dinheiro."
            />
            <Reveal delay={200}>
              <nav className="mt-9 hidden border-t border-ink/15 lg:block" aria-label="Índice dos princípios">
                {PRINCIPLES.map((p, i) => (
                  <a
                    key={p.numeral}
                    href={`#principio-${i + 1}`}
                    className="group flex items-baseline gap-4 border-b border-ink/10 py-2.5 transition-colors hover:bg-ivory-bright"
                  >
                    <span className="w-7 font-display text-sm font-semibold text-gold-deep">
                      {p.numeral}
                    </span>
                    <span className="text-[13px] font-medium text-ink-soft transition-colors group-hover:text-ink">
                      {p.title}
                    </span>
                  </a>
                ))}
              </nav>
              <Seal className="mt-10 hidden h-32 w-32 text-bronze/60 lg:block" />
            </Reveal>
          </div>
        </div>

        {/* Blocos dos princípios */}
        <div className="lg:col-span-8">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.numeral} delay={40}>
              <article
                id={`principio-${i + 1}`}
                className="group relative scroll-mt-24 border-b border-ink/12 py-10 first:pt-0 last:border-b-0 sm:py-12"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
                  <div className="relative shrink-0 sm:w-24">
                    <span className="font-display text-6xl font-semibold leading-none text-gold-deep/28 transition-colors duration-500 group-hover:text-gold-deep/60">
                      {p.numeral}
                    </span>
                    <span className="absolute -left-4 top-1 hidden h-14 w-px bg-gold/40 sm:block" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <h3 className="font-display text-[clamp(1.35rem,3vw,1.8rem)] font-semibold leading-tight text-ink">
                        {p.title}
                      </h3>
                      <span className="font-display text-[13px] italic tracking-wide text-bronze">
                        {p.ref}
                      </span>
                    </div>

                    <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                      {p.text}
                    </p>

                    {p.questions && (
                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {p.questions.map((q) => (
                          <li
                            key={q}
                            className="flex items-center gap-2.5 border border-ink/12 bg-ivory-bright px-3.5 py-2.5 text-[13.5px] font-medium text-navy"
                          >
                            <Diamond className="shrink-0 text-gold-deep" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    )}

                    {p.chain && (
                      <div className="mt-6">
                        <Chain items={p.chain} />
                        {p.chainNote && (
                          <p className="mt-3 max-w-lg border-l-2 border-bronze/50 pl-3 text-[12.5px] italic leading-relaxed text-ink-faint">
                            {p.chainNote}
                          </p>
                        )}
                      </div>
                    )}

                    {p.question && (
                      <div className="mt-6">
                        <QuestionCard label={p.questionLabel ?? "A pergunta"}>
                          {p.question}
                        </QuestionCard>
                      </div>
                    )}

                    {p.pillar && (
                      <div className="mt-6">
                        <Tag>{p.pillar}</Tag>
                      </div>
                    )}

                    {p.highlight &&
                      (p.highlightBig ? (
                        <p className="mt-6 border border-gold-deep/50 bg-navy px-6 py-6 text-center font-display text-[clamp(1.1rem,2.6vw,1.5rem)] font-semibold uppercase leading-snug tracking-[0.03em] text-gold-soft">
                          {p.highlight}
                        </p>
                      ) : (
                        <p className="mt-6 flex items-start gap-3 font-display text-lg font-medium italic text-navy">
                          <Diamond className="mt-[9px] shrink-0 text-gold-deep" />
                          {p.highlight}
                        </p>
                      ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
