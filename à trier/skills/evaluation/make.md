# Grille de notation — Blueprints Make

> Sous-grille du skill `evaluation`. Charger ce fichier quand Isa demande une note chiffrée sur un scénario Make ou fournit un blueprint JSON avec demande d'évaluation.
>
> Pour l'analyse qualitative (sans note chiffrée) → utiliser `make-integromat/BLUEPRINT-ANALYSIS.md` à la place.

---

## Vue d'ensemble — Pondération /100

| Critère | Poids | Focus |
|---|---|---|
| **Optimisation coût** | /25 | Réduction des opérations facturées |
| **Gestion d'erreurs** | /20 | Robustesse face aux échecs |
| **Logique métier & robustesse** | /20 | Couverture des cas, mapping correct |
| **Lisibilité & maintenabilité** | /15 | Reprise par un tiers |
| **Conformité bonnes pratiques Make** | /10 | Patterns standard de la plateforme |
| **Sécurité & données** | /10 | RGPD, typage, protection des champs calculés |
| **TOTAL** | **/100** | |

---

## Critère 1 — Optimisation coût (/25)

**Évalue** : la consommation d'opérations facturées par Make.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Trigger optimal pour la fréquence d'événement | /8 | Webhook si événement rare ou ponctuel = 8 pts. Polling 15 min sur événement rare (~1/semaine) = 2 pts. Polling justifié par contrainte = 6 pts. |
| Filtres en amont (à la source) | /6 | `formula` Airtable sur Watch Records = 6 pts. Filtre Make en milieu de scénario = 3 pts. Aucun filtre = 0 pt. |
| `maxRecords` configuré sur les Search/Watch | /4 | Présent et raisonné = 4 pts. Présent mais sans justif = 2 pts. Absent = 0 pt. |
| Pas de modules dupliqués entre branches d'un routeur | /4 | Factorisation correcte = 4 pts. 1 module dupliqué = 2 pts. Plusieurs duplications = 0 pt. |
| Itérateurs précédés d'un filtre | /3 | Toujours = 3 pts. Parfois = 1 pt. Itérateur sans filtre amont = 0 pt. |

**Calcul de coût mensuel** : intégrer dans la justification l'estimation `op/mois` (formule : `fréquence × modules_exécutés × jours`).

---

## Critère 2 — Gestion d'erreurs (/20)

**Évalue** : la capacité du scénario à gérer les échecs sans perte de données ni état incohérent.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Error handler sur chaque module write (Create/Update/Delete/Send) | /10 | 100% des writes couverts = 10 pts. 50-99% = 5 pts. < 50% ou aucun = 0 pt. |
| Directive adaptée au type de module | /5 | Break sur Airtable Create, Rollback sur transaction critique, Resume sur secondaire = 5 pts. Directives génériques = 2 pts. Ignore sur module critique = 0 pt. |
| Pas de "fire and forget" sur opération critique | /3 | Email après DB write avec error handler = 3 pts. Email avant DB ou sans handler = 0 pt. |
| Cohérence d'état en cas d'échec partiel | /2 | Si Gmail échoue, le statut Airtable n'est pas "Générée" = 2 pts. Sinon = 0 pt. |

---

## Critère 3 — Logique métier & robustesse (/20)

**Évalue** : la correction fonctionnelle et la couverture des cas.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Routeur avec fallback couvrant tous les cas | /6 | Branche fallback active + sans condition = 6 pts. Fallback désactivée ou conditions vides = 0 pt. **Critique si silencieux**. |
| Mapping correct des Record IDs et champs | /6 | Tous les `{{X.id}}` corrects, pas de bug type `id: {{1.Statut}}` = 6 pts. 1 bug = 0 pt. |
| Pas de champ formule/lookup/rollup en cible d'écriture | /4 | OK = 4 pts. 1 violation = 0 pt. |
| Format dates/arrays adapté à la destination | /3 | OK partout = 3 pts. 1 mauvais format = 1 pt. Plusieurs = 0 pt. |
| Conditions de filtre correctement typées | /1 | OK = 1 pt. Comparaison texte vs nombre = 0 pt. |

---

## Critère 4 — Lisibilité & maintenabilité (/15)

**Évalue** : la capacité d'un tiers (futur Isa, équipe Ops, jury) à comprendre le scénario.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Nommage explicite de chaque module (`metadata.designer.name`) | /6 | 100% nommés clairement = 6 pts. Quelques "Module N" génériques = 3 pts. Majorité non nommés = 0 pt. |
| Notes/documentation dans le scénario | /4 | `metadata.notes` rempli + commentaires = 4 pts. Partiel = 2 pts. Vide = 0 pt. |
| Taille raisonnable (< 15 modules) ou découpage justifié | /3 | OK = 3 pts. > 15 sans découpage = 0 pt. |
| Cohérence visuelle (auto-align, layout) | /2 | Propre = 2 pts. Spaghetti = 0 pt. |

---

## Critère 5 — Conformité bonnes pratiques Make (/10)

**Évalue** : le respect des patterns standard de la plateforme (cf Golden Rules de `make-integromat/SKILL.md`).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Ordre logique : DB write avant email | /3 | OK = 3 pts. Email avant write = 0 pt. |
| 1 scénario = 1 responsabilité | /3 | Scope clair = 3 pts. Scénario fourre-tout = 0 pt. |
| Instant > Polling quand alternative existe | /2 | Choix justifié = 2 pts. Polling par défaut sans réflexion = 0 pt. |
| Pas de modules placeholder oubliés | /2 | OK = 2 pts. 1+ placeholder = 0 pt. |

---

## Critère 6 — Sécurité & données (/10)

**Évalue** : la conformité RGPD et la protection des données.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Pas de PII en clair dans `notes`, `mapper`, ou subjects | /4 | OK = 4 pts. 1 fuite = 0 pt. |
| Connexions via `__IMTCONN__` (pas de tokens hardcodés) | /3 | OK = 3 pts. Token visible = 0 pt. |
| Webhook public protégé (validation payload, secret) | /2 | Validation présente = 2 pts. Webhook ouvert sans validation = 0 pt. |
| Données sensibles via lookups dédiés (pas en brut) | /1 | OK = 1 pt. Sinon = 0 pt. |

---

## Aide à l'estimation gain/effort

Pour chaque axe d'amélioration proposé, estimer :

### Gain (en points)
Faire la différence entre la note actuelle du critère et la note projetée si l'amélioration est appliquée. Sommer si l'axe touche plusieurs critères.

### Effort
| Niveau | Critères |
|---|---|
| **Faible** | Modification < 30 min, pas de refonte de structure (ex : ajouter un error handler, renommer des modules) |
| **Moyen** | 30 min - 2h, touche 1-2 modules avec impact limité (ex : ajouter un filtre, factoriser 2 modules) |
| **Élevé** | > 2h ou refonte structurelle (ex : passer de polling à webhook avec script Airtable, découper en sous-scénarios) |

### Ratio gain/effort
- **Gain ≥ 10 pts pour effort faible** → priorité maximale (à faire systématiquement)
- **Gain ≥ 15 pts pour effort moyen** → bon ROI
- **Gain ≥ 25 pts pour effort élevé** → vaut le coup si critique
- **Gain < 10 pts pour effort moyen/élevé** → ne pas faire (refacto cosmétique)
