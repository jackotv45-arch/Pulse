import { useRef, useState } from "react";
import { useReveal, useScrollProgress } from "./reveal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Club from "./components/Club";
import Activities from "./components/Activities";
import Pricing from "./components/Pricing";
import QrAccess from "./components/QrAccess";
import Faq from "./components/Faq";
import Footer, { FinalCta } from "./components/Footer";
import SelectionDialog from "./components/SelectionDialog";
import type { Plan } from "./data";

export default function App() {
  const bar = useRef<HTMLDivElement>(null);
  useReveal();
  useScrollProgress(bar);
  const [selection, setSelection] = useState<{ plan: Plan; annual: boolean } | null>(null);
  return (
    <>
      <div className="scroll-progress" ref={bar} aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Club />
        <Activities />
        <Pricing onChoose={(plan, annual) => setSelection({ plan, annual })} />
        <QrAccess />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <SelectionDialog selection={selection} onClose={() => setSelection(null)} />
    </>
  );
}
