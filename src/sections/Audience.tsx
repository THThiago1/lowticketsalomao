import { Reveal } from "../lib/motion";
import { ArrowDown, Check, Coin, Diamond, XMark } from "../components/decor";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 9 — PARA QUEM É ============ */

const AUDIENCE = [
  "acredita que fé e responsabilidade financeira devem caminhar juntas;",
  "quer prosperar sem depender de promessas de enriquecimento fácil;",
  "trabalha, mas percebe desorganização na forma como administra;",
  "deseja construir recursos com mais prudência;",
  "quer melhorar a qualidade das decisões financeiras;",
  "deseja compreender princípios encontrados em Provérbios e Eclesiastes;",
  "quer crescer sem transformar dinheiro em identidade ou propósito final.",
];

export function Audience() {
  return (
    <section className="hairline-b relative bg-ivory-bright py-20 sm:py-28" id="para-quem">
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
                  <p className="text-[15.5px] leading-relaxed text-ink-soft">
                    …{item}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 10 — DIFERENCIAÇÃO ============ */

const NOT_HERE = [
  "“Faça isso e Deus será obrigado a enriquecer você.”",
  "“Declare sua prosperidade e o dinheiro virá.”",
  "“Aplique estes versículos e fique milionário.”",
  "“Use este segredo bíblico para garantir retorno financeiro.”",
];

const METHOD_FLOW = ["Princípio", "Reflexão", "Decisão", "Aplicação"];

export function Differentiation() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-20 text-ivory-bright sm:py-28">
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
              Isto não é <em className="italic text-gold-soft">“7 versículos para ficar rico”</em>
            </>,
          ]}
          sub="Você não encontrará aqui:"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {NOT_HERE.map((quote, i) => (
            <Reveal key={quote} delay={i * 90}>
              <div className="flex items-start gap-4 border border-ivory-bright/15 bg-navy px-6 py-6 transition-colors duration-300 hover:border-gold/50">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-bronze/70 text-bronze">
                  <XMark className="h-4 w-4" />
                </span>
                <p className="font-display text-[16.5px] italic leading-snug text-ivory-dim/90">
                  {quote}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="eyebrow mt-16 text-center text-gold-soft">
            O que você encontrará
          </p>
        </Reveal>

        <div className="mx-auto mt-8 flex max-w-sm flex-col items-stretch">
          {METHOD_FLOW.map((step, i) => (
            <Reveal key={step} delay={i * 100}>
              <div className="flex flex-col items-center">
                <p className="w-full border border-gold/45 bg-navy px-6 py-4 text-center font-display text-xl font-semibold uppercase tracking-[0.16em] text-ivory-bright">
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
    </section>
  );
}

/* ============ SEÇÃO 11 — TRANSFORMAÇÃO ============ */

const WITHOUT = [
  "gasta sem planejar;",
  "assume obrigações impulsivamente;",
  "persegue dinheiro rápido;",
  "não conhece os próprios números;",
  "acredita que a única solução é ganhar mais.",
];

const WITH_WISDOM = [
  "pensa antes de decidir;",
  "produz com diligência;",
  "constrói gradualmente;",
  "administra recursos;",
  "preserva integridade;",
  "pratica generosidade;",
  "desfruta com propósito.",
];

export function Transformation() {
  return (
    <section className="hairline-b relative bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="XI"
          eyebrow="A mudança real"
          align="center"
          lines={[
            <>
              Prosperidade começa pelo <em className="italic text-gold-deep">governo</em>
            </>,
          ]}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {/* Sem governo */}
          <Reveal>
            <div className="h-full border border-ink/20 bg-ink px-7 py-9 sm:px-9">
              <p className="eyebrow text-ivory-dim/60">Sem governo</p>
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

          {/* Com sabedoria */}
          <Reveal delay={130}>
            <div className="relative h-full border border-gold-deep/60 bg-ivory-bright px-7 py-9 shadow-[0_26px_55px_-32px_rgba(138,106,43,0.6)] sm:px-9">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-8 bg-gold px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.22em] text-navy-deep"
              >
                O caminho sábio
              </span>
              <p className="eyebrow text-gold-deep">Com sabedoria</p>
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
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="font-display text-[clamp(1.25rem,3vw,1.7rem)] font-medium leading-snug text-navy">
              A diferença não começa necessariamente no tamanho da renda.
            </p>
            <p className="mt-2 font-display text-[clamp(1.25rem,3vw,1.7rem)] font-semibold italic text-gold-deep">
              Começa na maneira como os recursos são governados.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3 text-gold-deep">
              <Diamond />
              <Diamond className="scale-150" />
              <Diamond />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
