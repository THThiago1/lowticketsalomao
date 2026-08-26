import { Reveal, useScrollPast } from "../lib/motion";
import { Corners, Diamond, Scales, Seal } from "../components/decor";
import { CTA, Chain, SectionHeader, Wordmark } from "../components/ui";
import { OFFER } from "../config/offer";

/* ============ SEÇÃO 13 — OFERTA ============ */

const STACK = [
  "Guia principal — Os 7 Princípios da Prosperidade de Salomão",
  "Diagnóstico da Prosperidade Sábia",
  "Mapa S.A.L.O.M.",
  "Plano Pouco a Pouco",
  "Raio-X dos Seus Recursos",
  "Checklist da Decisão Financeira Sábia",
  "Plano Pessoal de Prosperidade Sábia",
];

const OFFER_PATH = ["Compreender", "Diagnosticar", "Decidir", "Organizar", "Implementar"];

export function Offer() {
  return (
    <section
      id="oferta"
      className="navy-grid relative scroll-mt-6 overflow-hidden bg-navy-deep py-20 text-ivory-bright sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(203,167,91,0.1),transparent_55%)]"
      />
      <Seal className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 text-gold-soft/15" spin={false} />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          chapter="XI"
          eyebrow="A oferta"
          tone="light"
          align="center"
          lines={[
            <>Um sistema completo</>,
            <>
              por <em className="italic text-gold-soft">{OFFER.priceDisplay}</em>
            </>,
          ]}
          sub="Você não está adquirindo apenas um material para ler. Está recebendo um percurso para compreender os princípios, diagnosticar sua situação, revisar decisões, organizar recursos e construir seu próprio plano de aplicação."
        />

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <Chain items={OFFER_PATH} tone="dark" />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="relative mt-10 border border-gold/45 bg-navy px-6 py-9 sm:px-12 sm:py-12">
            <Corners />
            <p className="eyebrow text-center text-gold-soft">O que está incluído</p>
            <ul className="mx-auto mt-6 max-w-xl space-y-3">
              {STACK.map((item, i) => (
                <li key={item} className="flex items-baseline gap-3.5">
                  <span className="font-display text-lg font-semibold leading-none text-gold-soft">
                    {i === 0 ? "=" : "+"}
                  </span>
                  <span
                    className={`flex-1 text-[14.5px] leading-relaxed ${
                      i === 0 ? "font-semibold text-ivory-bright" : "text-ivory-dim"
                    }`}
                  >
                    {item}
                  </span>
                  <span className="shrink-0 font-display text-[13.5px] font-semibold leading-none text-gold-soft">
                    R$ {OFFER.itemValues[i]}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ivory-dim/50">
              Valores individuais de referência
            </p>

            <div className="mt-10 border-t border-gold/25 pt-8 text-center">
              <p className="eyebrow text-ivory-dim/70">Valor de referência da coleção</p>
              <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-ivory-dim/45">
                Soma dos sete materiais individualmente
              </p>
              <p className="mt-4">
                <s className="font-display text-[clamp(1.35rem,3.5vw,1.8rem)] font-medium text-ivory-dim/50 line-through decoration-bronze decoration-2">
                  {OFFER.collectionReferenceDisplay}
                </s>
              </p>
              <p className="mt-6 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ivory-dim/70">
                Hoje, você recebe a coleção completa por:
              </p>
              <p className="mt-3 font-display text-[clamp(2.7rem,9vw,4.2rem)] font-semibold leading-none tracking-tight text-gold-soft">
                {OFFER.priceDisplay}
              </p>
              <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ivory-dim/60">
                Pagamento único
              </p>
              <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ivory-dim/60">
                Acesso digital · Instruções enviadas por e-mail após a confirmação do
                pagamento
              </p>

              <div className="mt-8 flex justify-center">
                <CTA href={OFFER.checkoutUrl} dataCta="offer">
                  Quero acessar o método por {OFFER.priceDisplay}
                </CTA>
              </div>

              <p className="mx-auto mt-6 max-w-md text-[13px] italic leading-relaxed text-ivory-dim/70">
                Comece pelo diagnóstico, identifique o princípio que hoje merece mais
                atenção e avance pelas ferramentas no seu próprio ritmo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 16 — ENCERRAMENTO ============ */

const VERBS = [
  "Produzir.",
  "Administrar.",
  "Construir.",
  "Decidir.",
  "Preservar integridade.",
  "Repartir.",
  "Desfrutar com propósito.",
];

export function Closing() {
  return (
    <section className="hairline-b relative overflow-hidden bg-ivory py-20 sm:py-28">
      <Seal
        className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 text-gold-deep/10"
        spin={false}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeader
            chapter="XIV"
            eyebrow="Para terminar"
            lines={[
              <>Você vai continuar lidando</>,
              <>
                com dinheiro e recursos <em className="italic text-gold-deep">por toda a vida</em>.
              </>,
            ]}
            sub="A questão é com quais princípios você pretende tomar essas decisões."
          />
          <Reveal delay={200}>
            <p className="mt-8 max-w-md font-display text-[clamp(1.15rem,2.6vw,1.45rem)] font-medium leading-snug text-navy">
              Comece pelos princípios.{" "}
              <em className="italic text-gold-deep">Depois transforme-os em aplicação.</em>
            </p>
            <div className="mt-8">
              <CTA href={OFFER.checkoutUrl} dataCta="closing">
                Quero acessar o método por {OFFER.priceDisplay}
              </CTA>
            </div>
            <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.16em] text-ink-faint">
              Guia + 6 ferramentas · Pagamento único · {OFFER.priceDisplay}
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:pt-6">
          <div className="space-y-0">
            {VERBS.map((v, i) => (
              <Reveal key={v} delay={i * 70}>
                <p
                  className={`border-l-2 border-gold/70 py-2 pl-5 font-display text-[clamp(1.2rem,2.8vw,1.6rem)] font-medium leading-snug text-navy transition-transform duration-300 hover:translate-x-1.5 sm:pl-6 ${
                    i % 2 === 1 ? "sm:ml-10" : ""
                  }`}
                >
                  {v}
                </p>
              </Reveal>
            ))}
            <Reveal delay={VERBS.length * 70 + 60}>
              <p className="mt-6 border-l-2 border-navy py-2 pl-5 font-display text-[clamp(1.25rem,3vw,1.7rem)] font-semibold italic leading-snug text-ink sm:pl-6">
                E quem estará no controle: você ou o dinheiro?
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 17 — AVISO DE CONTEXTO ============ */

export function Disclaimer() {
  return (
    <section className="bg-ivory-dim/60 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="border border-ink/20 bg-ivory-bright px-6 py-8 sm:px-10">
            <p className="eyebrow flex items-center gap-3 text-bronze">
              <Scales className="h-4 w-4" strokeWidth={4.5} />
              Aviso de contexto
            </p>
            <div className="mt-5 space-y-4 text-[13px] leading-relaxed text-ink-soft">
              <p>
                Conteúdo educacional e informativo. Este material não constitui
                aconselhamento financeiro, recomendação de investimento nem promessa de
                resultado econômico. Resultados e aplicações podem variar conforme
                contexto, decisões e execução de cada pessoa.
              </p>
              <p>
                O nome da oferta utiliza Salomão como referência à sabedoria salomônica. O
                material não afirma que todas as frases de Provérbios foram pessoalmente
                escritas por Salomão.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ RODAPÉ ============ */

export function Footer() {
  return (
    <footer className="border-t border-gold/25 bg-navy-deep pb-[max(7.5rem,env(safe-area-inset-bottom))] pt-12 text-ivory-dim lg:pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Wordmark tone="light" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory-dim/50">
            Sabedoria · Trabalho · Ordem · Integridade · Generosidade · Propósito
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-ivory-bright/10 pt-6 text-[12px] text-ivory-dim/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Prosperidade Sábia. Todos os direitos reservados.</p>
          <p className="flex items-center gap-2.5">
            <Diamond className="shrink-0 text-gold-soft/50" />
            <span className="max-w-md italic">
              Conteúdo educacional. Não constitui aconselhamento financeiro nem promessa de
              resultado econômico.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ============ CTA FIXO (mobile) ============ */

export function StickyCTA() {
  const visible = useScrollPast(620);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[70] border-t border-gold/40 bg-navy-deep/[0.97] px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-12px_rgba(13,22,38,0.6)] backdrop-blur transition-transform duration-500 lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-xl items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-[13px] font-semibold leading-tight text-ivory-bright">
            Guia + 6 ferramentas
          </p>
          <p className="font-display text-[15px] font-semibold leading-tight text-gold-soft">
            {OFFER.priceDisplay}
            <span className="ml-1.5 text-[9px] font-body font-semibold uppercase tracking-[0.14em] text-ivory-dim/60">
              · Pagamento único
            </span>
          </p>
        </div>
        <div className="shrink-0">
          <CTA href={OFFER.checkoutUrl} dataCta="sticky" size="md">
            Quero acessar
          </CTA>
        </div>
      </div>
    </div>
  );
}
