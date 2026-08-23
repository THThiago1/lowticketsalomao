import { Scales } from "./decor";

/* =========================================================
   Mockup principal: pilha editorial (guia + 2 ferramentas)
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
   Miniaturas dos entregáveis (Seção 8)
   ========================================================= */

export type MockKind =
  | "book"
  | "diagnostic"
  | "map"
  | "plan"
  | "xray"
  | "decision"
  | "doc";

export function MiniMock({ kind }: { kind: MockKind }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden border border-ink/12 bg-ivory-dim p-4"
    >
      {kind === "book" && <MockBook />}
      {kind === "diagnostic" && <MockDiagnostic />}
      {kind === "map" && <MockMap />}
      {kind === "plan" && <MockPlan />}
      {kind === "xray" && <MockXray />}
      {kind === "decision" && <MockDecision />}
      {kind === "doc" && <MockDoc />}
    </div>
  );
}

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`w-[82%] border border-ink/15 bg-ivory-bright shadow-[0_14px_30px_-16px_rgba(13,22,38,0.4)] ${className}`}
    >
      {children}
    </div>
  );
}

function MockBook() {
  return (
    <Frame className="rotate-[-2deg] bg-navy p-1.5">
      <div className="border border-gold/50 px-3 py-4 text-center">
        <p className="text-[7px] font-semibold uppercase tracking-[0.3em] text-gold-soft">
          Guia principal
        </p>
        <p className="mt-2 font-display text-[13px] font-semibold uppercase leading-tight text-ivory-bright">
          Os 7 Princípios
        </p>
        <p className="font-display text-[11px] italic text-gold-soft">da Prosperidade</p>
        <Scales className="mx-auto mt-2 h-6 w-6 text-gold-soft" strokeWidth={4.5} />
      </div>
    </Frame>
  );
}

function MockDiagnostic() {
  return (
    <Frame className="p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Diagnóstico da Prosperidade Sábia
      </p>
      <div className="mt-2.5 space-y-2">
        {[86, 54, 70, 38].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rotate-45 border border-gold-deep/60" />
            <span className="h-1.5 bg-ink/15" style={{ width: `${w}%` }} />
            <span className={`h-1.5 bg-gold`} style={{ width: `${100 - w}%`, opacity: 0.35 }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function MockMap() {
  return (
    <Frame className="p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Mapa S.A.L.O.M.
      </p>
      <div className="mt-3 flex items-center justify-between">
        {["S", "A", "L", "O", "M"].map((l, i) => (
          <span key={l} className="flex items-center gap-1">
            <span className="flex h-7 w-7 items-center justify-center border border-gold-deep/50 bg-ivory font-display text-[13px] font-semibold text-gold-deep">
              {l}
            </span>
            {i < 4 && <span className="h-px w-2 bg-gold-deep/40" />}
          </span>
        ))}
      </div>
      <div className="paper-lines mt-3 h-8 opacity-60" />
    </Frame>
  );
}

function MockPlan() {
  return (
    <Frame className="p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Plano Pouco a Pouco
      </p>
      <div className="mt-3 flex items-end gap-1.5">
        {[22, 30, 40, 52, 66, 82].map((h, i) => (
          <span
            key={i}
            className="flex-1 bg-gradient-to-t from-navy to-navy-soft"
            style={{ height: `${h * 0.55}px`, opacity: 0.55 + i * 0.07 }}
          />
        ))}
      </div>
      <div className="mt-2 h-px bg-gold/60" />
    </Frame>
  );
}

function MockXray() {
  return (
    <Frame className="p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Raio-X dos Recursos
      </p>
      <div className="mt-2.5 space-y-1.5">
        {[
          ["Entradas", 78, "bg-gold"],
          ["Saídas", 56, "bg-navy/70"],
          ["Compromissos", 40, "bg-navy/50"],
          ["Reservas", 26, "bg-bronze/70"],
        ].map(([label, w, color]) => (
          <div key={label as string} className="flex items-center gap-2">
            <span className="w-16 text-[7px] font-semibold uppercase tracking-wider text-ink-faint">
              {label}
            </span>
            <span className={`h-2 ${color}`} style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </Frame>
  );
}

function MockDecision() {
  return (
    <Frame className="p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Checklist da Decisão Sábia
      </p>
      <div className="mt-2.5 space-y-2">
        {["Antes de agir…", "Melhora meus recursos?", "Aumenta ordem?"].map((q, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="flex h-4 w-4 items-center justify-center border border-gold-deep/60 text-[8px] font-bold text-gold-deep">
              ?
            </span>
            <span className="text-[9px] italic text-ink-soft">{q}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function MockDoc() {
  return (
    <Frame className="relative p-3">
      <p className="border-b border-gold/50 pb-1.5 text-[8px] font-bold uppercase tracking-[0.22em] text-navy">
        Plano Pessoal
      </p>
      <div className="paper-lines mt-2.5 h-14 opacity-60" />
      <span className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-gold-deep/60 text-[8px] font-bold uppercase text-gold-deep">
        selo
      </span>
    </Frame>
  );
}
