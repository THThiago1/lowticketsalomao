import { ScrollProgress } from "./lib/motion";
import { Hero, Problem, NewBelief, BigIdea } from "./sections/HeroContext";
import { Principles } from "./sections/Principles";
import { SalomMap, HowItWorks } from "./sections/Method";
import { Deliverables } from "./sections/Deliverables";
import { Audience, Differentiation, Transformation } from "./sections/Audience";
import {
  Testimonials,
  Offer,
  Closing,
  Disclaimer,
  Footer,
  StickyCTA,
} from "./sections/Closing";

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />

      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Contexto / problema */}
        <Problem />
        {/* 3. Nova crença */}
        <NewBelief />
        {/* 4. Big idea (alto contraste) */}
        <BigIdea />
        {/* 5. Os 7 Princípios */}
        <Principles />
        {/* 6. Mapa S.A.L.O.M. */}
        <SalomMap />
        {/* 7. Como funciona */}
        <HowItWorks />
        {/* 8. O que está incluído */}
        <Deliverables />
        {/* 9. Para quem é */}
        <Audience />
        {/* 10. Diferenciação */}
        <Differentiation />
        {/* 11. Transformação */}
        <Transformation />
        {/* 12. Depoimentos ilustrativos */}
        <Testimonials />
        {/* 13. Oferta */}
        <Offer />
        {/* 14. Encerramento */}
        <Closing />
        {/* 15. Aviso de contexto */}
        <Disclaimer />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}
