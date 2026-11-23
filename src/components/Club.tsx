import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { delay } from "../reveal";

export default function Club() {
  return (
    <section className="section club" id="club">
      <div className="club-copy" data-reveal>
        <div className="eyebrow green">01 / LE CLUB</div>
        <h2>
          PAS BESOIN D’ÊTRE PRO.
          <br />
          JUSTE D’ÊTRE <em>VOUS.</em>
        </h2>
        <p>
          La première répétition, le premier kilomètre, le premier pas. Chez PULSE à Libreville, chaque départ compte. Un
          lieu pensé pour bouger, progresser et se sentir bien, sans pression.
        </p>
        <p>
          Des équipements qui suivent vos ambitions. Des coachs qui connaissent votre prénom. Et une énergie qui donne
          envie de revenir.
        </p>
        <a className="text-link" href="#activites">
          Trouvez ce qui vous fait vibrer <ArrowUpRight aria-hidden size={20} />
        </a>
        <div className="club-stats">
          <div>
            <strong>7/7</strong>
            <span>Jours pour bouger</span>
          </div>
          <div>
            <strong>06–23h</strong>
            <span>À votre rythme</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Votre énergie</span>
          </div>
        </div>
      </div>
      <div className="club-photo" data-reveal style={delay(150)}>
        <img src="/images/club.jpg" alt="Équipements de la salle PULSE" loading="lazy" />
        <div className="photo-label">
          <span>VOTRE NOUVEAU TERRAIN DE JEU</span>
          <MoveUpRight aria-hidden size={24} />
        </div>
      </div>
    </section>
  );
}
