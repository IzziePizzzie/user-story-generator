---
name: evaluation
description: Auto-évaluation chiffrée et structurée d'un livrable produit par Isa. Déclencher quand Isa dit "note-moi", "auto-évalue", "évalue ce scénario / cette formule / ce script", "qu'est-ce que tu mettrais à ça", "comment un jury jugerait", "simulation jury", ou demande explicitement une note sur un livrable. Charge la sous-grille spécifique à l'outil concerné (make.md, airtable.md, etc.).
---

# Evaluation — Auto-évaluation chiffrée des livrables

## Objectif

Donner à Isa une **note chiffrée + lettre + verdict ROI** sur n'importe quel livrable produit pendant la formation, avec un format de réponse cohérent quel que soit l'outil.

L'évaluation doit toujours répondre à 2 questions :
1. **Où en suis-je ?** (note actuelle)
2. **Est-ce que ça vaut le coup d'investir pour améliorer ?** (note projetée + verdict ROI)

---

## Sous-grilles disponibles

| Sous-grille | Quand la charger |
|---|---|
| `make.md` | Blueprint JSON Make, scénario d'automatisation, débrief de scénario |
| `skills.md` | Skill Claude Code (fichier `SKILL.md` d'un skill existant) — grille 100% technique, pas de mode jury RNCP |
| `lovable.md` | Prompt Lovable (init monolithique/segmenté, feature, fix) — évalue la qualité du prompt, pas le résultat livré |
| *(à venir)* `airtable.md` | Formules, structure de tables, scripts Airtable |
| *(à venir)* `code.md` | Scripts, webhooks, code custom (JS, Python, bash) |
| *(à venir)* `product.md` | User stories, backlog, priorisation, justifications produit |
| *(à venir)* `design.md` | HTML emails, composants UI, respect design system |

**Si aucune sous-grille n'existe** pour le type de livrable demandé → **ne pas inventer de critères à la volée**. Proposer à Isa de co-construire la grille ensemble (règle "ne jamais inventer").

---

## Méthode universelle (5 étapes)

1. **Identifier le type de livrable** fourni par Isa (blueprint Make, formule Airtable, script, prompt Lovable…)
2. **Charger la sous-grille** correspondante (`evaluation/make.md` par exemple)
3. **Noter chaque critère** selon la pondération définie dans la sous-grille
4. **Agréger** en note finale /100 + lettre (A à E) — voir échelle ci-dessous
5. **Produire les axes de progression** triés par ratio gain/effort + verdict ROI

---

## Échelle de notation

| Note /100 | Lettre | Signification |
|---|---|---|
| 90-100 | **A** | Excellent — niveau pro / production-ready |
| 75-89 | **B** | Solide — quelques axes d'amélioration mineurs |
| 60-74 | **C** | Correct — fonctionnel mais améliorations significatives |
| 40-59 | **D** | Insuffisant — refonte partielle nécessaire |
| 0-39 | **E** | À reprendre — bloquant |

---

## Format de réponse standard

```markdown
## Évaluation : [nom du livrable]

### Note actuelle : XX/100 — [Lettre]
### Note projetée après améliorations : YY/100 — [Lettre]  (gain : +Z points)

### Détail par critère
| Critère | Poids | Note actuelle | Note projetée | Justification |
|---|---|---|---|---|
| … | /25 | 12 | 23 | … |

### Axes de progression (priorisés par ratio gain/effort)
| # | Axe | Gain | Effort | Ratio |
|---|---|---|---|---|
| 1 | … | +X pts | faible / moyen / élevé | … |
| 2 | … | +X pts | … | … |
| 3 | … | +X pts | … | … |

### Verdict ROI — Vaut-il le coup d'investir ?
- **OUI** : si gain ≥ 15 pts ET effort raisonnable → faire les 3 axes
- **PARTIEL** : si seuls les axes 1-2 ont un bon ratio → ne faire que ceux-là, garder le reste en l'état
- **NON** : si gain < 10 pts ou effort disproportionné → garder tel quel, documenter les limites assumées

### Points forts à conserver
- …
- …
```

---

## Mode jury RNCP

**Déclencheurs** : "simulation jury", "comment un jury noterait", "note-moi sur le BC0X", "soutenance".

Quand ce mode s'active :
1. **Lire d'abord** `product-builder-rncp/SKILL.md` pour récupérer les critères des blocs concernés
2. **Adapter la grille** : ajouter 3 critères jury par-dessus la grille technique de la sous-grille
   - **Justification du choix produit** (/10) : Isa peut-elle expliquer pourquoi cette solution plutôt qu'une autre ?
   - **Conscience des limites** (/10) : assume-t-elle les trade-offs ? identifie-t-elle ce qui ne marche pas ?
   - **Lien avec les blocs BC01-BC04** (/10) : la solution démontre-t-elle les compétences attendues du bloc ?
3. **Format de réponse adapté** : remplacer "Détail par critère" par la structure **Contexte → Choix → Résultat → Limite** pour chaque axe (cf `focus.md` casquette Jury RNCP)
4. **Simuler 2-3 questions de challenge** que le jury pourrait poser, avec la réponse attendue

---

## Règles

- **Note actuelle ET note projetée toujours en premier** — le verdict ROI doit être visible immédiatement, sans scroll.
- **Pondération transparente** — chaque critère a son poids visible (ex : `/25`).
- **Estimer gain (en points) ET effort (faible/moyen/élevé)** pour chaque axe → permet le tri par ratio.
- **Au moins 1 axe de progression actionnable** par tranche de 20 points en dessous de 100.
- **Si la note projetée gagne < 10 points → recommander explicitement de NE PAS investir** (éviter les refactos cosmétiques sans valeur).
- **En mode jury** : être plus exigeant (la note baisse), simuler les questions de challenge.
- **Ne jamais inventer une grille** : si la sous-grille n'existe pas pour le type de livrable, proposer à Isa de la co-construire.
