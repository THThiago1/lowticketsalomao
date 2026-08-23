import { useId } from "react";

/* Ícones e ornamentos editoriais desenhados à mão (SVG inline). */

type IconProps = { className?: string; strokeWidth?: number };

export function Scales({ className = "", strokeWidth = 3.2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="50" cy="11" r="3.4" />
      <path d="M50 15 L50 79" />
      <path d="M20 27 L80 27" />
      <path d="M20 27 L11 46 M20 27 L29 46" />
      <path d="M9 46 a11 11 0 0 0 22 0 Z" />
      <path d="M80 27 L71 46 M80 27 L89 46" />
      <path d="M69 46 a11 11 0 0 0 22 0 Z" />
      <path d="M36 79 H64" />
      <path d="M30 86 H70" />
    </svg>
  );
}

export function ArrowDown({ className = "", strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3 L12 20" />
      <path d="M5.5 13.5 L12 20 L18.5 13.5" />
    </svg>
  );
}

export function ArrowRight({ className = "", strokeWidth = 2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 12 H20" />
      <path d="M14 5.5 L20.5 12 L14 18.5" />
    </svg>
  );
}

export function Check({ className = "", strokeWidth = 2.4 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 12.5 L10 18 L19.5 6.5" />
    </svg>
  );
}

export function XMark({ className = "", strokeWidth = 2.2 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  );
}

/** Losango editorial usado em marcadores e divisores. */
export function Diamond({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-[7px] w-[7px] rotate-45 border border-current ${className}`}
    />
  );
}

/** Divisor ornamental: filete — losango — filete. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-current opacity-25" />
      <span className="h-[5px] w-[5px] rotate-45 bg-current opacity-70" />
      <Diamond className="scale-125 opacity-90" />
      <span className="h-[5px] w-[5px] rotate-45 bg-current opacity-70" />
      <span className="h-px flex-1 bg-current opacity-25" />
    </div>
  );
}

/** Selo circular com texto em anel (gira lentamente). */
export function Seal({
  className = "",
  spin = true,
  center,
}: {
  className?: string;
  spin?: boolean;
  center?: React.ReactNode;
}) {
  const id = useId();
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 200 200"
        className={`h-full w-full ${spin ? "anim-spin-slow" : ""}`}
      >
        <defs>
          <path
            id={`${id}-circle`}
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <circle
          cx="100"
          cy="100"
          r="96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.55"
        />
        <circle
          cx="100"
          cy="100"
          r="62"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.45"
        />
        <text
          fill="currentColor"
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            fontWeight: 600,
          }}
        >
          <textPath href={`#${id}-circle`}>
            SABEDORIA · TRABALHO · ORDEM · INTEGRIDADE · PROPÓSITO ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {center ?? <Scales className="h-[34%] w-[34%]" strokeWidth={4} />}
      </div>
    </div>
  );
}

/** Cantoneiras de moldura antiga para caixas destacadas. */
export function Corners({ className = "" }: { className?: string }) {
  const base = "absolute h-5 w-5 border-gold";
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-2 ${className}`}>
      <span className={`${base} left-0 top-0 border-l border-t`} />
      <span className={`${base} right-0 top-0 border-r border-t`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}

/** Moeda antiga discreta com o numeral VII. */
export function Coin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2.5" opacity="0.7" />
      <circle cx="50" cy="50" r="37" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.5" strokeDasharray="3 4" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="currentColor"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "26px",
          fontWeight: 600,
          letterSpacing: "2px",
        }}
      >
        VII
      </text>
    </svg>
  );
}
