import { useEffect, useRef } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { ANNUAL_DISCOUNT, fcfa, type Plan } from "../data";

type Props = { selection: { plan: Plan; annual: boolean } | null; onClose: () => void };

export default function SelectionDialog({ selection, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (selection && !d.open) d.showModal();
    if (!selection && d.open) d.close();
  }, [selection]);

  const plan = selection?.plan;
  const annual = selection?.annual ?? false;
  const price = plan ? Math.round(plan.monthly * (annual ? 1 - ANNUAL_DISCOUNT : 1)) : 0;

  return (
    <dialog
      className="selection"
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <button className="close" aria-label="Fermer" onClick={onClose}>
        <X aria-hidden size={22} />
      </button>
      {plan && (
        <>
          <div className="eyebrow green">VOTRE SÉLECTION</div>
          <h2>
            LET’S <em>{plan.name}.</em>
          </h2>
          <p>
            Vous avez choisi la formule <strong>{plan.name}</strong> à {fcfa(price)} FCFA / mois.
          </p>
          <p>{annual ? "Formule annuelle." : "Formule mensuelle sans engagement."}</p>
          <div className="demo-note">
            PULSE est une marque fictive. Cette page présente un concept : aucun paiement ni réservation n’est effectué.
          </div>
          <button className="button" onClick={onClose}>
            Continuer à découvrir <ArrowUpRight aria-hidden size={18} />
          </button>
        </>
      )}
    </dialog>
  );
}
