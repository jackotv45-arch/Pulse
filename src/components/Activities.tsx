import { ArrowUpRight } from "lucide-react";
import { ACTIVITIES } from "../data";
import { delay } from "../reveal";

export default function Activities() {
  return (
    <section className="section activities" id="activites">
      <div className="section-heading" data-reveal>
        <div>
          <div className="eyebrow green">02 / NOS ACTIVITÉS</div>
          <h2>
            UNE ÉNERGIE.
            <br />
            <em>MILLE FAÇONS DE BOUGER.</em>
          </h2>
        </div>
        <p>
          À fond ou en douceur. Solo ou en équipe.
          <br />
          À vous de trouver votre mouvement.
        </p>
      </div>
      <div className="activity-grid">
        {ACTIVITIES.map((a, i) => (
          <a className="activity" href="#abonnements" key={a.n} data-reveal style={delay(i * 120)}>
            <img src={a.img} alt={a.title} loading="lazy" />
            <span className="activity-number">{a.n}</span>
            <div>
              <small>{a.tag}</small>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
            <ArrowUpRight aria-hidden className="activity-arrow" size={24} />
          </a>
        ))}
      </div>
    </section>
  );
}
