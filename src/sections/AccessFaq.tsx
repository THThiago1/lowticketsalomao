import { useState } from "react";
import { Reveal } from "../lib/motion";
import { Check, Diamond } from "../components/decor";
import { SectionHeader } from "../components/ui";
import { OFFER } from "../config/offer";

/* ============ SEÇÃO 14 — ACESSO / ENTREGA ============ */

const STEPS = [
  {
    num: "1",
    title: "Compra",
    text: "Finalize sua compra pelo checkout.",
  },
  {
    num: "2",
    title: "Acesso",
    text: "Após a confirmação do pagamento, você recebe as instruções para acessar o material digital.",
  },
  {
    num: "3",
    title: "Aplicação",
    text: "Comece pelo diagnóstico e utilize os materiais no seu próprio ritmo.",
  },
];

const INDICATORS = [
  "Produto digital",
  "Acesso digital",
  "Consulte pelo celular, tablet ou computador",
];

export function Access() {
  return (
    <section id="acesso" className="hairline-b relative scroll-mt-8 bg-ivory-bright py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          chapter="XII"
          eyebrow="Entrega"
          lines={[
            <>
              Como você recebe o <em className="italic text-gold-deep">material</em>
            </>,
          ]}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative h-full border border-ink/15 bg-ivory px-6 py-7">
                <span className="font-display text-4xl font-semibold text-gold-deep/30">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{step.text}</p>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-3 top-1/2 z-10 hidden h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-gold-deep bg-ivory md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <ul className="mt-8 flex flex-wrap gap-3">
            {INDICATORS.map((label) => (
              <li
                key={label}
                className="flex items-center gap-2.5 border border-gold-deep/40 bg-ivory px-4 py-2.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-navy"
              >
                <Check className="h-3.5 w-3.5 text-gold-deep" strokeWidth={3} />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 15 — FAQ ============ */

type FaqItem = { q: string; a: string };

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Isso é um curso de investimentos?",
    a: "Não. O material possui caráter educacional e trabalha princípios bíblicos relacionados a sabedoria, trabalho, administração, integridade, generosidade e propósito. Não fornece recomendação de investimento.",
  },
  {
    q: "Preciso entender de finanças?",
    a: "Não. O material foi estruturado para ser compreendido sem conhecimento técnico avançado de finanças.",
  },
  {
    q: "O produto ensina como ficar rico?",
    a: "Não. A proposta não é prometer enriquecimento. O material oferece princípios e ferramentas para ajudar a refletir, organizar e revisar a maneira como você lida com recursos e decisões.",
  },
  {
    q: "O que eu recebo?",
    a: "Você recebe o guia principal Os 7 Princípios da Prosperidade de Salomão e seis ferramentas práticas de aplicação.",
  },
  {
    q: "Como o Mapa S.A.L.O.M. funciona?",
    a: "É uma estrutura de cinco perguntas criada para ajudar você a revisar uma decisão antes de agir, observando sabedoria, administração, trabalho, ordem e mordomia.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. Os materiais são digitais, em formato pensado para leitura em celular, tablet ou computador.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Após a confirmação do pagamento, você recebe as instruções de acesso conforme o processo de entrega configurado.",
  },
  {
    q: "Qual é o valor?",
    a: `O acesso completo custa ${OFFER.priceDisplay}. Pagamento único.`,
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  // A pergunta de garantia só aparece quando uma política oficial for configurada
  const items: FaqItem[] = OFFER.guaranteeText
    ? [...FAQ_ITEMS, { q: "Tem garantia?", a: OFFER.guaranteeText }]
    : FAQ_ITEMS;

  return (
    <section id="faq" className="relative scroll-mt-8 bg-ivory py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              chapter="XIII"
              eyebrow="Perguntas frequentes"
              lines={[
                <>Antes de decidir,</>,
                <>
                  pergunte <em className="italic text-gold-deep">sem pressa</em>
                </>,
              ]}
            />
            <Reveal delay={160}>
              <p className="mt-7 max-w-xs border-l-2 border-gold bg-ivory-bright px-5 py-4 text-[13.5px] italic leading-relaxed text-ink-soft">
                Decisão sábia começa com informação clara. Se restar alguma dúvida, este é
                o lugar.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-ink/15">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={Math.min(i * 40, 240)}>
                  <div className="border-b border-ink/15">
                    <h3>
                      <button
                        type="button"
                        id={`faq-btn-${i}`}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-5 py-5 text-left transition-colors hover:text-gold-deep"
                      >
                        <span
                          className={`font-display text-[16.5px] font-semibold leading-snug transition-colors ${
                            isOpen ? "text-gold-deep" : "text-ink"
                          }`}
                        >
                          {item.q}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`relative flex h-8 w-8 shrink-0 items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "rotate-45 border-gold-deep text-gold-deep"
                              : "border-ink/25 text-ink-soft"
                          }`}
                        >
                          <span className="absolute h-3.5 w-px bg-current" />
                          <span className="absolute h-px w-3.5 bg-current" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                      hidden={!isOpen}
                    >
                      <p className="max-w-2xl pb-6 pr-4 text-[14.5px] leading-relaxed text-ink-soft">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200}>
            <p className="mt-8 flex items-center gap-3 text-[12.5px] font-medium uppercase tracking-[0.14em] text-ink-faint">
              <Diamond className="text-gold-deep" />
              Acesso completo por{" "}
              <span className="font-bold text-gold-deep">{OFFER.priceDisplay}</span> ·
              pagamento único
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
