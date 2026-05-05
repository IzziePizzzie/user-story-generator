# Decisions Log

Format : chaque décision documentée avec contexte, options envisagées, choix retenu, raison.

---

## [2026-05-05] — Choix du modèle business

**Contexte** : Démarrage du projet business secondaire. Choix du modèle à adopter.

**Options envisagées** :
- Agent de contenu automatisé
- Produits numériques (PDF, templates)
- Micro-outils web (digital real estate)

**Choix retenu** : Micro-outils web

**Raison** : Correspond à l'expertise UI/UX + product builder. Trafic organique scalable. Peut être construit rapidement avec Claude Code. Monétisable en freemium ou affiliation.

**Limites connues** : SEO lent (2 à 6 mois avant premiers revenus). Nécessite un portefeuille de plusieurs outils pour générer un revenu significatif.

---

## [2026-05-05] — Choix de la stack technique

**Contexte** : Définir la stack pour construire les micro-outils.

**Choix retenu** : HTML/JS vanilla pour les outils simples, React pour les outils avec état complexe. Deploy sur Vercel.

**Raison** : Simplicité maximale, deploy en quelques minutes, gratuit pour commencer.

---

## [2026-05-05] — Premier produit : User Story Generator

**Contexte** : Choix du premier micro-outil à construire parmi 5 idées candidates.

**Options envisagées** : Contrast checker WCAG, User Story Generator, Audit heuristique, Design tokens generator, Checklist UX

**Choix retenu** : User Story Generator

**Raison** : Contrast checker abandonné — marché saturé sur tous les angles (palette, dark/light, suggestion AAA). User Story Generator validé SEO (volume moyen/élevé), concurrents génériques sans soin de design, persona cible cohérent (PMs, product builders, chefs de projet digital, lead devs).

**Décisions techniques** :
- API LLM : Claude Haiku 4.5 (~0.001€/génération, rentable dès V1)
- Langue interface : EN (audience SEO plus large)
- Stack : HTML/JS vanilla + Vercel serverless function (proxy API key)
- Freemium : 3 générations gratuites/session → modal → 5€/mois Stripe

**Limites connues** : Dépendance API Anthropic (coût variable selon trafic). Lien Stripe à configurer avant launch.

<!-- Ajouter les décisions suivantes ici au fil du projet -->
