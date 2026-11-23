import { useState } from "react";
import { ArrowUpRight, Check, Dumbbell, Zap } from "lucide-react";
import { ANNUAL_DISCOUNT, PLANS, fcfa, type Plan } from "../data";
import { delay } from "../reveal";

type Props = { onChoose: (plan: Plan, annual: boolean) => void };

export default function Pricing({ onChoose }: Props) {
  const [annual, setAnnual] = useState(false);
  const price = (p: Plan) => Math.round(p.monthly * (annual ? 1 - ANNUAL_DISCOUNT : 1));

  return (
    <section className="section pricing" id="abonnements">
      <div className="eyebrow green" data-reveal>03 / LES ABONNEMENTS</div>
      <h2 data-reveal style={delay(80)}>
        VOTRE OBJECTIF.
        <br />
        <em>VOTRE FORMULE.</em>
      </h2>
      <p data-reveal style={delay(160)}>Pas de mauvaises surprises. Juste le bon point de départ.</p>
      <div className="billing" data-reveal style={delay(220)} role="group" aria-label="Période de facturation">
        <button className={!annual ? "active" : ""} aria-pressed={!annual} onClick={() => setAnnual(false)}>
          Mensuel
        </button>
        <button className={annual ? "active" : ""} aria-pressed={annual} onClick={() => setAnnual(true)}>
          Annuel <span>−15 %</span>
        </button>
      </div>
      <div className="plans">
        {PLANS.map((p, i) => (
          <article className={`plan${p.featured ? " featured" : ""}`} key={p.name} data-reveal style={delay(i * 130)}>
            {p.featured && (
              <div className="popular">
                <Zap aria-hidden size={13} /> LE BON ÉQUILIBRE
              </div>
            )}
            <div className="plan-top">
              <Dumbbell aria-hidden size={23} />
              <span>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.tagline}</p>
            <div className="price" key={annual ? "annuel" : "mensuel"}>
              {fcfa(price(p))}
              <sup>FCFA</sup>
              <span>/ mois</span>
            </div>
            <small>{annual ? "Engagement 12 mois · facturation annuelle" : "Sans engagement · facturation mensuelle"}</small>
            <div className="plan-line" />
            <ul>
              {p.features.map((f) => (
                <li key={f}>
                  <Check aria-hidden size={16} />
                  {f}
                </li>
              ))}
            </ul>
            <button className={`button${p.featured ? "" : " outline"}`} onClick={() => onChoose(p, annual)}>
              Choisir {p.name.toLowerCase()} <ArrowUpRight aria-hidden size={18} />
            </button>
          </article>
        ))}
      </div>
      <div className="pricing-note" data-reveal>
        Tarifs provisoires en FCFA (XAF) · Frais et conditions à confirmer · Aucune souscription en ligne
      </div>
    </section>
  );
}
