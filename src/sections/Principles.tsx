import { Reveal } from "../lib/motion";
import { Seal } from "../components/decor";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 5 — OS 7 PRINCÍPIOS (PREVIEW) ============ */

const PRINCIPLES = [
  {
    n: "I",
    title: "Sabedoria antes da riqueza",
    line: "Antes de tentar ganhar mais, aprenda a decidir melhor.",
    ref: "Pv 4.7",
  },
  {
    n: "II",
    title: "A Lei da Diligência",
    line: "Desejo sem execução não produz crescimento.",
    ref: "Pv 13.4",
  },
  {
    n: "III",
    title: "O Crescimento Progressivo",
    line: "Construção consistente em vez da busca por um grande golpe.",
    ref: "Pv 13.11",
  },
  {
    n: "IV",
    title: "A Lei da Administração",
    line: "Não basta ganhar. É preciso compreender o que acontece depois que o recurso entra.",
    ref: "Pv 27.23",
  },
  {
    n: "V",
    title: "A Lei da Integridade",
    line: "Não importa apenas o que foi conquistado, mas também como foi conquistado.",
    ref: "Pv 11.1",
  },
  {
    n: "VI",
    title: "A Lei da Generosidade",
    line: "Recursos também podem servir responsabilidades e outras pessoas.",
    ref: "Pv 11.25",
  },
];

export function Principles() {
  return (
    <section id="principios" className="hairline-b relative scroll-mt-8 bg-ivory-bright py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        {/* Coluna fixa */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <SectionHeader
              chapter="IV"
              eyebrow="A base do sistema"
              lines={[
                <>Os 7 Princípios</>,
                <>
                  da <em className="italic text-gold-deep">Prosperidade Sábia</em>
                </>,
              ]}
              sub="Cada princípio nasce de Provérbios e Eclesiastes e aponta para uma postura prática diante do trabalho, do dinheiro e dos recursos."
            />
            <Reveal delay={200}>
              <p className="mt-8 border-l-2 border-gold bg-ivory px-5 py-4 text-[13.5px] italic leading-relaxed text-ink-soft">
                No guia completo, cada princípio é conectado a reflexões e ferramentas de
                aplicação para decisões relacionadas a dinheiro, trabalho, recursos e
                propósito.
              </p>
              <Seal className="mt-10 hidden h-32 w-32 text-bronze/60 lg:block" />
            </Reveal>
          </div>
        </div>

        {/* Lista escaneável */}
        <div className="lg:col-span-8">
          <div className="grid gap-x-8 md:grid-cols-2">
            {PRINCIPLES.map((p, i) => (
              <Reveal key={p.n} delay={(i % 2) * 80}>
                <article className="group border-t border-ink/12 py-7 transition-colors duration-300 hover:bg-ivory md:px-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-3xl font-semibold leading-none text-gold-deep/35 transition-colors duration-300 group-hover:text-gold-deep">
                      {p.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] font-semibold leading-snug text-ink">
                        {p.title}
                      </h3>
                      <span className="font-display text-[12px] italic tracking-wide text-bronze">
                        {p.ref}
                      </span>
                    </div>
                  </div>
                  <p className="mt-3 border-l border-gold/50 pl-4 text-[14.5px] font-medium leading-relaxed text-navy md:ml-[52px]">
                    {p.line}
                  </p>
                </article>
              </Reveal>
            ))}

            {/* Princípio VII em destaque */}
            <Reveal delay={160} className="md:col-span-2">
              <article className="relative mt-2 border border-gold-deep/60 bg-navy px-7 py-8 shadow-[0_26px_55px_-32px_rgba(13,22,38,0.65)] sm:px-9">
                <div aria-hidden="true" className="pointer-events-none absolute inset-2 border border-gold/25" />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                  <span className="font-display text-4xl font-semibold leading-none text-gold-soft/50">
                    VII
                  </span>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold leading-snug text-ivory-bright">
                      A Lei do Propósito
                      <span className="ml-3 font-display text-[12px] font-normal italic tracking-wide text-gold-soft/80">
                        Ec 5.10
                      </span>
                    </h3>
                    <p className="mt-2 font-display text-[16.5px] font-medium italic leading-snug text-gold-soft">
                      “Tenha recursos sem deixar que os recursos governem você.”
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
