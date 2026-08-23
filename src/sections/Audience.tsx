import { Reveal } from "../lib/motion";
import { ArrowDown, Check, Coin, Diamond, XMark } from "../components/decor";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 9 — TRANSFORMAÇÃO PRÁTICA ============ */

const WITHOUT = [
  "Compra antes de analisar.",
  "Não enxerga com clareza para onde os recursos estão indo.",
  "Assume compromissos sem observar o impacto futuro.",
  "Acredita que a única solução é ganhar mais.",
  "Começa planos, mas não transforma intenção em pequenas ações.",
];

const WITH_WISDOM = [
  "Possui perguntas para revisar uma decisão.",
  "Visualiza entradas, saídas e compromissos.",
  "Transforma objetivos em pequenas ações.",
  "Identifica pontos de desorganização.",
  "Constrói seu próprio plano de aplicação.",
];

export function Transformation() {
  return (
    <section className="hairline-b relative bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="VIII"
          eyebrow="A mudança prática"
          align="center"
          lines={[
            <>
              Antes sem processo. Depois com <em className="italic text-gold-deep">critérios</em>.
            </>,
          ]}
          sub="A diferença aparece nos comportamentos observáveis do dia a dia — não em promessas de resultado."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Sem um processo claro */}
          <Reveal>
            <div className="h-full border border-ink/20 bg-ink px-7 py-9 sm:px-9">
              <p className="eyebrow text-ivory-dim/60">Sem um processo claro</p>
              <ul className="mt-6 space-y-4">
                {WITHOUT.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-ivory-dim/25 text-ivory-dim/50">
                      <XMark className="h-3 w-3" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-ivory-dim/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Com os princípios em aplicação */}
          <Reveal delay={130}>
            <div className="relative h-full border border-gold-deep/60 bg-ivory-bright px-7 py-9 shadow-[0_26px_55px_-32px_rgba(138,106,43,0.6)] sm:px-9">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.22em] text-navy-deep"
              >
                Com os princípios
              </span>
              <p className="eyebrow text-gold-deep">Com os princípios em aplicação</p>
              <ul className="mt-6 space-y-4">
                {WITH_WISDOM.map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-gold-deep/60 bg-gold/10 text-gold-deep">
                      <Check className="h-3 w-3" strokeWidth={3.2} />
                    </span>
                    <span className="text-[15px] font-medium leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-[15px] leading-relaxed text-ink-soft">
            A transformação proposta não começa necessariamente no tamanho da renda.{" "}
            <strong className="font-display font-semibold italic text-gold-deep">
              Começa na maneira como os recursos são percebidos, decididos e administrados.
            </strong>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 10 — PARA QUEM É ============ */

const AUDIENCE = [
  "acredita que fé e responsabilidade devem caminhar juntas;",
  "quer organizar melhor sua maneira de lidar com recursos;",
  "deseja tomar decisões financeiras com mais critérios;",
  "quer estudar princípios de Provérbios e Eclesiastes de forma aplicada;",
  "percebe que ganhar mais, sozinho, não resolve desorganização;",
  "quer construir gradualmente em vez de buscar dinheiro rápido;",
  "deseja prosperar sem transformar dinheiro em identidade ou propósito final.",
];

export function Audience() {
  return (
    <section className="hairline-b relative bg-ivory-bright py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              chapter="IX"
              eyebrow="Para quem é"
              lines={[
                <>Este material faz</>,
                <>
                  sentido para você <em className="italic text-gold-deep">que…</em>
                </>,
              ]}
            />
            <Reveal delay={180}>
              <Coin className="mt-10 hidden h-24 w-24 text-bronze/70 lg:block" />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul>
            {AUDIENCE.map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <li className="group flex items-start gap-4 border-b border-ink/12 py-5 transition-colors first:border-t hover:bg-ivory">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border border-gold-deep/50 text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-deep">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-[15.5px] leading-relaxed text-ink-soft">…{item}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 11 — DIFERENCIAÇÃO ============ */

const NOT_HERE = [
  "“Faça isso e Deus será obrigado a enriquecer você.”",
  "“Declare sua prosperidade e o dinheiro virá.”",
  "“Aplique estes versículos e fique milionário.”",
  "“Use este segredo bíblico para garantir retorno financeiro.”",
];

const METHOD_FLOW = ["Princípio", "Reflexão", "Decisão", "Aplicação"];

export function Differentiation() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-16 text-ivory-bright sm:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_10%_100%,rgba(203,167,91,0.08),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="X"
          eyebrow="Com clareza"
          tone="light"
          lines={[
            <>
              Isto não é <em className="italic text-gold-soft">“7 versículos para ficar rico”</em>.
            </>,
          ]}
          sub="Você não encontrará aqui promessas de retorno financeiro, fórmulas de enriquecimento, teologia do “declare e receba” nem curso de investimentos."
        />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {NOT_HERE.map((quote, i) => (
            <Reveal key={quote} delay={i * 80}>
              <div className="flex items-start gap-4 border border-ivory-bright/15 bg-navy px-5 py-5 transition-colors duration-300 hover:border-gold/50">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-bronze/70 text-bronze">
                  <XMark className="h-4 w-4" />
                </span>
                <p className="font-display text-[15.5px] italic leading-snug text-ivory-dim/90">
                  {quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={150}>
            <div className="lg:justify-self-end lg:text-right">
              <p className="eyebrow text-gold-soft">O que você encontra</p>
              <p className="mt-4 max-w-sm font-display text-[clamp(1.15rem,2.6vw,1.5rem)] font-medium leading-snug text-ivory-dim lg:ml-auto">
                Um caminho simples e repetível para levar cada princípio até a vida real:
              </p>
              <div className="mt-6 flex items-center justify-start gap-3 text-gold-deep lg:justify-end">
                <Diamond />
                <Diamond className="scale-150" />
                <Diamond />
              </div>
            </div>
          </Reveal>

          <div className="mx-auto flex w-full max-w-sm flex-col items-stretch">
            {METHOD_FLOW.map((step, i) => (
              <Reveal key={step} delay={i * 100}>
                <div className="flex flex-col items-center">
                  <p className="w-full border border-gold/45 bg-navy px-6 py-3.5 text-center font-display text-lg font-semibold uppercase tracking-[0.16em] text-ivory-bright sm:text-xl">
                    {step}
                  </p>
                  {i < METHOD_FLOW.length - 1 && (
                    <ArrowDown className="my-1.5 h-6 w-6 text-gold-soft" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
