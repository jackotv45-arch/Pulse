export type Plan = {
  name: string;
  tagline: string;
  monthly: number;
  features: string[];
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "ESSENTIAL",
    tagline: "Votre rythme. Votre terrain.",
    monthly: 25000,
    features: ["Accès libre à la salle", "Espaces musculation & cardio", "Application d’entraînement"],
  },
  {
    name: "BOOST",
    tagline: "Un cran plus loin, ensemble.",
    monthly: 40000,
    featured: true,
    features: [
      "Tout Essential inclus",
      "Cours collectifs illimités",
      "Bilan avec un coach chaque mois",
      "Accès à l’espace récupération",
    ],
  },
  {
    name: "UNLIMITED",
    tagline: "Vos objectifs, sans compromis.",
    monthly: 65000,
    features: [
      "Tout Boost inclus",
      "2 séances de coaching par mois",
      "Programme personnalisé",
      "Invitation d’un proche 1 fois / mois",
    ],
  },
];

export const ANNUAL_DISCOUNT = 0.15;

export const ACTIVITIES = [
  { n: "01", tag: "FORCE & PROGRESSION", title: "MUSCULATION", text: "Construisez votre force.", img: "/images/hero.jpg" },
  { n: "02", tag: "ÉNERGIE & ENDURANCE", title: "FUNCTIONAL TRAINING", text: "Dépassez votre quotidien.", img: "/images/training.jpg" },
  { n: "03", tag: "MOUVEMENT & CONNEXION", title: "COURS COLLECTIFS", text: "L’énergie se partage.", img: "/images/club.jpg" },
];

export const FAQ = [
  {
    q: "Où se trouve PULSE à Libreville ?",
    a: "Nous proposons une implantation dans le quartier Louis, à Libreville, au Gabon. L’adresse exacte et l’implantation seront confirmées par le client.",
  },
  {
    q: "Comment fonctionne le badge QR ?",
    a: "Le principe est d’identifier l’abonné à l’entrée et de vérifier son abonnement. La démonstration ci-dessus utilise uniquement des badges fictifs : aucun accès réel n’est contrôlé.",
  },
  {
    q: "Je débute, est-ce que PULSE est fait pour moi ?",
    a: "Absolument. Les espaces et les activités sont pensés pour tous les niveaux. Allez à votre rythme et choisissez une formule avec coaching si vous souhaitez être accompagné.",
  },
  {
    q: "Quelle est la différence entre les formules ?",
    a: "Essential donne accès à la salle, Boost ajoute les cours collectifs et un bilan mensuel, Unlimited inclut du coaching personnalisé. Retrouvez le détail juste au-dessus.",
  },
  {
    q: "Puis-je changer de formule ?",
    a: "Dans ce concept, les formules mensuelles peuvent évoluer selon vos objectifs. Les modalités définitives seront précisées par la salle lors de son lancement.",
  },
  {
    q: "Quels sont les horaires du club ?",
    a: "Le concept prévoit une ouverture tous les jours de 6 h à 23 h, pour vous permettre de vous entraîner à votre rythme.",
  },
];

export type Member = { name: string; plan: string; active: boolean; code: string; label: string };

// Profils fictifs publics : ils ne donnent aucun accès réel.
export const MEMBERS: Member[] = [
  { name: "Alex M.", plan: "BOOST", active: true, code: "PULSE-DEMO-ACTIF-001", label: "abonnement actif" },
  { name: "Sam K.", plan: "ESSENTIAL", active: false, code: "PULSE-DEMO-EXPIRE-002", label: "abonnement expiré" },
];

export const fcfa = (n: number) => n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " ");
