import { Reveal } from "../lib/motion";
import { Diamond, Divider, Scales, Seal, XMark } from "../components/decor";
import { CTA, Eyebrow, SectionHeader, Wordmark } from "../components/ui";
import { ProductMockup } from "../components/mockups";

/* ============ SEÇÃO 1 — HERO ============ */

export function Hero() {
  return (
    <header id="topo" className="hero-grid relative overflow-hidden border-b border-ink/10">
      {/* vinheta de profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_55%,rgba(33,30,22,0.07))]"
      />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-5 sm:px-8">
        {/* barra superior */}
        <div className="flex items-center justify-between py-4">
          <Wordmark />
          <p className="hidden text-[10.5px] font-semibold uppercase tracking-[0.26em] text-ink-faint sm:block">
            Provérbios · Eclesiastes
          </p>
          <span className="eyebrow border border-gold-deep/40 px-3 py-1.5 text-gold-deep">
            Guia Digital
          </span>
        </div>

        <div className="grid flex-1 items-center gap-10 pb-10 pt-4 lg:grid-cols-12 lg:gap-8 lg:pb-14">
          {/* Coluna de texto */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Sabedoria bíblica aplicada ao dinheiro</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.35rem,7.2vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-ink">
                <span className="mask-line" style={{ ["--rd" as string]: "120ms" }}>
                  <span>Os 7 Princípios</span>
                </span>
                <span className="mask-line" style={{ ["--rd" as string]: "220ms" }}>
                  <span>
                    da <em className="font-medium italic text-gold-deep">Prosperidade</em>
                  </span>
                </span>
                <span className="mask-line" style={{ ["--rd" as string]: "320ms" }}>
                  <span>de Salomão</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Aprenda a aplicar princípios de sabedoria encontrados em{" "}
                <strong className="font-semibold text-ink">Provérbios</strong> e{" "}
                <strong className="font-semibold text-ink">Eclesiastes</strong> para produzir
                melhor, administrar seus recursos, construir patrimônio com prudência e
                prosperar <em className="font-display italic">sem deixar o dinheiro governar sua vida</em>.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-6 space-y-2.5">
                {[
                  "Sem fórmulas para ficar rico.",
                  "Sem promessas de dinheiro fácil.",
                  "Sem precisar interpretar sozinho dezenas de passagens sobre trabalho, riqueza e administração.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-ink-soft">
                    <span className="mt-[7px] flex h-4 w-4 shrink-0 items-center justify-center border border-bronze/50 text-bronze">
                      <XMark className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <CTA>Quero conhecer os 7 princípios</CTA>
              </div>
              <p className="mt-4 flex items-center gap-2.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
                <Diamond className="h-[6px] w-[6px] text-gold-deep" />
                Acesso digital imediato · Guia + 6 ferramentas práticas
              </p>
            </Reveal>
          </div>

          {/* Coluna do mockup */}
          <div className="relative lg:col-span-5">
            <Seal className="absolute -top-4 right-0 hidden h-28 w-28 text-gold-deep/70 lg:block" />
            <Reveal delay={380}>
              <ProductMockup className="mx-auto mt-2 max-w-[300px] sm:max-w-[340px] lg:mt-0 lg:max-w-none" />
            </Reveal>
          </div>
        </div>

        {/* rodapé do hero */}
        <div className="hairline-t hidden items-center justify-between py-4 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-ink-faint lg:flex">
          <span>Sabedoria · Trabalho · Ordem</span>
          <Scales className="h-4 w-4 text-gold-deep" strokeWidth={4.5} />
          <span>Integridade · Generosidade · Propósito</span>
        </div>
      </div>
    </header>
  );
}

/* ============ SEÇÃO 2 — CONTEXTO / PROBLEMA ============ */

export function Problem() {
  return (
    <section className="relative bg-ivory-bright py-20 sm:py-28" id="contexto">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              chapter="II"
              eyebrow="O problema real"
              lines={[
                <>Talvez o seu problema financeiro</>,
                <>
                  não seja apenas <em className="italic text-gold-deep">ganhar pouco</em>
                </>,
              ]}
            />
            <Reveal delay={150}>
              <Divider className="mt-10 text-gold-deep" />
            </Reveal>
          </div>
        </div>

        <div className="space-y-5 text-[15.5px] leading-relaxed text-ink-soft lg:col-span-7 lg:pt-2">
          <Reveal>
            <p className="dropcap">
              Você pode trabalhar, ganhar dinheiro e ainda assim sentir que sua vida
              financeira não avança. Isso acontece porque <strong className="font-semibold text-ink">ganhar é apenas uma parte do problema</strong>.
            </p>
          </Reveal>
          <Reveal delay={60}>
            <p>
              Sem sabedoria para decidir, disciplina para produzir, organização para
              administrar e prudência para preservar, mais dinheiro pode simplesmente
              alimentar os mesmos hábitos.
            </p>
          </Reveal>
          <Reveal delay={90}>
            <p>
              Ao mesmo tempo, buscar prosperidade sem propósito pode criar outro problema:
              você começa querendo liberdade e termina{" "}
              <strong className="font-semibold text-ink">sendo governado pelo próprio dinheiro</strong>.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              É justamente aí que Provérbios e Eclesiastes oferecem uma perspectiva
              diferente. Em vez de ensinar uma fórmula para enriquecer, esses textos
              apresentam princípios relacionados à sabedoria, trabalho, crescimento
              gradual, administração, integridade, generosidade e propósito.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <blockquote className="border-l-2 border-gold bg-ivory px-6 py-5 font-display text-lg italic leading-snug text-navy">
              Os 7 Princípios da Prosperidade de Salomão transformam esses ensinamentos em
              um processo prático — para olhar o dinheiro não apenas como algo para ganhar,
              mas como um recurso a ser produzido, governado e utilizado com sabedoria.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 3 — NOVA CRENÇA ============ */

export function NewBelief() {
  return (
    <section className="hairline-b relative overflow-hidden bg-ivory py-20 sm:py-28">
      <Seal
        className="pointer-events-none absolute -left-16 top-10 h-56 w-56 text-gold-deep/12"
        spin={false}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeader
            chapter="III"
            eyebrow="Uma nova ordem"
            lines={[
              <>O problema não é querer prosperar</>,
              <>
                É tentar prosperar{" "}
                <em className="italic text-gold-deep">sem aprender a governar</em>
              </>,
            ]}
          />

          <div className="mt-9 space-y-5 text-[15.5px] leading-relaxed text-ink-soft">
            <Reveal>
              <p>Muita gente reduz prosperidade a uma única pergunta:</p>
              <p className="mt-3 font-display text-xl font-medium italic text-navy">
                “Como eu ganho mais dinheiro?”
              </p>
              <p className="mt-4">Mas existe uma pergunta anterior:</p>
              <p className="mt-3 border-l-2 border-gold pl-4 font-display text-xl font-medium italic text-navy">
                “Se mais dinheiro chegar às minhas mãos, eu tenho sabedoria para
                governá-lo?”
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ul className="space-y-2 pt-1">
                {[
                  "Alguém pode ganhar mais — e gastar mais.",
                  "Pode crescer profissionalmente — e continuar desorganizado.",
                  "Pode aumentar a renda — e aumentar as dívidas.",
                  "Pode acumular — e nunca considerar suficiente.",
                  "Pode possuir recursos — e comprometer a integridade para conseguir ainda mais.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-deep" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="pt-3">A proposta deste material é mudar a ordem.</p>
            </Reveal>
          </div>
        </div>

        {/* Destaque grande */}
        <div className="lg:col-span-5 lg:pt-8">
          <Reveal delay={150}>
            <div className="relative border border-gold-deep/50 bg-navy px-7 py-12 text-center shadow-[0_30px_60px_-30px_rgba(13,22,38,0.55)] sm:px-10 sm:py-16">
              <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-gold/30" />
              <Scales className="mx-auto h-10 w-10 text-gold-soft" strokeWidth={3.8} />
              <p className="mt-7 font-display text-[clamp(1.8rem,5vw,2.6rem)] font-semibold uppercase leading-[1.08] text-ivory-bright">
                Sabedoria
                <br />
                primeiro.
              </p>
              <div className="mx-auto my-5 h-px w-14 bg-gold" />
              <p className="font-display text-[clamp(1.8rem,5vw,2.6rem)] font-semibold uppercase leading-[1.08] text-gold-soft">
                Recursos
                <br />
                depois.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 4 — BIG IDEA (alto contraste) ============ */

export function BigIdea() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-20 text-ivory-bright sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(203,167,91,0.09),transparent_60%)]"
      />
      <Scales
        className="pointer-events-none absolute -right-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 text-gold-soft/[0.06]"
        strokeWidth={2}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          chapter="IV"
          eyebrow="A grande ideia"
          tone="light"
          align="center"
          lines={[
            <>Antes de aprender a ganhar mais,</>,
            <>
              aprenda a <em className="italic text-gold-soft">governar</em>
            </>,
          ]}
        />

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-center text-[15.5px] leading-relaxed text-ivory-dim">
            <p>
              O diferencial associado à sabedoria de Salomão não está simplesmente em
              possuir riquezas. Está na <strong className="font-semibold text-ivory-bright">sabedoria necessária para governar</strong>{" "}
              decisões, recursos e responsabilidades.
            </p>
            <p>Por isso, a principal pergunta desta oferta não é:</p>
            <p className="font-display text-xl italic text-ivory-bright/80">“Como ficar rico?”</p>
            <p>É:</p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <figure className="relative mx-auto mt-8 max-w-3xl border border-gold/40 px-6 py-10 text-center sm:px-12">
            <span
              aria-hidden="true"
              className="anim-seal absolute -top-6 left-1/2 -translate-x-1/2 bg-navy-deep px-4 font-display text-5xl leading-none text-gold-soft"
            >
              “
            </span>
            <blockquote className="font-display text-[clamp(1.4rem,4vw,2.2rem)] font-medium italic leading-[1.25] text-ivory-bright">
              Como desenvolver sabedoria para governar aquilo que passa pelas minhas mãos?
            </blockquote>
          </figure>
        </Reveal>

        <Reveal delay={260}>
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {[
              "Recursos sem governo podem produzir desordem.",
              "Prosperidade sem propósito pode se transformar em vaidade.",
            ].map((line) => (
              <p
                key={line}
                className="flex items-start gap-3 border border-gold/25 bg-navy px-5 py-4 font-display text-[15.5px] font-medium leading-snug text-gold-soft"
              >
                <Diamond className="mt-[7px] shrink-0 text-gold-soft" />
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
