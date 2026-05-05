# Grille de notation — Skills Claude Code

> Sous-grille du skill `evaluation`. Charger ce fichier quand Isa demande une note chiffrée sur un skill Claude Code (fichier `SKILL.md` + éventuels compagnons).
>
> **Pas de mode jury RNCP** sur cette grille : un skill est un outil de workflow perso, pas un livrable évalué par le jury. La grille reste 100% technique.

---

## Vue d'ensemble — Pondération /100

| Critère | Poids | Focus |
|---|---|---|
| **Utilité & portée** | /25 | Raison d'exister, positionnement, portabilité |
| **Complétude fonctionnelle** | /20 | Fait le job de bout en bout |
| **Clarté des déclencheurs** | /15 | Activation au bon moment, sans ambiguïté |
| **Sécurité & garde-fous** | /15 | Respect SECURITY.md, validations, zéro fuite |
| **Maintenabilité** | /15 | Taille raisonnable, pas de redondance interne |
| **Intégration écosystème** | /10 | Pointers vers CLAUDE.md / context / autres skills |
| **TOTAL** | **/100** | |

---

## Critère 1 — Utilité & portée (/25)

**Évalue** : la raison d'exister du skill dans l'écosystème et sa portabilité. **Le critère le plus lourd** — un skill mal positionné est un problème plus grave qu'un skill un peu bordélique.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Légitimité (pas de doublon/conflit avec un skill existant) | /8 | Fonction unique, aucun chevauchement = 8 pts. Chevauchement partiel assumé = 4 pts. Doublon direct avec un autre skill = 0 pt. |
| Granularité correcte (skill principal vs sous-skill) | /6 | Granularité cohérente avec son scope = 6 pts. Trop gros (devrait être découpé) ou trop petit (devrait être un sous-skill) = 2 pts. Complètement mal dimensionné = 0 pt. |
| Valeur ajoutée claire (réponse à un besoin réel, pas spéculatif) | /6 | Résout un vrai problème récurrent d'Isa = 6 pts. Utilité ponctuelle = 3 pts. Feature spéculative "au cas où" = 0 pt. |
| Portabilité / réutilisabilité sur un autre projet | /5 | Portable sans refonte = 5 pts. Portable avec adaptations mineures (noms tables, champs) = 3 pts. Hardcodé PlayOff/Cube = 0 pt. |

---

## Critère 2 — Complétude fonctionnelle (/20)

**Évalue** : la capacité du skill à faire le job de bout en bout, sans trou dans la raquette.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Cas nominaux couverts | /8 | Tous les cas principaux traités = 8 pts. 1-2 cas manquants = 4 pts. Cas critiques absents = 0 pt. |
| Cas limites ou erreurs anticipés | /6 | Erreurs et edge cases documentés = 6 pts. Mentionnés sans solution = 3 pts. Absents = 0 pt. |
| Process complet (entrée → action → sortie) | /4 | Workflow bout en bout = 4 pts. Workflow partiel ("après il faut que tu fasses X à la main") = 2 pts. Juste un bout = 0 pt. |
| Livrables finaux identifiés | /2 | Quoi produire + où le mettre clair = 2 pts. Flou = 0 pt. |

---

## Critère 3 — Clarté des déclencheurs (/15)

**Évalue** : la capacité du skill à s'activer au bon moment et seulement au bon moment.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Mots-clés déclencheurs explicites et variés | /6 | Liste exhaustive de triggers + synonymes = 6 pts. Quelques triggers = 3 pts. Vague ou absent = 0 pt. |
| Pas d'ambiguïté avec un autre skill | /4 | Déclencheurs uniques = 4 pts. Chevauchement mineur = 2 pts. Confusion possible avec un autre skill = 0 pt. |
| Description dans le frontmatter claire et actionnable | /3 | Description `when to use` précise = 3 pts. Générique = 1 pt. Vide ou vague = 0 pt. |
| Exemples de phrases-trigger données | /2 | Exemples concrets de ce que dit Isa = 2 pts. Absent = 0 pt. |

---

## Critère 4 — Sécurité & garde-fous (/15)

**Évalue** : le respect des règles de sécurité du projet et la prévention des actions destructives involontaires.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Validation explicite avant action destructive | /5 | Demande confirmation avant écriture/suppression = 5 pts. Partielle = 2 pts. Aucune = 0 pt. |
| Respect SECURITY.md et règles projet (rules/security.md) | /4 | Lit et applique les règles = 4 pts. Mentionne sans appliquer = 2 pts. Ignore = 0 pt. |
| Pas de fuite de credentials / pas de `allow` dans settings.json public | /3 | Jamais de manipulation de secrets hors SECURITY.md = 3 pts. Risque identifié mais géré = 1 pt. Fuite possible = 0 pt. |
| Règle "ne jamais inventer" présente (ou héritée via CLAUDE.md) | /3 | Règle explicite dans le skill = 3 pts. Héritée implicitement = 2 pts. Skill peut inventer des données = 0 pt. |

---

## Critère 5 — Maintenabilité (/15)

**Évalue** : la capacité à faire évoluer le skill dans le temps sans casse.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Taille raisonnable (SKILL.md < 300 lignes ou sous-fichiers justifiés) | /5 | Taille compacte ou découpage en sous-grilles = 5 pts. Fichier ballonné mais lisible = 2 pts. Monstre illisible = 0 pt. |
| Pas de redondance interne (pas de règles répétées 3 fois) | /4 | DRY respecté = 4 pts. Quelques répétitions = 2 pts. Copier-coller systémique = 0 pt. |
| Structure claire (sections, tableaux, titres hiérarchisés) | /3 | Sommaire implicite lisible = 3 pts. Structure floue = 1 pt. Bloc unique de prose = 0 pt. |
| Versionnable (markdown propre, pas de dépendance externe fragile) | /3 | 100% markdown + refs stables = 3 pts. Quelques refs fragiles = 1 pt. Dépend de fichiers volatils = 0 pt. |

---

## Critère 6 — Intégration écosystème (/10)

**Évalue** : l'aspect *technique* d'intégration du skill dans le projet (différent du critère 1 qui évalue la *légitimité stratégique*).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Pointers corrects vers CLAUDE.md / context / rules | /4 | Références valides et utiles = 4 pts. Partiellement à jour = 2 pts. Refs cassées = 0 pt. |
| Mentionne les autres skills liés (si pertinent) | /3 | Pointeurs croisés présents = 3 pts. Silencieux = 1 pt. Ignore délibérément un skill pertinent = 0 pt. |
| Cohérence avec les conventions du projet (style.md, focus.md, memory.md) | /3 | 100% cohérent = 3 pts. 1-2 écarts = 1 pt. Contredit les règles = 0 pt. |

---

## Aide à l'estimation gain/effort

Pour chaque axe d'amélioration proposé, estimer :

### Gain (en points)
Faire la différence entre la note actuelle du critère et la note projetée si l'amélioration est appliquée. Sommer si l'axe touche plusieurs critères.

### Effort
| Niveau | Critères |
|---|---|
| **Faible** | Modification < 30 min, pas de refonte (ex : ajouter des triggers au frontmatter, corriger un pointer) |
| **Moyen** | 30 min - 2h, touche la structure ou plusieurs sections (ex : découper en sous-fichiers, ajouter un critère d'action) |
| **Élevé** | > 2h ou refonte structurelle (ex : redécouper en 2 skills, réécrire la logique d'activation, fusionner avec un autre skill) |

### Ratio gain/effort
- **Gain ≥ 10 pts pour effort faible** → priorité maximale (à faire systématiquement)
- **Gain ≥ 15 pts pour effort moyen** → bon ROI
- **Gain ≥ 25 pts pour effort élevé** → vaut le coup si critique (ex : supprimer un doublon stratégique)
- **Gain < 10 pts pour effort moyen/élevé** → ne pas faire (refacto cosmétique)
