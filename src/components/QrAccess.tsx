import { FormEvent, useEffect, useState } from "react";
import QRCode from "qrcode";
import { CircleCheck, CircleX, ScanLine, ShieldCheck } from "lucide-react";
import { MEMBERS } from "../data";
import { delay } from "../reveal";

type Result = { ok: boolean; title: string; text: string } | null;

export default function QrAccess() {
  const [idx, setIdx] = useState(0);
  const [qr, setQr] = useState("");
  const [code, setCode] = useState("");
  const [result, setResult] = useState<Result>(null);
  const member = MEMBERS[idx];

  useEffect(() => {
    let cancelled = false;
    QRCode.toDataURL(member.code, { width: 260, margin: 1, color: { dark: "#101110", light: "#ffffff" } })
      .then((url) => !cancelled && setQr(url))
      .catch(() => !cancelled && setQr(""));
    return () => {
      cancelled = true;
    };
  }, [member.code]);

  const verify = (value: string) => {
    const found = MEMBERS.find((m) => m.code === value.trim().toUpperCase());
    if (!found) {
      setResult({
        ok: false,
        title: "IDENTIFIANT INCONNU",
        text: "Ce contenu ne correspond à aucun des deux badges de démonstration.",
      });
    } else if (found.active) {
      setResult({ ok: true, title: "ACCÈS AUTORISÉ", text: `${found.name} — abonnement ${found.plan} actif. Démonstration : aucune porte n’est ouverte.` });
    } else {
      setResult({ ok: false, title: "ACCÈS REFUSÉ", text: `${found.name} — abonnement expiré. À renouveler à l’accueil. Démonstration uniquement.` });
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    verify(code);
  };

  return (
    <section className="section qr-section" id="acces">
      <div className="section-heading" data-reveal>
        <div>
          <div className="eyebrow green">04 / L’ACCÈS MEMBRE</div>
          <h2>
            VOTRE BADGE.
            <br />
            <em>VOTRE PASSEPORT PULSE.</em>
          </h2>
        </div>
        <p>
          À l’entrée, un QR code identifie l’abonné.
          <br />
          Découvrez le parcours avec des profils fictifs.
        </p>
      </div>
      <div className="qr-warning" data-reveal style={delay(100)}>
        <ShieldCheck aria-hidden size={18} />
        <span>
          <strong>DÉMONSTRATION UNIQUEMENT.</strong> Aucun compte réel, aucune lecture caméra et aucun contrôle de porte.
          Les identifiants ci-dessous sont publics et fictifs.
        </span>
      </div>
      <div className="qr-grid">
        <article className="badge-panel" data-reveal>
          <div className="eyebrow">01 / BADGE ABONNÉ</div>
          <label htmlFor="demo-member">Choisir un profil fictif</label>
          <select
            id="demo-member"
            value={idx}
            onChange={(e) => {
              setIdx(Number(e.target.value));
              setResult(null);
            }}
          >
            {MEMBERS.map((m, i) => (
              <option key={m.code} value={i}>
                {m.name} — {m.label}
              </option>
            ))}
          </select>
          <div className="member-card">
            <div className="member-top">
              <span className="logo">PULSE</span>
              <span>LIBREVILLE · DÉMO</span>
            </div>
            <h3>{member.name}</h3>
            <p>
              {member.plan} · <span>{member.active ? "ACTIF" : "EXPIRÉ"}</span>
            </p>
            <div className="qr-image">{qr && <img src={qr} alt={`QR de démonstration pour ${member.name}`} />}</div>
            <code>{member.code}</code>
            <small>Badge fictif · Ne donne aucun accès réel</small>
          </div>
          <a className="button outline" href={qr} download={`pulse-badge-demo-${idx + 1}.png`} aria-disabled={!qr}>
            Télécharger le QR de démo <ScanLine aria-hidden size={18} />
          </a>
        </article>
        <article className="control-panel" data-reveal style={delay(150)}>
          <div className="eyebrow green">02 / ACCUEIL — SIMULATION</div>
          <h3>VÉRIFIER UN BADGE.</h3>
          <p>
            En production, le personnel lirait le QR et vérifierait l’abonnement sur un serveur sécurisé. Ici, simulez la
            lecture ou saisissez le contenu du QR.
          </p>
          <button className="button" onClick={() => { setCode(member.code); verify(member.code); }}>
            Simuler le scan du badge affiché <ScanLine aria-hidden size={18} />
          </button>
          <form onSubmit={onSubmit}>
            <label htmlFor="qr-code">Contenu du QR / identifiant de démo</label>
            <input
              id="qr-code"
              autoComplete="off"
              placeholder="PULSE-DEMO-ACTIF-001"
              required
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button className="button outline" type="submit">
              Vérifier cet identifiant
            </button>
          </form>
          {result && (
            <div key={result.title + result.text} className={`qr-result ${result.ok ? "accepted" : "denied"}`} role="status">
              {result.ok ? <CircleCheck aria-hidden size={20} /> : <CircleX aria-hidden size={20} />}
              <div>
                <strong>{result.title}</strong>
                <p>{result.text}</p>
              </div>
            </div>
          )}
          <small>
            Cette simulation fonctionne uniquement avec les deux badges de démonstration. Elle ne doit pas être utilisée
            pour sécuriser une salle.
          </small>
        </article>
      </div>
    </section>
  );
}
