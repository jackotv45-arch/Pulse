import { useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

const LINKS = [
  ["#club", "Le club"],
  ["#activites", "Nos activités"],
  ["#abonnements", "Abonnements"],
  ["#acces", "Accès QR"],
  ["#faq", "FAQ"],
];

export function Logo() {
  return (
    <a className="logo" href="#">
      PULSE<span>®</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <Logo />
      <nav className={open ? "open" : ""}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
      <a className="button nav-cta" href="#abonnements">
        Rejoindre le mouvement <ArrowUpRight aria-hidden size={17} />
      </a>
      <button className="mobile-menu" aria-label="Ouvrir le menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <Menu aria-hidden size={24} />
      </button>
    </header>
  );
}
