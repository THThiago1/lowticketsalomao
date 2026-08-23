import type { ReactNode } from "react";
import { Reveal } from "../lib/motion";
import { ArrowRight, Diamond, Scales } from "./decor";

/* ---------- Botão de CTA reutilizável ---------- */

export function CTA({
  children,
  href = "#oferta",
  variant = "gold",
  full = false,
  size = "lg",
}: {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "navy" | "outline-dark" | "outline-light";
  full?: boolean;
  size?: "lg" | "md";
}) {
  const variants: Record<string, string> = {
    gold: "bg-gold text-navy-deep hover:bg-gold-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(13,22,38,0.35),0_10px_28px_-12px_rgba(138,106,43,0.55)]",
    navy: "bg-navy text-ivory-bright hover:bg-navy-soft shadow-[inset_0_0_0_1px_rgba(203,167,91,0.4),0_10px_28px_-12px_rgba(22,35,59,0.5)]",
    "outline-dark":
      "border border-ink/50 text-ink hover:border-gold-deep hover:text-gold-deep",
    "outline-light":
      "border border-ivory-bright/40 text-ivory-bright hover:border-gold-soft hover:text-gold-soft",
  };
  const sizes = {
    lg: "px-8 py-[17px] text-[12.5px] tracking-[0.2em] min-h-[56px]",
    md: "px-6 py-[13px] text-[11.5px] tracking-[0.18em] min-h-[48px]",
  };
  return (
    <a
      href={href}
      className={`group inline-flex ${
        full ? "w-full" : "w-full sm:w-auto"
      } items-center justify-center gap-3 text-center font-semibold uppercase transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.99] ${sizes[size]} ${variants[variant]}`}
    >
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1.5" />
    </a>
  );
}

/* ---------- Eyebrow / rótulo de capítulo ---------- */

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "gold";
  className?: string;
}) {
  const color =
    tone === "light"
      ? "text-gold-soft"
      : tone === "gold"
        ? "text-gold-deep"
        : "text-bronze";
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${color} ${className}`}
    >
      <span className="inline-block h-px w-8 bg-current opacity-70" />
      {children}
    </p>
  );
}

/* ---------- Cabeçalho de seção com máscara de linha ---------- */

export function SectionHeader({
  chapter,
  eyebrow,
  lines,
  sub,
  tone = "dark",
  align = "left",
  className = "",
}: {
  chapter?: string;
  eyebrow: string;
  lines: ReactNode[];
  sub?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`${
        align === "center" ? "mx-auto text-center" : ""
      } ${className}`}
    >
      <div
        className={`flex flex-wrap items-center gap-x-4 gap-y-2 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {chapter && (
          <span
            className={`eyebrow font-display normal-case tracking-[0.18em] ${
              dark ? "text-gold-deep/70" : "text-gold-soft/80"
            }`}
            style={{ letterSpacing: "0.18em" }}
          >
            Cap. {chapter}
          </span>
        )}
        {chapter && (
          <span
            className={`h-px w-10 ${dark ? "bg-gold-deep/40" : "bg-gold-soft/40"}`}
          />
        )}
        <Eyebrow tone={dark ? "gold" : "light"}>{eyebrow}</Eyebrow>
      </div>
      <h2
        className={`mt-5 font-display text-[clamp(1.9rem,4.6vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.01em] ${
          dark ? "text-ink" : "text-ivory-bright"
        }`}
      >
        {lines.map((line, i) => (
          <span
            key={i}
            className="mask-line"
            style={{ ["--rd" as string]: `${i * 90}ms` }}
          >
            <span>{line}</span>
          </span>
        ))}
      </h2>
      {sub && (
        <p
          className={`mt-5 max-w-xl text-[15.5px] leading-relaxed ${
            dark ? "text-ink-soft" : "text-ivory-dim"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}

/* ---------- Chip / etiqueta ---------- */

export function Tag({ children, tone = "gold" }: { children: ReactNode; tone?: "gold" | "navy" | "bronze" }) {
  const tones = {
    gold: "border-gold/50 text-gold-deep",
    navy: "border-navy/30 text-navy",
    bronze: "border-bronze/50 text-bronze",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 border px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] ${tones[tone]}`}
    >
      <Diamond className="h-[6px] w-[6px]" />
      {children}
    </span>
  );
}

/* ---------- Pergunta / citação em destaque ---------- */

export function QuestionCard({
  label,
  children,
  tone = "light",
}: {
  label: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative border-l-2 py-4 pl-5 pr-4 ${
        dark
          ? "border-gold-soft bg-navy-soft/40"
          : "border-gold bg-ivory-bright"
      }`}
    >
      <p
        className={`eyebrow mb-2 ${dark ? "text-gold-soft" : "text-bronze"}`}
      >
        {label}
      </p>
      <p
        className={`font-display text-lg font-medium italic leading-snug ${
          dark ? "text-ivory-bright" : "text-navy"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

/* ---------- Cadeia de conceitos (PRODUZIR → RETER …) ---------- */

export function Chain({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          <span
            className={`border px-3 py-2 font-display text-[13px] font-semibold uppercase tracking-[0.14em] ${
              dark
                ? "border-gold/50 bg-navy-deep/60 text-gold-soft"
                : "border-gold-deep/40 bg-ivory-bright text-navy"
            }`}
          >
            {item}
          </span>
          {i < items.length - 1 && (
            <ArrowRight
              className={`h-4 w-4 ${dark ? "text-gold-soft" : "text-gold-deep"}`}
            />
          )}
        </span>
      ))}
    </div>
  );
}

/* ---------- Marca da página (wordmark) ---------- */

export function Wordmark({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <a href="#topo" className="flex items-center gap-2.5">
      <Scales
        className={`h-5 w-5 shrink-0 sm:h-6 sm:w-6 ${dark ? "text-gold-deep" : "text-gold-soft"}`}
        strokeWidth={4}
      />
      <span
        className={`font-display text-[13px] font-semibold tracking-[0.08em] sm:text-[15px] ${
          dark ? "text-ink" : "text-ivory-bright"
        }`}
      >
        Prosperidade<span className="text-gold-deep">·</span>
        <span className={dark ? "text-gold-deep" : "text-gold-soft"}>Sábia</span>
      </span>
    </a>
  );
}
