import { Reveal } from "../lib/motion";
import { Check, Diamond, Scales, Seal } from "../components/decor";
import { CTA, Eyebrow, SectionHeader, Wordmark } from "../components/ui";
import { COLLECTION_IMAGE, DIAGNOSTIC_IMAGE } from "../components/mockups";
import { OFFER } from "../config/offer";

/* ============ SEÇÃO 1 — HERO ============ */

const HERO_BULLETS = [
  "7 princípios para orientar sua maneira de pensar sobre dinheiro e recursos.",
  "Mapa S.A.L.O.M. para revisar decisões antes de agir.",
  "6 ferramentas práticas para levar a reflexão à aplicação.",
];

export function Hero() {
  return (
    <header id="topo" className="hero-grid relative overflow-hidden border-b border-ink/10">
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
          <span className="eyebrow hidden items-center border border-gold-deep/40 px-3 py-1.5 text-gold-deep min-[400px]:inline-flex">
            Guia Digital
          </span>
        </div>

        <div className="grid flex-1 items-center gap-10 pb-10 pt-4 lg:grid-cols-12 lg:gap-8 lg:pb-14">
          {/* Coluna de texto */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Os 7 Princípios da Prosperidade de Salomão</Eyebrow>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 font-display text-[clamp(2.1rem,5.6vw,3.8rem)] font-semibold leading-[1.05] tracking-[-0.015em] text-ink">
                <span className="mask-line" style={{ ["--rd" as string]: "120ms" }}>
                  <span>
                    Aprenda a <em className="font-medium italic text-gold-deep">governar</em>
                  </span>
                </span>
                <span className="mask-line" style={{ ["--rd" as string]: "220ms" }}>
                  <span>melhor seus recursos</span>
                </span>
                <span className="mask-line" style={{ ["--rd" as string]: "320ms" }}>
                  <span>com 7 princípios</span>
                </span>
                <span className="mask-line" style={{ ["--rd" as string]: "420ms" }}>
                  <span>de sabedoria bíblica</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft sm:text-base">
                Um sistema prático inspirado em <strong className="font-semibold text-ink">Provérbios</strong> e{" "}
                <strong className="font-semibold text-ink">Eclesiastes</strong> para analisar decisões,
                organizar recursos e desenvolver uma relação mais sábia com dinheiro —{" "}
                <em className="font-display italic">sem promessas de enriquecimento fácil</em>.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-6 space-y-2.5">
                {HERO_BULLETS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] font-medium text-ink">
                    <span className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center border border-gold-deep/50 bg-gold/10 text-gold-deep">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] italic leading-relaxed text-ink-faint">
                — Sem fórmulas para ficar rico. Sem promessas de dinheiro fácil.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8">
                <CTA dataCta="hero">Quero conhecer o método completo</CTA>
              </div>
              <p className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11.5px] font-medium uppercase tracking-[0.12em] text-ink-faint">
                <span className="flex items-center gap-2.5">
                  <Diamond className="h-[6px] w-[6px] text-gold-deep" />
                  Guia + 6 ferramentas práticas
                </span>
                <span aria-hidden="true">•</span>
                <span>Acesso digital</span>
                <span aria-hidden="true">•</span>
                <span className="font-bold text-gold-deep">{OFFER.priceDisplay}</span>
              </p>
            </Reveal>
          </div>

          {/* Coluna da coleção */}
          <div className="relative lg:col-span-5">
            <Seal className="absolute -top-4 right-0 z-10 hidden h-28 w-28 text-gold-deep/70 lg:block" />
            <Reveal delay={380}>
              <div className="anim-float">
                <img
                  src={COLLECTION_IMAGE}
                  alt="Coleção completa Os 7 Princípios da Prosperidade de Salomão"
                  decoding="async"
                  className="mx-auto mt-2 h-auto w-full max-w-[290px] object-contain sm:max-w-[340px] lg:mt-0 lg:max-w-none"
                />
              </div>
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

/* ============ SEÇÃO 2 — PROBLEMA ============ */

export function Problem() {
  return (
    <section id="problema" className="relative scroll-mt-8 bg-ivory-bright py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeader
            chapter="I"
            eyebrow="O problema real"
            lines={[
              <>Ganhar mais não resolve tudo</>,
              <>
                quando falta <em className="italic text-gold-deep">governo</em>
              </>,
            ]}
          />

          <div className="mt-8 max-w-xl space-y-5 text-[15.5px] leading-relaxed text-ink-soft">
            <Reveal>
              <p className="dropcap">
                Você pode trabalhar, aumentar sua renda e ainda continuar financeiramente
                desorganizado. Isso acontece porque{" "}
                <strong className="font-semibold text-ink">
                  ganhar dinheiro é apenas uma parte da equação
                </strong>
                .
              </p>
            </Reveal>
            <Reveal delay={70}>
              <p>
                Sem critérios para decidir, disciplina para produzir, organização para
                administrar e prudência para preservar, mais recursos podem apenas alimentar
                os mesmos padrões.
              </p>
            </Reveal>
            <Reveal delay={130}>
              <p>
                Por isso, antes de pensar somente em ganhar mais, existe uma pergunta
                anterior:
              </p>
              <blockquote className="mt-4 border-l-2 border-gold bg-ivory px-6 py-5 font-display text-lg font-medium italic leading-snug text-navy">
                “Como estou governando aquilo que já passa pelas minhas mãos?”
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Diagnóstico — o primeiro passo para observar a própria situação */}
        <div className="lg:col-span-5 lg:pt-6">
          <Reveal delay={180}>
            <img
              src={DIAGNOSTIC_IMAGE}
              alt="Mockup do Diagnóstico da Prosperidade Sábia"
              loading="lazy"
              decoding="async"
              className="mx-auto h-auto w-full max-w-[440px] object-contain"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 3 — BIG IDEA / VIRADA DE CRENÇA ============ */

export function BigIdea() {
  return (
    <section className="navy-grid relative overflow-hidden bg-navy-deep py-20 text-ivory-bright sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(203,167,91,0.09),transparent_60%)]"
      />
      <Scales
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 text-gold-soft/[0.06] sm:block"
        strokeWidth={2}
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          chapter="II"
          eyebrow="A virada de crença"
          tone="light"
          align="center"
          lines={[
            <>Antes de aprender a ganhar mais,</>,
            <>
              aprenda a <em className="italic text-gold-soft">governar</em>.
            </>,
          ]}
        />

        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-[15.5px] leading-relaxed text-ivory-dim">
            O diferencial da sabedoria associada a Salomão não está apenas em possuir
            recursos. Está em desenvolver{" "}
            <strong className="font-semibold text-ivory-bright">
              sabedoria para decidir, administrar e lidar
            </strong>{" "}
            com aquilo que passa pelas suas mãos.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <figure className="relative mx-auto mt-10 max-w-3xl border border-gold/40 px-6 py-10 text-center sm:px-12">
            <span
              aria-hidden="true"
              className="anim-seal absolute -top-6 left-1/2 -translate-x-1/2 bg-navy-deep px-4 font-display text-5xl leading-none text-gold-soft"
            >
              “
            </span>
            <blockquote className="font-display text-[clamp(1.35rem,3.8vw,2.1rem)] font-medium italic leading-[1.25] text-ivory-bright">
              Como desenvolver sabedoria para governar aquilo que passa pelas minhas mãos?
            </blockquote>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
