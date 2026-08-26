import { Scales } from "./decor";

/* =========================================================
   Mockup principal (Hero): pilha editorial (guia + 2 folhas)
   ========================================================= */

export function ProductMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* Sombra de apoio */}
      <div className="absolute -bottom-6 left-1/2 h-8 w-[72%] -translate-x-1/2 rounded-[50%] bg-navy-deep/25 blur-xl" />

      <div className="anim-float relative">
        {/* Folha de trás — Diagnóstico */}
        <div className="absolute -left-4 top-8 hidden w-[62%] -rotate-[7deg] border border-ink/15 bg-ivory-bright p-4 shadow-[0_18px_40px_-18px_rgba(13,22,38,0.45)] sm:block">
          <p className="border-b border-gold/50 pb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-navy">
            Diagnóstico
          </p>
          <div className="paper-lines mt-3 h-24 opacity-70" />
        </div>

        {/* Folha de trás — Mapa S.A.L.O.M. */}
        <div className="absolute -right-3 top-16 hidden w-[58%] rotate-[6deg] border border-ink/15 bg-ivory-bright p-4 shadow-[0_18px_40px_-18px_rgba(13,22,38,0.45)] sm:block">
          <p className="border-b border-gold/50 pb-2 text-[9px] font-bold uppercase tracking-[0.24em] text-navy">
            Mapa S.A.L.O.M.
          </p>
          <div className="mt-3 flex justify-between">
            {["S", "A", "L", "O", "M"].map((l) => (
              <span
                key={l}
                className="flex h-7 w-7 items-center justify-center border border-gold-deep/40 font-display text-[12px] font-semibold text-gold-deep"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="paper-lines mt-3 h-14 opacity-60" />
        </div>

        {/* Guia principal */}
        <div className="relative mx-auto w-[76%] sm:w-[72%]">
          {/* Lombada / páginas */}
          <div className="page-edges absolute -right-2 bottom-1 top-1 w-2.5 border border-ink/20" />
          <div className="relative border border-gold-deep/60 bg-navy p-2 shadow-[0_30px_60px_-24px_rgba(13,22,38,0.65)]">
            <div className="relative border border-gold/50 px-5 py-7 sm:px-6 sm:py-8">
              {/* brilho da lombada */}
              <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-navy-deep/80 to-transparent" />

              <p className="text-center text-[8.5px] font-semibold uppercase tracking-[0.34em] text-gold-soft/90 sm:text-[9.5px]">
                Provérbios · Eclesiastes
              </p>

              <div className="mx-auto mt-4 h-px w-12 bg-gold/60" />

              <p className="mt-5 text-center font-display text-[clamp(1.15rem,3vw,1.7rem)] font-semibold uppercase leading-[1.12] tracking-[0.04em] text-ivory-bright">
                Os 7
                <br />
                Princípios
              </p>
              <p className="mt-1 text-center font-display text-[clamp(0.95rem,2.4vw,1.25rem)] italic leading-tight text-gold-soft">
                da Prosperidade
                <br />
                de Salomão
              </p>

              <div className="mt-5 flex justify-center">
                <Scales className="h-12 w-12 text-gold-soft sm:h-14 sm:w-14" strokeWidth={3.6} />
              </div>

              <div className="mx-auto mt-5 h-px w-12 bg-gold/60" />

              <p className="mt-4 text-center text-[8px] font-semibold uppercase tracking-[0.26em] text-ivory-dim/80 sm:text-[9px]">
                Guia principal + 6 ferramentas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Imagens reais dos mockups (Google Drive — link direto)
   Os arquivos precisam estar compartilhados como
   "qualquer pessoa com o link" para renderizar.
   ========================================================= */

/** Converte o ID do arquivo do Drive em URL de imagem direta */
const drive = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

/** Box da coleção completa — usado no Hero e na seção "O sistema completo" */
export const COLLECTION_IMAGE = drive("1pNnvF_StoF5NFMPlqRb0av-khknfGJyd");

/** Diagnóstico da Prosperidade Sábia — usado na seção "O problema real" */
export const DIAGNOSTIC_IMAGE = drive("1bGrFQ-bBlqV_Eja5wyzq-vXprRdpxOdR");

export type MockKind =
  | "book"
  | "diagnostic"
  | "map"
  | "plan"
  | "xray"
  | "decision"
  | "doc";

const MOCKUP_IMAGES: Record<MockKind, string> = {
  book: drive("1RkTzFwcucKpFtZR5WSp1WYi2dZToqojz"),
  diagnostic: drive("1bGrFQ-bBlqV_Eja5wyzq-vXprRdpxOdR"),
  map: drive("1NT3TFUNdS3v474_XvCG1R9XZ7cLNxPd3"),
  plan: drive("1vDU8eFJXX6_8kI1kCJ5_RAuXIleGDz0p"),
  xray: drive("1SX3ZSsx4-KSAQgGKPVeqr9V0bjIc-AAn"),
  decision: drive("1X1F9PzJ7vjuDOEmMT5w71DuWnKpuxq08"),
  doc: drive("18cBVklHEkn_apyfvsnKY8CtfVLMiuTo-"),
};

const MOCKUP_ALTS: Record<MockKind, string> = {
  book: "Mockup do Guia Principal Os 7 Princípios da Prosperidade de Salomão",
  diagnostic: "Mockup do Diagnóstico da Prosperidade Sábia",
  map: "Mockup do Mapa S.A.L.O.M.",
  plan: "Mockup do Plano Pouco a Pouco",
  xray: "Mockup do Raio-X dos Seus Recursos",
  decision: "Mockup do Checklist da Decisão Financeira Sábia",
  doc: "Mockup do Plano Pessoal de Prosperidade Sábia",
};

/* =========================================================
   Miniaturas dos entregáveis (Seção 8 e Seção 4)
   ========================================================= */

export function MiniMock({ kind }: { kind: MockKind }) {
  return (
    <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-ink/12 bg-ivory-dim p-3 sm:p-4">
      <img
        src={MOCKUP_IMAGES[kind]}
        alt={MOCKUP_ALTS[kind]}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-contain"
      />
    </div>
  );
}
