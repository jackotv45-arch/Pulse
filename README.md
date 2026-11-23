# PULSE — salle de sport à Libreville (React + Vite + TypeScript)

Reconstruction de la page clonée depuis pulse-0zhczo0-preview-4200.runable.site.

## Lancer
    npm install
    npm run dev      # http://localhost:5173
    npm run build    # vérifie les types puis génère dist/

## Structure
- `src/styles.css` : CSS d'origine (récupéré tel quel du clone) + reset équivalent au preflight Tailwind
- `src/fonts.css` + `public/fonts` : Barlow Condensed et Poppins, en local
- `src/data.ts` : formules, activités, FAQ, profils de démo
- `src/components/` : Header, Hero, Club, Activities, Pricing, QrAccess, Faq, Footer, SelectionDialog

## Animations
- Bandeau jaune : défilement continu gauche → droite (boucle sans coupure, pause au survol) ; vitesse = `animation: tickerRight 32s` dans `src/styles.css`
- Ajoutées : hero (zoom lent de la photo, texte qui apparaît en cascade, point et éclair qui pulsent, flèche de scroll), apparition au scroll (`src/reveal.ts`, attribut `data-reveal`), barre de progression de lecture, soulignement du menu, flèches des boutons, cartes d'activités et de formules au survol, prix qui s'animent au changement mensuel/annuel, FAQ, résultat du scan, dialogue
- Tout est désactivé avec « réduire les animations » (règle `prefers-reduced-motion`)

## Déduit ou inventé (absent du clone)
- Tarifs annuels : -15 % appliqué au prix mensuel affiché, mention « Engagement 12 mois · facturation annuelle »
- Badge de Sam K. : identifiant PULSE-DEMO-EXPIRE-002 ; textes des résultats de scan et titre du dialogue pour Essential/Unlimited
- Le QR est régénéré avec la lib `qrcode` (celui d'Alex décode bien PULSE-DEMO-ACTIF-001)
- Retirés : badge « Made with Runable », script de stats, outils du serveur de dev

## Limites
Page de démonstration : aucun back-end, aucun paiement, QR fictifs. Ne pas l'utiliser pour contrôler un accès réel.
