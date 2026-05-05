# Template — Parties prenantes

> Étape 2 du skill `product-launch`. Cartographier l'écosystème autour du problème avant de définir les personas. Les personas sont un sous-ensemble des parties prenantes (les utilisateurs directs) — les cadrer après permet d'identifier aussi les acteurs **indirects** qui contraignent le produit.

---

## Pourquoi cette étape

Un produit vit rarement en vase clos. Autour des utilisateurs directs gravitent :

- **L'éditeur** (qui conçoit / possède le produit)
- **Les équipes internes** qui opèrent le produit (partenariat, support, ops)
- **Les fournisseurs techniques** (paiement, auth, SMS, cartographie…)
- **Les régulateurs** (CNIL, DGCCRF, autorités sectorielles)
- **Les partenaires commerciaux** (apporteurs d'affaires, intégrateurs)

Identifier ces parties prenantes **avant les personas** évite deux angles morts classiques :
1. Oublier un **contrainte structurante** (RGPD, PSD2, KYC, plafond transaction…)
2. Rater une **interface tierce à outiller** (équipe Partenariat qui saisit en backoffice, support qui a besoin de reporting…)

---

## Quand cette étape est critique

| Type de produit | Parties prenantes au-delà des utilisateurs |
|---|---|
| **Marketplace bi-face** (Airbnb, Uber, Doctolib) | Offre + demande + plateforme + paiement + régulateur |
| **Produit B2B SaaS** | Acheteur ≠ utilisateur ≠ admin IT ≠ conformité |
| **Produit régulé** (santé, finance, éducation) | Régulateurs + auditeurs + organismes certificateurs |
| **Produit avec ops manuelles** | Équipes internes qui font ce que le produit ne fait pas encore |
| **Produit intégré à un écosystème existant** | Outils amont / aval déjà en place |

**Produit simple B2C mono-face** : cette étape peut être rapide (1 ligne pour l'éditeur, 1 ligne pour les utilisateurs). Ne pas sur-investir.

---

## Template Parties prenantes

```markdown
## Parties prenantes — [Nom du produit]

| Catégorie | Partie prenante | Intérêt / rôle | Impact produit |
|---|---|---|---|
| Utilisateurs — [côté X] | [Qui, rôle] | [Ce qu'ils cherchent] | [Impact sur le scope, les personas, les US] |
| Utilisateurs — [côté Y si bi-face] | | | |
| Éditeur | [Entreprise / porteur] | [Pourquoi l'éditeur construit ça] | [Cohérence avec l'existant] |
| Équipe interne [nom] | [Équipe Ops / Partenariat / Support] | [Ce qu'elle fait dans le process] | [Interface backoffice à outiller, ou workflow manuel assumé] |
| Fournisseur [nom] | [Ex: Stripe, Twilio, Mapbox] | [Service externe critique] | [Dépendance technique + coût + contrainte contractuelle] |
| Régulateur | [Ex: CNIL, ARCEP, ACPR] | [Conformité visée] | [Contrainte structurante — RGPD, PSD2…] |
| Partenaire commercial | [Apporteur d'affaires, revendeur] | [Rôle dans le business model] | [Flux de commissions, KYC, reporting] |
```

---

## Questions à se poser

Pour chaque catégorie, vérifier si elle existe dans le produit :

- **Utilisateurs directs** : qui utilise vraiment le produit au quotidien ?
- **Payeur vs utilisateur** : celui qui paie est-il celui qui utilise ? (cas B2B systématique)
- **Opérations internes** : qui fait ce que le produit ne fait pas encore (MVP avec scope réduit) ?
- **Fournisseurs critiques** : quels services externes sont bloquants si indisponibles ?
- **Régulation** : y a-t-il une autorité qui peut imposer des contraintes (RGPD minimum, sectoriel si santé/finance/éducation) ?
- **Partenaires commerciaux** : y a-t-il des acteurs tiers qui apportent du business / des utilisateurs ?

---

## Règles

- **Éditeur toujours listé** — même si c'est évident, le documenter aide à clarifier le business model
- **Régulateur** : systématique dès qu'il y a des données personnelles (CNIL via RGPD)
- **Une partie prenante = un impact produit identifié** — si aucun impact, elle n'a pas sa place ici
- **Distinguer Utilisateur (persona de l'étape 3) et Partie prenante indirecte** — les deux se croisent mais ne se confondent pas

---

## Pont vers les étapes suivantes

- Les **utilisateurs directs** identifiés ici deviennent les **personas** (étape 3)
- Les **contraintes régulateurs** alimentent les **dépendances PRD** (étape 4) et la **page Sécurité & RGPD** (étape 10b)
- Les **équipes internes** impliquées apparaissent dans la **matrice de permissions** (étape 8) et peuvent générer des **arbitrages MVP** (ex : onboarding manuel vs interface autonome, cf livrable PlayOff Terrain)
- Les **fournisseurs techniques** alimentent les **Won't / Could** (étape 9) quand l'intégration est reportée post-MVP
