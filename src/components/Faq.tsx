import { FAQ } from "../data";
import { delay } from "../reveal";

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div data-reveal>
        <div className="eyebrow green">05 / ON VOUS RÉPOND</div>
        <h2>
          ON LÈVE
          <br />
          <em>LES DOUTES.</em>
        </h2>
        <p>
          Le plus dur, c’est de commencer.
          <br />
          Le reste, on vous l’explique.
        </p>
      </div>
      <div className="questions">
        {FAQ.map((f, i) => (
          <details key={f.q} data-reveal style={delay(i * 70)}>
            <summary>
              {f.q}
              <span>+</span>
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
