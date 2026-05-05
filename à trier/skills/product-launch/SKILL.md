---
name: product-launch
description: Use this skill whenever starting a new product from scratch or entering a new product scope — whether it's a feature, a MVP, or a full product. Trigger on any mention of "nouveau produit", "lancer un produit", "cadrage produit", "PRD", "on démarre un projet", "product launch", "nouveau périmètre", "nouveau sprint produit", or when the user shifts from an internal tool to an external product, describes a new idea to build, or asks "par où je commence". Also trigger when the user needs to structure personas, user stories, cycle de vie des objets, schéma BDD, permissions, or MoSCoW for a new product context. This skill provides a complete, ordered process from idea to MVP-ready spec — use it proactively whenever a new product scope begins, even if the user doesn't name the skill explicitly.
---

# Product Launch — De l'idée au MVP-ready

Processus complet de cadrage et de structuration d'un nouveau produit, de la formulation du problème jusqu'au go-dev. Généraliste (bootcamp, freelance, PME).

Ce fichier contient la **logique de séquence et les garde-fous**. Les **templates rédigés** sont dans `templates/` — à charger uniquement quand Isa attaque l'étape correspondante.

**Règle "ne jamais inventer"** : aucune partie prenante, persona, statut, champ, permission ou arbitrage ne doit être inventé. Si une information manque pour avancer une étape — demander à Isa. Cette règle prime sur la vitesse d'exécution.

---

## Comment structurer le livrable

**Par défaut : 1 seul fichier** `products/[nom-produit]-launch.md` contenant les 12 sections dans l'ordre de **lecture** (le TL;DR de l'étape 12 est placé en tête malgré sa rédaction finale).

Les fichiers `templates/XX-*.md` sont des **structures de référence à copier** dans ce fichier unique — pas des fichiers à créer séparément. Un livrable en 1 fichier se relit mieux (les sections se renvoient entre elles : US → écran → MoSCoW → cycle de vie) et évite un dossier saturé sur plusieurs produits.

**Exception** : gros projet freelance avec plusieurs parties prenantes et passation partielle → alors un dossier `products/[nom-produit]/` avec 1 fichier par section peut se justifier.

### Ordre de lecture du livrable (top → bottom)

```
TL;DR (Étape 12, rédigée en dernier)
 ↓
Étape 1 — Problem Statement
 ↓
Étapes 2 à 11 dans l'ordre
 ↓
Annexes éventuelles
```

---

## Vue d'ensemble du processus (ordre de rédaction)

```
Étape 1  — Problem Statement & Proposition de valeur
Étape 2  — Parties prenantes
Étape 3  — Personas
Étape 4  — PRD (Product Requirements Document)
Étape 5  — User Stories + Critères d'acceptation
Étape 5b — Design System
Étape 5c — Maquettes écrans clés (Figma)
Étape 5d — Prototype rapide (Lovable ou équivalent)
Étape 6  — Cycle de vie des objets métier  ← souvent enrichi après les maquettes
Étape 7  — Schéma BDD
Étape 8  — Permissions & rôles
Étape 9  — MoSCoW & périmètre MVP
Étape 10 — Documentation (continue → passation finale)
Étape 11 — Checklist go-dev
Étape 12 — TL;DR & Analogie produit  ← rédigée en dernier, placée en tête du doc
```

**Logique de séquence :**
- **Étape 2 (Parties prenantes) avant Étape 3 (Personas)** — cadrer l'écosystème (éditeur, régulateurs, équipes internes, fournisseurs) avant de zoomer sur les utilisateurs directs. Les personas sont un sous-ensemble des parties prenantes.
- **Étapes 5b-5d (design + proto) après les User Stories et avant la BDD** — les maquettes servent de test de cohérence des stories, elles révèlent souvent des objets ou statuts manquants. Mieux vaut les découvrir sur Figma que dans Bubble.
- **Étape 12 (TL;DR) rédigée en dernier** — un TL;DR écrit trop tôt ancre une vision qui bouge ensuite.

---

## Templates à charger selon l'étape

| Étape(s) | Template à charger | Quand le charger |
|---|---|---|
| 1 | `templates/01-problem-statement.md` | Isa rédige le problème / la proposition de valeur |
| 2 | `templates/02-parties-prenantes.md` | Isa cartographie l'écosystème autour du produit |
| 3 | `templates/03-persona.md` | Isa pose les profils utilisateurs (mode co-construction AskUserQuestion disponible) |
| 4 | `templates/04-prd.md` | Isa écrit ou met à jour le PRD |
| 5 | `templates/05-user-stories.md` | Isa liste les US du MVP |
| 5b, 5c, 5d | `templates/05-design-proto.md` | Isa attaque design system / maquettes / prompt Lovable |
| 6 | `templates/06-cycle-de-vie.md` | Isa définit les statuts et transitions d'un objet métier |
| 7 | `templates/07-schema-bdd.md` | Isa modélise la BDD (objets, relations, tables pivot) |
| 8 | `templates/08-permissions.md` | Isa écrit la matrice de permissions / règles RGPD |
| 9 | `templates/09-moscow.md` | Isa tranche le périmètre MVP |
| 10 | `templates/10-documentation.md` | Journal arbitrages / Sécurité RGPD / Passation |
| 11 | `templates/11-checklist-go-dev.md` | Valider que le cadrage est prêt pour démarrer le dev |
| 12 | `templates/12-tldr.md` | Synthèse finale — à placer en tête du doc |

---

## Étape 1 — Problem Statement & Proposition de valeur

**Objectif :** formuler en 3-5 phrases le problème réel, pour qui, et pourquoi les alternatives actuelles ne suffisent pas.

**Template :** `templates/01-problem-statement.md`

### Questions de validation
- Le problème est-il formulé du point de vue de l'utilisateur, pas de la solution ?
- L'alternative actuelle est-elle réaliste et documentée ?
- Quelqu'un d'autre lirait-il cette phrase et comprendrait-il immédiatement le problème ?

### Erreurs fréquentes
- ❌ Partir directement sur la solution ("je veux faire une app qui...")
- ❌ Confondre problème et symptôme ("ils n'ont pas d'app" n'est pas un problème)
- ❌ Cible trop large ("tout le monde" n'est pas un persona)

---

## Étape 2 — Parties prenantes

**Objectif :** cartographier l'écosystème autour du produit — utilisateurs directs, éditeur, équipes internes, fournisseurs, régulateurs, partenaires commerciaux. Les personas (étape 3) sont un sous-ensemble.

**Template :** `templates/02-parties-prenantes.md`

### Questions de validation
- L'éditeur / le porteur du produit est-il listé explicitement ?
- Pour un produit avec données personnelles, la CNIL apparaît-elle comme régulateur ?
- Les équipes internes qui font manuellement ce que le produit ne fait pas encore sont-elles identifiées ?
- Chaque partie prenante a-t-elle un impact produit identifié ?

### Quand cette étape est critique
- **Marketplace bi-face** — offre + demande + plateforme + paiement + régulateur
- **Produit B2B** — acheteur ≠ utilisateur ≠ admin IT ≠ conformité
- **Produit régulé** (santé, finance, éducation) — régulateurs + auditeurs
- **Produit avec ops manuelles assumées** — équipes internes à outiller

### Quand cette étape peut être courte
- Produit B2C mono-face simple → 2 lignes (éditeur + utilisateurs) suffisent

### Erreurs fréquentes
- ❌ Oublier l'équipe interne qui gère ce que le MVP ne fait pas (seeding manuel, support, modération)
- ❌ Sauter le régulateur CNIL alors que le produit collecte des emails
- ❌ Confondre partie prenante indirecte et persona (le régulateur n'est pas un persona)

---

## Étape 3 — Personas

**Objectif :** définir 2-3 profils utilisateurs représentatifs parmi les parties prenantes identifiées à l'étape 2, ancrés dans la réalité du problème.

**Template :** `templates/03-persona.md` (inclut un **mode co-construction AskUserQuestion** activable si Isa demande de construire le persona ensemble)

### Mode co-construction
Quand Isa dit "aide-moi à construire le persona", "on le fait ensemble", ou ne fournit que le prénom / la cible : activer le mode AskUserQuestion décrit dans le template. Pour les champs énumérables (âge, niveau digital, device, fréquence), utiliser AskUserQuestion en batchs de 1-2 questions. Pour le reste (problème principal, frustrations, attentes) : texte libre.

Si Isa fournit directement le persona complet → taper le tableau, ne pas l'interroger.

### Questions de validation
- Peut-on nommer une vraie personne qui ressemble à ce persona ?
- Les frustrations sont-elles spécifiques au problème adressé (pas génériques) ?
- Le persona principal est-il clairement identifié ?
- Chaque persona correspond-il à une partie prenante utilisateur identifiée à l'étape 2 ?

---

## Étape 4 — PRD (Product Requirements Document)

**Objectif :** document de référence qui définit CE QUE le produit fait (pas COMMENT). Contrat entre vision produit et implémentation.

**Template :** `templates/04-prd.md`
**Structure générique** (sections 1-8) → `product-builder-core/SKILL.md` section "PRD — Structure type".

### Questions de validation
- Les objectifs sont-ils mesurables ou vérifiables ?
- Le hors scope est-il explicite (pas juste "ce qu'on n'a pas fait") ?
- Quelqu'un qui n'a pas participé au projet peut-il comprendre le produit en lisant ce doc ?

---

## Étape 5 — User Stories + Critères d'acceptation

**Objectif :** formuler les besoins en format narratif testable.

**Template :** `templates/05-user-stories.md`
**Format "En tant que..." + Given/When/Then** → `product-builder-core/SKILL.md` section "User Stories".

### Volume MVP
- Must : 5 à 8 stories maximum (parcours principal)
- Should : 3 à 5 stories (V1 post-MVP)
- Could/Won't : dans le backlog, pas dans le PRD

### Questions de validation
- Un seul persona par story ? (pas "l'utilisateur")
- Une seule action par story ? (pas de "et")
- Bénéfice métier réel ? (pas "pour pouvoir cliquer")
- Testable ? (done / not done tranchable)

### Erreurs fréquentes
- ❌ "En tant qu'utilisateur" (trop vague)
- ❌ "Voir la liste, filtrer et réserver" (3 stories en 1)
- ❌ Critères d'acceptation qui décrivent l'UI plutôt que le comportement

---

## Étape 5b — Design System

**Objectif :** poser les règles visuelles de base avant de dessiner. Design System minimal = 4 couleurs + 2 polices + 4 composants.

**Template :** `templates/05-design-proto.md` (section 5b)
**Contexte PlayOff** → `playoff-design-system/SKILL.md` à la place.

### Questions de validation
- Reflète l'identité du produit (ou la charte client existante) ?
- Chaque composant est-il réutilisable sur tous les écrans ?
- Règles suffisamment simples pour être appliquées sans designer ?

### Erreurs fréquentes
- ❌ Design System trop détaillé pour un MVP
- ❌ Ignorer la charte existante si le client en a une
- ❌ Composants qui ne correspondent à aucune User Story Must

---

## Étape 5c — Maquettes écrans clés (Figma)

**Objectif :** dessiner 2-3 écrans qui couvrent le parcours principal. Chaque User Story Must = au moins un écran.

**Template :** `templates/05-design-proto.md` (section 5c)

### Questions de validation
- Les écrans couvrent-ils l'intégralité du parcours principal sans trou ?
- Le Design System est-il appliqué de manière cohérente ?
- Les maquettes révèlent-elles des objets ou statuts manquants dans le modèle ? *(si oui → enrichir l'étape 6)*

### Erreurs fréquentes
- ❌ Dessiner tous les écrans imaginables — rester sur le parcours Must
- ❌ Ignorer les états vides (liste sans résultat, chargement, erreur)
- ❌ Maquettes trop fidèles à l'UI finale — la structure compte plus que le pixel perfect

---

## Étape 5d — Prototype rapide (Lovable ou équivalent)

**Objectif :** démo cliquable du parcours principal, sans BDD ni logique métier réelle. Outil de communication, pas un MVP.

**Template :** `templates/05-design-proto.md` (section 5d)
**Prompts Lovable optimisés crédits** → `lovable-prompts/SKILL.md`.

### Questions de validation
- Le parcours principal est-il compréhensible sans explication orale ?
- Les données affichées sont-elles cohérentes avec le cas d'usage ?
- Le prototype révèle-t-il des problèmes non détectés dans les maquettes ?
- Le prompt est-il conservé et documenté ?

### Erreurs fréquentes
- ❌ Itérer indéfiniment sur le prototype au lieu de passer à la BDD
- ❌ Ajouter une BDD dans Lovable — c'est une démo, pas un produit
- ❌ Oublier de documenter le prompt utilisé

---

## Étape 6 — Cycle de vie des objets métier

**Objectif :** avant de modéliser la BDD, définir les statuts de chaque objet et les transitions entre ces statuts. Cette étape révèle les règles métier implicites.

**Template :** `templates/06-cycle-de-vie.md`

### Questions de validation
- Tous les objets du produit ont-ils un cycle de vie défini ?
- Chaque transition est-elle conditionnée par une règle claire ?
- Les cas d'erreur et d'annulation sont-ils couverts ?
- Les déclencheurs d'automatisation sont-ils identifiés à ce stade ?

---

## Étape 7 — Schéma BDD

**Objectif :** modéliser objets, champs clés et relations avant de toucher à un outil.

**Template :** `templates/07-schema-bdd.md`

### Questions de validation
- Tous les objets des User Stories Must sont-ils dans le schéma ?
- Les relations reflètent-elles la réalité métier (pas juste la commodité technique) ?
- Les statuts du cycle de vie (étape 6) sont-ils cohérents avec les champs de statut dans le schéma ?
- Les champs RGPD sont-ils identifiés (email, téléphone, etc.) ?

---

## Étape 8 — Permissions & rôles

**Objectif :** définir qui peut faire quoi. Question produit (UX) ET sécurité (RGPD, Privacy Rules).

**Template :** `templates/08-permissions.md`
**Principes RGPD** → `product-builder-core/SKILL.md` section "RGPD — Principes clés".

### Questions de validation
- Le cas visiteur non connecté est-il couvert ?
- Les données personnelles ont-elles une règle de visibilité explicite ?
- Chaque rôle a-t-il un périmètre d'action clair et non ambigu ?
- Ces permissions sont-elles implémentables dans l'outil cible (Privacy Rules Bubble) ?

---

## Étape 9 — MoSCoW & périmètre MVP

**Objectif :** trancher définitivement ce qui est dans le MVP. Étape de priorisation finale avant de construire.

**Template :** `templates/09-moscow.md`
**Framework MoSCoW générique** → `product-builder-core/SKILL.md` section "Priorisation".

### Questions de validation
- Peut-on décrire le parcours principal en utilisant uniquement les Must ?
- Y a-t-il des Must qui pourraient être Should sans casser le parcours ?
- Chaque Won't est-il justifié (pas juste "on n'a pas eu le temps") ?

---

## Étape 10 — Documentation

**Principe :** la documentation n'est pas une étape finale — c'est un fil continu. Chaque décision tracée au moment où elle est prise.

**Template :** `templates/10-documentation.md` — couvre les 3 docs : journal arbitrages (continu, dès étape 1), page Sécurité & RGPD (continu, dès que des données perso apparaissent), passation (finale, avant go-dev).

### Questions de validation
- Un nouveau collaborateur peut-il comprendre le produit en 10 minutes avec cette doc ?
- Chaque décision structurante a-t-elle un arbitrage documenté ?
- Les données personnelles ont-elles toutes une règle de visibilité et une durée de conservation ?
- Les limites du MVP sont-elles honnêtement documentées ?

---

## Étape 11 — Checklist go-dev

**Objectif :** passage en revue exhaustif des livrables avant de démarrer le dev (Bubble, Airtable, etc.).

**Template :** `templates/11-checklist-go-dev.md` — 6 sections à cocher (Documentation, Produit, Données, Sécurité & rôles, Périmètre, Technique).

---

## Étape 12 — TL;DR & Analogie produit

**Objectif :** synthèse finale du cadrage — type de produit, persona principal, proposition de valeur, analogie, périmètre MVP. **Rédigée en dernier** (quand tout le reste est stabilisé) mais **placée en tête du livrable** (avant l'Étape 1).

**Template :** `templates/12-tldr.md`

### Pourquoi en dernier
- Les étapes 1-11 révèlent des arbitrages qui font bouger la vision
- Un TL;DR rédigé trop tôt fige une représentation qui peut devenir fausse
- L'analogie produit la plus juste apparaît souvent après l'étape 9 (MoSCoW)

### Pourquoi en tête
- Permet à un lecteur pressé (jury, nouveau collab, PM invité) de comprendre en 30 secondes
- Fournit un mental model qui rend les sections suivantes plus lisibles

### Questions de validation
- Le type de produit est-il énoncé en 1 ligne ?
- L'analogie produit pointe-t-elle vers une référence connue du lecteur cible ?
- L'analogie est-elle cohérente avec les arbitrages MVP (pas juste un argument marketing) ?
- Quelqu'un qui ne lit que le TL;DR peut-il pitcher le produit correctement ?

---

## Séquence recommandée selon le contexte

### Contexte bootcamp / certification (temps contraint)
```
J1 : Étapes 1 + 2       — Problem Statement + Parties prenantes     (2h)
J2 : Étape 3 + 4        — Personas + PRD                             (3h)
J3 : Étapes 5 + 5b      — User Stories + Design System               (3h)
J4 : Étapes 5c + 5d     — Maquettes Figma + Prototype Lovable        (4h)
J5 : Étapes 6 + 7       — Cycles de vie + Schéma BDD                 (3h)
J6 : Étapes 8 + 9       — Permissions + MoSCoW                       (2h)
J7 : Étapes 10 + 11 + 12 — Documentation + Checklist + TL;DR final    (2h)
```

> L'étape 10 s'alimente en continu dès J1. J7 est la synthèse finale — la rédaction du TL;DR (étape 12) vient en tout dernier.

### Contexte client / freelance (itératif)
- Étapes 1-2 : en solo, puis validation client avant d'aller plus loin
- Étape 3 (personas) : co-construire en atelier si possible
- Étape 4 (PRD) : co-construire avec les parties prenantes — c'est le contrat
- Étapes 5-5d : en solo ou en atelier de design selon disponibilité client
- Étape 5d (prototype) : à présenter au client pour validation avant la BDD
- Étape 9 (MoSCoW) : moment de décision critique — à faire impérativement avec le client
- Étape 10 : continue tout au long, passation formelle en fin de cadrage
- Étape 12 (TL;DR) : rédigée par Isa, validée par le client comme résumé officiel

---

## Articulation avec les autres skills

- **`product-builder-core`** → formats génériques (User Stories "En tant que", MoSCoW, PRD type, RGPD principes, Cost/Impact, RICE)
- **`airtable`** → implémentation des règles métier issues des étapes 6-7
- **`make-integromat`** → automatisations déclenchées par les transitions de statut (étape 6)
- **`playoff-design-system`** → Design System à appliquer aux étapes 5b-5c (contexte PlayOff)
- **`lovable-prompts`** → prompts Lovable optimisés crédits pour l'étape 5d
- **`product-builder-rncp`** → formulation des livrables pour la soutenance RNCP
- **`sprint-focus`** → *ne pas confondre* : `product-launch` cadre un **nouveau scope produit** depuis zéro ; `sprint-focus` aide à avancer sur un sprint déjà cadré. Si le doute subsiste, demander à Isa.

---

## Vocabulaire clé

| Terme | Définition | Ne pas confondre avec |
|---|---|---|
| Problem Statement | Formulation du problème utilisateur | Cahier des charges (solution) |
| Partie prenante | Acteur qui a un intérêt ou un impact sur le produit (direct ou indirect) | Persona (utilisateur direct uniquement) |
| PRD | Doc de référence "ce que fait le produit" | Spécification technique "comment ça marche" |
| Persona | Profil utilisateur représentatif | Utilisateur réel spécifique / partie prenante indirecte |
| User Story | Besoin en format narratif (En tant que...) | Tâche technique ou ticket dev |
| Critères d'acceptation | Conditions pour qu'une US soit "done" | Critères de succès (macro, PRD) |
| Design System | Règles visuelles réutilisables | Maquette (application des règles) |
| Maquette | Représentation visuelle d'un écran | Prototype (enchaînement cliquable) |
| Prototype | Démo cliquable sans logique métier réelle | MVP (produit fonctionnel avec données) |
| Cycle de vie | Séquence des statuts d'un objet métier | Workflow d'automatisation |
| Arbitrage | Décision prise face à plusieurs options, documentée | Choix technique non documenté |
| MoSCoW | Framework de priorisation par nécessité | Cost/Impact (priorise par effort/valeur) |
| Must | Indispensable au parcours principal | Fonctionnalité préférée de l'équipe |
| Won't | Hors scope délibéré et documenté | Fonctionnalité oubliée |
| Passation | Document permettant à quelqu'un d'autre de reprendre | README technique |
| TL;DR | Synthèse en tête du doc, rédigée en dernier | Résumé exécutif rédigé au début |
| Analogie produit | Référence connue qui explicite le pattern business/UX | Comparaison marketing flatteuse |
