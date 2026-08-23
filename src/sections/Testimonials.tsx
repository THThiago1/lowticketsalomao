import { useEffect, useState } from "react";
import { Reveal } from "../lib/motion";
import { XMark } from "../components/decor";
import { SectionHeader } from "../components/ui";

/* ============ SEÇÃO 12 — DEPOIMENTOS REAIS ============
 *
 * ⚠️ LEIA ANTES DE EDITAR
 * ─────────────────────────────────────────────────────
 * Adicione APENAS depoimentos reais e autorizados por escrito.
 *
 * 1. Salve os prints (WhatsApp, Instagram, mensagens, e-mails)
 *    na pasta /public/depoimentos/ — de preferência em .webp,
 *    com largura entre 700px e 1000px.
 * 2. Cadastre cada arquivo no array abaixo, com um texto
 *    alternativo (alt) descritivo.
 *
 * Enquanto o array estiver vazio, esta seção NÃO é exibida
 * ao público — nenhuma área vazia, placeholder ou exemplo
 * fictício aparece na página.
 *
 * Nunca utilize nomes inventados, fotos fake, estrelas
 * simuladas ou números de compradores fictícios.
 * ───────────────────────────────────────────────────── */

type Testimonial = { image: string; alt: string };

const TESTIMONIALS: Testimonial[] = [
  // Exemplo de configuração futura (descomente e adapte):
  // { image: "/depoimentos/depoimento-01.webp", alt: "Print de depoimento real de cliente sobre o material" },
  // { image: "/depoimentos/depoimento-02.webp", alt: "Print de mensagem real de cliente sobre o Mapa S.A.L.O.M." },
];

export function Testimonials() {
  const [zoom, setZoom] = useState<number | null>(null);

  // Fecha o lightbox com a tecla Escape
  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom]);

  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="hairline-b relative bg-ivory-bright py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Quem já aplicou"
          align="center"
          lines={[
            <>
              Depoimentos <em className="italic text-gold-deep">reais e autorizados</em>
            </>,
          ]}
          sub="Prints e mensagens enviados por clientes, publicados com autorização. Toque em uma imagem para ampliar."
        />

        <div className="mt-12 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.image} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setZoom(i)}
                aria-label={`Ampliar imagem: ${t.alt}`}
                className="group block w-full border border-bronze/40 bg-ivory p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:border-gold-deep/60 hover:shadow-[0_24px_50px_-28px_rgba(13,22,38,0.5)]"
              >
                <img
                  src={t.image}
                  alt={t.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full border border-ink/10 bg-ivory-bright object-contain"
                />
                <span className="mt-3 block text-[10px] font-bold uppercase tracking-[0.2em] text-bronze">
                  Toque para ampliar
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox leve e acessível */}
      {zoom !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={TESTIMONIALS[zoom].alt}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-navy-deep/95 p-5"
          onClick={() => setZoom(null)}
        >
          <img
            src={TESTIMONIALS[zoom].image}
            alt={TESTIMONIALS[zoom].alt}
            className="max-h-[86vh] max-w-full border border-gold/40 object-contain shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={() => setZoom(null)}
            aria-label="Fechar imagem ampliada"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-gold/50 bg-navy text-gold-soft transition-colors hover:bg-gold hover:text-navy-deep"
          >
            <XMark className="h-5 w-5" />
          </button>
        </div>
      )}
    </section>
  );
}
