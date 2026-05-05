# Template — TL;DR & Analogie produit

> Étape 12 du skill `product-launch`. **Rédigée en dernier** (quand tout le reste est stabilisé) mais **placée en tête du livrable** (juste après le titre, avant l'Étape 1).
>
> Objectif : permettre à un lecteur pressé (jury RNCP, nouveau collaborateur, PM invité) de comprendre en 30 secondes **ce qu'est le produit, pour qui, et comment se le représenter**.

---

## Pourquoi rédiger en dernier

Un TL;DR rédigé trop tôt ancre une vision qui bouge ensuite. Les étapes 1-11 révèlent :
- Des arbitrages qui changent le périmètre (MoSCoW, bi-face vs mono-face)
- Des personas qu'on pensait primaires et qui passent secondaires
- Des analogies plus justes découvertes au fil du cadrage

Rédiger le TL;DR en dernier garantit qu'il reflète le produit **tel qu'il a été cadré**, pas tel qu'on l'imaginait au départ.

---

## Pourquoi le placer en tête

Le lecteur parcourt le doc de haut en bas. Les 30 premières secondes décident s'il lit la suite. Un TL;DR en tête :
- Donne le contexte avant les détails
- Fournit un **mental model** (l'analogie) qui rend toutes les sections suivantes plus lisibles
- Permet à un lecteur qui connaît déjà le produit de sauter directement à la section qui l'intéresse

---

## Template TL;DR

```markdown
## TL;DR

**Type de produit** : [1 ligne — ex: "Marketplace bi-face B2C", "SaaS B2B vertical santé", "Module ajouté à un produit existant"]

**Pour qui** : [Persona principal en 1 ligne + contexte d'usage clé]

**Proposition de valeur** : [1 phrase tirée de l'Étape 1, format "aide X à Y sans Z, contrairement à W"]

**Analogie produit** :
> [Nom du produit] est à [domaine/marché] ce que [référence connue] est à [domaine de la référence] — [ce qui rend l'analogie juste].

**Périmètre MVP** : [2-3 bullets — ce qui est dans / ce qui est explicitement dehors]

**Stack technique** : [Bubble / Airtable / Make / …]

**Statut du cadrage** : [v1.0 — prêt pour go-dev | v0.5 — en cours | …]
```

---

## Comment trouver une bonne analogie produit

Une analogie juste tient en 2 critères :
1. **La référence est connue** du lecteur cible (Airbnb, Uber, Doctolib, Notion, Linktree, Deliveroo…)
2. **Le pattern business ou UX est similaire** — pas juste le domaine

### Patterns courants et leurs références

| Pattern | Référence possible |
|---|---|
| Marketplace bi-face | Airbnb, Uber, Vinted, Malt |
| Marketplace à commission | Doctolib, TheFork, Deliveroo |
| Aggrégateur (pas de transaction) | Google Flights, Trivago |
| Plateforme de contenu communautaire | Strava, Lichess, Discogs |
| Outil SaaS vertical | Gorgias (support e-commerce), Pennylane (compta freelance) |
| Outil no-code productivité | Notion, Airtable, Linear |
| Outil de coordination groupe | Lydia, Splitwise, Doodle |
| Module ajouté à un produit existant | "l'onglet Reels d'Instagram", "le panier Amazon sur mobile" |
| Produit B2B2C | Shopify (pour le marchand) + la boutique (pour l'acheteur) |

### Erreurs fréquentes

- ❌ **Analogie par domaine** : "c'est comme Uber mais pour le sport" ne dit rien sur le pattern produit
- ❌ **Référence inconnue** : citer un produit de niche que le jury ne connaît pas
- ❌ **Analogie flatteuse mais inexacte** : se comparer à Airbnb quand on est en fait un aggrégateur sans transaction
- ✅ **Analogie qui explicite le pattern** : "X est à Y ce que Airbnb est au logement — agrégation d'une offre fragmentée + parcours bout en bout côté demande"

---

## Exemple — PlayOff Terrain (livrable Sprint 4)

> PlayOff Terrain est à la réservation de terrain ce qu'Airbnb est au logement : une marketplace bi-face qui met en relation des **propriétaires qui ont du stock inutilisé** et des **utilisateurs qui cherchent un accès facile**. La valeur n'est pas seulement dans la réservation — elle est dans l'agrégation de l'offre et la simplicité du parcours organisateur.

Ce qui rend l'analogie juste :
- Même problème côté offre (stock inutilisé, pas de canal dédié pour les amateurs)
- Même problème côté demande (fragmentation, pas d'agrégateur)
- Même pattern produit (marketplace bi-face, côté demande outillé en priorité, côté offre géré manuellement au début)

---

## Règles

- **Max 10 lignes** pour la section TL;DR totale
- **1 seule analogie** — si deux sont possibles, choisir celle qui éclaire le mieux le pattern business
- **Garder l'analogie cohérente avec les arbitrages** (ex: si le MVP a tranché "pas d'interface propriétaire", l'analogie "comme Airbnb" doit préciser "côté demande outillé en priorité")
- **Mettre à jour si le produit pivote** — un TL;DR obsolète est pire qu'absent
