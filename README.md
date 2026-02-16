# TimeTravel Agency — Webapp Interactive

Application frontend React + TypeScript pour une agence de voyages temporels premium, prête pour un déploiement statique sur GitHub Pages.

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- React Router
- GitHub Actions (déploiement GitHub Pages)

## Features

- Thème dark premium avec accents dorés
- Home avec hero immersif, présentation et destinations
- Catalogue `/destinations` avec filtres (Culture / Nature / Luxe)
- Détail destination `/destinations/:id` avec modal de réservation
- Widget chat local (FAQ par mots-clés, sans backend)
- Données centralisées dans `src/data/destinations.ts`
- Build 100% statique

## Installation locale

```bash
npm install
npm run dev
```

## Build et preview

```bash
npm run build
npm run preview
```

## Déploiement GitHub Pages

1. Vérifier le `base` dans `vite.config.ts` (`/potential-octo-waffle/`).
2. Pousser la branche `main` vers GitHub.
3. Activer GitHub Pages dans **Settings > Pages** avec la source **GitHub Actions**.
4. Le workflow `.github/workflows/deploy.yml` build et publie automatiquement.

## IA utilisées

- ChatGPT Codex

## Crédits

- Assets visuels: placeholders SVG créés pour le projet (`src/assets/*`).
