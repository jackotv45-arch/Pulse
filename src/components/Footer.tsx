import { ArrowUpRight, Zap } from "lucide-react";
import { Logo } from "./Header";
import { delay } from "../reveal";

export function FinalCta() {
  return (
    <section className="final-cta">
      <span className="eyebrow">LE PREMIER PAS N’ATTEND QUE VOUS.</span>
      <h2 data-reveal>
        MOINS DE « DEMAIN ».
        <br />
        PLUS DE <span>MAINTENANT.</span>
      </h2>
      <a className="button dark-button" href="#abonnements" data-reveal style={delay(150)}>
        Trouver ma formule <ArrowUpRight aria-hidden size={18} />
      </a>
      <Zap aria-hidden className="big-zap" />
    </section>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Logo />
        <p>Louis · Libreville · Gabon — emplacement proposé.</p>
        <a href="#">Retour en haut ↑</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 PULSE — Concept de salle de sport.</span>
        <span>Nom provisoire · Adresse, tarifs et horaires à confirmer · QR de démonstration.</span>
      </div>
    </footer>
  );
}
