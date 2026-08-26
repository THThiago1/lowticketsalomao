import { ScrollProgress } from "./lib/motion";
import { Hero, Problem, BigIdea } from "./sections/HeroContext";
import { SystemOverview } from "./sections/SystemOverview";
import { Principles } from "./sections/Principles";
import { SalomMap, HowItWorks } from "./sections/Method";
import { Deliverables } from "./sections/Deliverables";
import { Transformation, Audience, Differentiation } from "./sections/Audience";
import { Testimonials } from "./sections/Testimonials";
import { Offer, Closing, Disclaimer, Footer, StickyCTA } from "./sections/Closing";
import { Access, Faq } from "./sections/AccessFaq";

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />

      <main>
        {/* 1. Hero — transformação + mecanismo + preço visível */}
        <Hero />
        {/* 2. Problema — ganhar é apenas parte da equação */}
        <Problem />
        {/* 3. Big idea / virada de crença */}
        <BigIdea />
        {/* 4. Visão geral do sistema — não é apenas um ebook */}
        <SystemOverview />
        {/* 5. Os 7 Princípios — preview escaneável */}
        <Principles />
        {/* 6. Mapa S.A.L.O.M. — mecanismo prático */}
        <SalomMap />
        {/* 7. Como funciona — entrada → processo → resultado */}
        <HowItWorks />
        {/* 8. Tudo o que o cliente recebe */}
        <Deliverables />
        {/* 9. Transformação prática */}
        <Transformation />
        {/* 10. Para quem é */}
        <Audience />
        {/* 11. Diferenciação */}
        <Differentiation />
        {/* 12. Depoimentos reais (oculta enquanto não houver prints cadastrados) */}
        <Testimonials />
        {/* 13. Oferta — R$ 67,00 */}
        <Offer />
        {/* 14. Acesso / entrega */}
        <Access />
        {/* 15. FAQ */}
        <Faq />
        {/* 16. Encerramento + CTA */}
        <Closing />
        {/* 17. Aviso de contexto */}
        <Disclaimer />
      </main>

      {/* 18. Footer */}
      <Footer />
      <StickyCTA />
    </div>
  );
}
