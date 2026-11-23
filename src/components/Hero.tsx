import { Fragment } from "react";
import { ArrowRight, ArrowUpRight, Zap } from "lucide-react";

const TICKER = ["PLUS FORT ENSEMBLE", "À CHACUN SON RYTHME", "MOINS D’EXCUSES. PLUS DE VOUS."];

export default function Hero() {
  return (
    <>
      <section className="hero">
        <img className="hero-image" src="/images/hero.jpg" alt="Espace de musculation dans une salle de sport" />
        <div className="hero-content">
          <div className="eyebrow">
            <span className="dot" /> LIBREVILLE, GABON · QUARTIER LOUIS
          </div>
          <h1>
            LE CHANGEMENT
            <br />
            COMMENCE <em>ICI.</em>
          </h1>
          <p>
            Plus d’énergie. Plus de confiance. Plus de vous.
            <br />
            Trouvez votre rythme, on s’occupe du reste.
          </p>
          <div className="hero-actions">
            <a className="button" href="#abonnements">
              Trouver ma formule <ArrowUpRight aria-hidden size={21} />
            </a>
            <a className="text-link" href="#club">
              Découvrir le club <ArrowRight aria-hidden size={18} />
            </a>
          </div>
          <div className="hero-note">
            <span>TOUS LES NIVEAUX.</span> UNE MÊME ÉNERGIE.
          </div>
        </div>
        <div className="hero-side">MOVE YOUR BODY. CHANGE YOUR MIND.</div>
        <a className="scroll-note" href="#club">
          SCROLL POUR DÉCOUVRIR <span>↓</span>
        </a>
        <div className="hero-stamp">
          <Zap aria-hidden size={24} fill="currentColor" />
          <span>
            FIND
            <br />
            YOUR PULSE.
          </span>
        </div>
      </section>
      <div className="ticker">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((g) => (
            <div className="ticker-group" key={g} aria-hidden={g > 0 ? true : undefined}>
              {TICKER.map((t) => (
                <Fragment key={t}>
                  <span>{t}</span>
                  <Zap aria-hidden size={24} />
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
