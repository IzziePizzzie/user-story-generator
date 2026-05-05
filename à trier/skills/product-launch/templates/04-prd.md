# Template — PRD (Product Requirements Document)

> Étape 4 du skill `product-launch`. Document de référence qui définit **ce que** le produit fait (pas **comment**). Il sert de contrat entre la vision produit et l'implémentation.
>
> **Structure générique** → voir `product-builder-core/SKILL.md` section "PRD — Structure type".
> Ce template ajoute les sections spécifiques au cadrage MVP.

---

## Template PRD

```markdown
# PRD — [Nom du produit]
Version : [v1.0] | Date : [JJ/MM/AAAA] | Auteur : [Nom]

---

## 1. Contexte & problème
[Reprendre le Problem Statement de l'étape 1 + Parties prenantes identifiées à l'étape 2]

## 2. Objectifs produit
Objectif 1 : [Mesurable — ex: "Permettre à un utilisateur de réserver un terrain en moins de 3 minutes"]
Objectif 2 : [...]
Objectif 3 : [...]

> Règle : max 3 objectifs pour un MVP. S'ils ne sont pas mesurables, ce sont des intentions, pas des objectifs.

## 3. Personas
[Lister les personas définis à l'étape 3 avec un résumé 2 lignes chacun]
Persona principal : [Prénom]

## 4. User Stories prioritaires
[Voir template `05-user-stories.md`]

## 5. Fonctionnalités — MoSCoW
[Voir template `09-moscow.md`]

## 6. Critères de succès
| Critère | Cible | Comment le mesurer |
|---|---|---|
| [Ex: Taux de complétion du parcours principal] | [Ex: >80%] | [Ex: Test utilisateur sur 5 personnes] |

## 7. Hors scope (Won't)
- [Ce qui est volontairement exclu du MVP]
- [Et pourquoi]

## 8. Dépendances & contraintes
- [Outil, API, service externe nécessaire]
- [Contrainte RGPD identifiée]
- [Contrainte technique ou budget]
```
