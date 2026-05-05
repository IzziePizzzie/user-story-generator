---
name: product-builder-core
description: Use this skill for any product management, product builder, or UX work that requires frameworks, methodologies, or structured thinking. Trigger on any mention of user stories, backlog, priorisation, MoSCoW, RICE, Cost/Impact matrix, sprint, PRD, benchmark, personas, critères d'acceptation, RGPD, rules of engagement, decision-making frameworks, or when the user needs to structure a product decision, write a user story, prioritize features, or benchmark tools. Also trigger when the user asks "comment je structure ça", "comment je priorise", "comment je rédige une user story", or describes a product problem needing a framework.
---

# Product Builder — Core Frameworks & Methods

## User Stories

### Format standard
```
En tant que [persona],
je veux [action],
afin de [bénéfice].
```

### Règles d'une bonne user story
- **Un seul persona** — pas "l'utilisateur", un profil précis
- **Une seule action** — si tu as besoin de "et", c'est deux stories
- **Un bénéfice réel** — pas "pour pouvoir faire X" mais "pour [résultat métier]"
- **Testable** — on doit pouvoir savoir si c'est "done"

### Critères d'acceptation — format Given/When/Then
```
Given [contexte de départ]
When [action déclenchante]
Then [résultat attendu]
```

---

## Priorisation

### Matrice Cost/Impact (= Impact/Effort)
```
         IMPACT
         Faible    Élevé
COÛT
Faible    😐         🔴  ← priorité absolue
Élevé     ⚫ éviter   ⚠️  planifier
```

### MoSCoW
| Label | Signification |
|---|---|
| **Must** | Indispensable — sans ça le produit ne fonctionne pas |
| **Should** | Important mais pas bloquant |
| **Could** | Souhaitable si le temps le permet |
| **Won't** | Hors scope délibéré |

### RICE
Score = (Reach × Impact × Confidence) / Effort
| Composant | Ce que tu mesures |
|---|---|
| **Reach** | Combien d'utilisateurs impactés par période |
| **Impact** | Intensité (0.25 / 0.5 / 1 / 2 / 3) |
| **Confidence** | Certitude de l'estimation (%) |
| **Effort** | Jours-personnes nécessaires |

---

## Backlog

### Structure minimale d'un item
- **Titre** — problème métier (pas une tâche technique)
- **Description** — contexte + impact si non traité
- **Type** — Problème / Besoin / Amélioration
- **Priorité** — Haute / Moyenne / Basse
- **Statut** — À faire / En cours / Fait
- **Sprint cible** — Sprint 1 à N

### Règle de rédaction
```
✅ "Les équipes Ops passent 2h par semaine à vérifier manuellement les inscriptions"
❌ "Ajouter une colonne dans Airtable"
```

---

## Agile & Sprints

| Terme | Définition |
|---|---|
| **Sprint** | Période de travail fixe (1-4 semaines) avec objectif clair |
| **Sprint Review** | Point de fin : réalisations, décisions, risques, next steps |
| **Epic** | Gros bloc fonctionnel découpé en user stories |
| **Definition of Done** | Critères clairs pour qu'un item soit terminé |

### Structure Sprint Review (PlayOff)
1. Objectif du sprint
2. Réalisations
3. Décisions prises
4. Arbitrages effectués
5. Risques et points de vigilance
6. Backlog impacté
7. Objectifs du sprint suivant

---

## PRD — Structure type
1. Contexte & problème
2. Objectifs (mesurables)
3. Personas
4. User Stories
5. Fonctionnalités
6. Critères de succès
7. Hors scope
8. Dépendances

---

## Benchmark d'outils

> **Process complet → charger `BENCHMARK-PROCESS.md`**
> Output → page Notion avec BDD scorée (structure dans le process)

### Résumé du process (5 phases)
1. **Cadrage** — besoin, outils, contraintes (questions à Isa)
2. **Critères & pondération** — co-construction, total = 100%
3. **Scoring** — note 1-5 par critère, un critère à la fois pour tous les outils
4. **Approfondissement** — scalabilité, pricing, POC si scores serrés
5. **Décision** — recommandation structurée + limites acceptées

---

## RGPD — Principes clés

### Les 6 principes
1. **Licéité** — base légale
2. **Limitation des finalités** — but précis
3. **Minimisation** — collecter seulement le nécessaire
4. **Exactitude** — données à jour
5. **Limitation de conservation** — pas de rétention indéfinie
6. **Intégrité & confidentialité** — sécurité

### En pratique Product Builder
- Données sensibles (email, téléphone, DDN) → masquées par défaut
- Accès restreint par profil
- Pas de données perso brutes dans les automatisations → champs Lookup dédiés
- Durée de conservation → définir avant lancement

---

## Décision & arbitrage

### Framework 5 étapes
1. Formuler le vrai problème (pas le symptôme)
2. Lister les options (même celles qu'on rejette)
3. Identifier les critères
4. Évaluer honnêtement
5. Décider et documenter (choix + raison + limites)

### Questions avant un choix technique
- Si quelqu'un reprend dans 6 mois, comprend-il le choix ?
- Est-ce que ça tient si le volume × 10 ?
- Que se passe-t-il si cet outil disparaît ?
- Puis-je l'expliquer en 2 minutes à un non-technique ?

---

## Vocabulaire PM essentiel

| Terme | Définition | Ne pas confondre avec |
|---|---|---|
| User Story | Besoin utilisateur narratif | Tâche technique |
| Règle de gestion | Contrainte métier dans l'outil | Critère d'acceptation |
| MVP | Version minimale du parcours principal | Prototype cliquable |
| Persona | Profil utilisateur représentatif | Utilisateur réel |
| Critères d'acceptation | Conditions pour qu'une US soit "done" | Critères de succès (macro) |
| Épic | Gros bloc découpable en US | Sprint (période) |
| Product Builder | Construit sans coder | Développeur, PM pur |
