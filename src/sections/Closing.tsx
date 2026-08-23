import { Reveal, useScrollPast } from "../lib/motion";
import { Corners, Diamond, Scales, Seal } from "../components/decor";
import { CTA, SectionHeader, Wordmark } from "../components/ui";

/* ============ SEÇÃO 12 — DEPOIMENTOS ILUSTRATIVOS ============ */

const EXAMPLES = [
  "O que mais mudou foi perceber que eu pensava em prosperidade apenas como ganhar mais. O material me fez olhar também para decisão, administração e propósito.",
  "O Mapa S.A.L.O.M. tornou muito mais simples revisar uma decisão financeira antes de agir por impulso.",
];

export function Testimonials() {
  return (
    <section className="hairline-b bg-ivory-bright py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Transparência antes de tudo"
          lines={[
            <>
              Exemplos <em className="italic text-gold-deep">ilustrativos</em>
            </>,
          ]}
          sub="Nenhuma promessa de resultado: apenas uma amostra do tipo de reflexão que o material provoca."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {EXAMPLES.map((quote, i) => (
            <Reveal key={i} delay={i * 120}>
              <figure className="relative h-full border border-bronze/40 bg-ivory px-7 py-8 sm:px-9">
                <span className="inline-block border border-bronze/60 bg-bronze/10 px-2.5 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-bronze">
                  Exemplo ilustrativo fictício — não representa cliente real
                </span>
                <blockquote className="mt-5 font-display text-[17.5px] font-medium italic leading-[1.55] text-navy">
                  “{quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3 text-bronze">
                  <span className="h-px w-8 bg-current opacity-50" />
                  <Diamond />
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240}>
          <p className="mt-8 text-center text-[12px] italic text-ink-faint">
            Nota editorial: substituir estes exemplos por depoimentos reais somente quando
            houver provas reais autorizadas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

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

export function Offer() {
  return (
    <section id="oferta" className="navy-grid relative scroll-mt-6 overflow-hidden bg-navy-deep py-20 text-ivory-bright sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(203,167,91,0.1),transparent_55%)]"
      />
      <Seal className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 text-gold-soft/15" spin={false} />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeader
          chapter="XII"
          eyebrow="A oferta"
          tone="light"
          align="center"
          lines={[
            <>
              Comece pelos <em className="italic text-gold-soft">princípios</em>
            </>,
          ]}
          sub="Um único acesso, todo o percurso: guia principal e as seis ferramentas de aplicação."
        />

        <Reveal delay={150}>
          <div className="relative mt-12 border border-gold/45 bg-navy px-6 py-9 sm:px-12 sm:py-12">
            <Corners />
            <div className="flex items-start gap-5">
              <Scales className="mt-1 hidden h-10 w-10 shrink-0 text-gold-soft sm:block" strokeWidth={3.6} />
              <div>
                <p className="eyebrow text-gold-soft">Os 7 Princípios da Prosperidade de Salomão</p>
                <ul className="mt-5 space-y-3">
                  {STACK.map((item, i) => (
                    <li key={item} className="flex items-start gap-3.5">
                      <span className="mt-[3px] font-display text-lg font-semibold leading-none text-gold-soft">
                        {i === 0 ? "=" : "+"}
                      </span>
                      <span
                        className={`text-[14.5px] leading-relaxed ${
                          i === 0
                            ? "font-semibold text-ivory-bright"
                            : "text-ivory-dim"
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 border-t border-gold/25 pt-8 text-center">
              <p className="eyebrow text-ivory-dim/70">Investimento</p>
              {/* Preço definido pelo produtor — nunca inventado */}
              <p className="mx-auto mt-4 w-fit border-2 border-dashed border-gold/60 px-8 py-4 font-display text-[clamp(1.6rem,4.5vw,2.4rem)] font-semibold tracking-wide text-ivory-bright">
                [INSERIR PREÇO DEFINIDO]
              </p>
              <p className="mt-4 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-ivory-dim/60">
                Acesso digital · Entrega imediata por e-mail
              </p>

              <div className="mt-8 flex justify-center">
                <CTA variant="gold" size="lg">
                  Quero aprender a governar melhor meus recursos
                </CTA>
              </div>

              <p className="mx-auto mt-6 max-w-md text-[12.5px] italic leading-relaxed text-ivory-dim/60">
                Sem contagem regressiva, sem escassez artificial, sem pressão inventada.
                Se os princípios fazem sentido para você, este é o momento certo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 14 — ENCERRAMENTO ============ */

const QUESTIONS = [
  "Como vou produzir?",
  "Como vou administrar?",
  "Como vou construir?",
  "Como vou decidir?",
  "Como vou agir com integridade?",
  "Como vou repartir?",
  "Como vou desfrutar?",
];

/* Escalonamento só a partir de sm — em telas estreitas a margem zerada evita corte */
const STAIRS = [
  "",
  "sm:ml-[14px]",
  "sm:ml-[28px]",
  "sm:ml-[42px]",
  "sm:ml-[56px]",
  "sm:ml-[70px]",
  "sm:ml-[84px]",
];

export function Closing() {
  return (
    <section className="hairline-b relative overflow-hidden bg-ivory py-20 sm:py-28">
      <Seal
        className="pointer-events-none absolute -right-24 bottom-8 h-72 w-72 text-gold-deep/10"
        spin={false}
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            chapter="XIII"
            eyebrow="Para terminar"
            lines={[
              <>Você provavelmente continuará</>,
              <>
                lidando com dinheiro <em className="italic text-gold-deep">por toda a vida</em>
              </>,
            ]}
          />
          <Reveal delay={160}>
            <p className="mt-7 max-w-md text-[15.5px] leading-relaxed text-ink-soft">
              Então talvez a pergunta mais importante não seja apenas{" "}
              <em className="font-display font-medium text-navy">“Como ganhar mais?”</em> — mas
              também:
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-0">
            {QUESTIONS.map((q, i) => (
              <Reveal key={q} delay={i * 70}>
                <p
                  className={`${STAIRS[i]} border-l-2 border-gold/70 py-2.5 pl-5 font-display text-[clamp(1.15rem,2.6vw,1.5rem)] font-medium leading-snug text-navy transition-transform duration-300 hover:translate-x-1.5 sm:pl-6`}
                >
                  {q}
                </p>
              </Reveal>
            ))}
            <Reveal delay={QUESTIONS.length * 70 + 60}>
              <p
                className="mt-5 border-l-2 border-navy py-2.5 pl-5 font-display text-[clamp(1.25rem,3vw,1.7rem)] font-semibold italic leading-snug text-ink sm:ml-[84px] sm:pl-6"
              >
                E quem estará no controle: eu ou o dinheiro?
              </p>
            </Reveal>
          </div>

          <Reveal delay={620}>
            <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Se você quer transformar princípios bíblicos de sabedoria em uma estrutura
              prática para melhorar a maneira como lida com seus recursos,{" "}
              <strong className="font-semibold text-ink">esse é o próximo passo</strong>.
            </p>
            <div className="mt-7">
              <CTA variant="navy">Quero conhecer os 7 princípios</CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============ SEÇÃO 15 — AVISO DE CONTEXTO ============ */

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
                Conteúdo educacional, religioso e informativo. Não constitui
                aconselhamento financeiro individual, recomendação de investimento,
                promessa de retorno ou garantia de resultado econômico. Resultados e
                aplicações variam conforme renda, contexto, decisões e execução.
                Aplicações contemporâneas de conceitos como orçamento, patrimônio,
                diversificação ou organização financeira não devem ser confundidas com
                citações literais da Bíblia.
              </p>
              <p>
                O nome da oferta utiliza Salomão como referência à sabedoria salomônica.
                O material não afirma que todas as frases de Provérbios foram pessoalmente
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
    <footer className="border-t border-gold/25 bg-navy-deep pb-28 pt-12 text-ivory-dim lg:pb-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Wordmark tone="light" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ivory-dim/50">
            Sabedoria · Trabalho · Ordem · Integridade · Generosidade · Propósito
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-ivory-bright/10 pt-6 text-[12px] text-ivory-dim/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Prosperidade Sábia. Todos os direitos reservados.</p>
          <p className="max-w-md italic">
            Conteúdo educacional. Não constitui aconselhamento financeiro nem promessa de
            resultado econômico.
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
            Os 7 Princípios da Prosperidade de Salomão
          </p>
          <p className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-gold-soft/80">
            Guia + 6 ferramentas práticas
          </p>
        </div>
        <div className="shrink-0">
          <CTA size="md" variant="gold">
            Conhecer
          </CTA>
        </div>
      </div>
    </div>
  );
}
