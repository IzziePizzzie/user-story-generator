# Template — Cycle de vie des objets métier

> Étape 6 du skill `product-launch`. Avant de modéliser la BDD, définir les **statuts** de chaque objet clé et les **transitions** entre ces statuts. Cette étape révèle les règles métier implicites.

---

## Template cycle de vie

```markdown
## Objet : [Nom de l'objet]

Cycle de vie :
[Statut A] → [Statut B] → [Statut C] → [Statut D]
                              ↓
                         [Statut Annulé] (cas d'erreur)

| Statut | Signification métier | Condition de transition | Déclenche |
|---|---|---|---|
| [Statut A] | [Ce que ça veut dire] | [Qui peut changer, sous quelle condition] | [Action auto si applicable] |
| [Statut B] | | | |
```

---

## Questions à se poser pour chaque objet

- Quels sont tous les **états possibles** ?
- Qui peut **déclencher chaque transition** (utilisateur, admin, automatisation) ?
- Y a-t-il des **transitions automatiques** (déclencheurs Make / Airtable) ?
- Y a-t-il des **états bloquants** (l'objet ne peut pas avancer sans condition X) ?
- Y a-t-il des **états terminaux** (annulé, expiré, clôturé) ?

---

## Pont vers l'étape suivante

Les statuts définis ici deviennent des **champs de statut** dans le schéma BDD (étape 7).
Les transitions automatiques deviennent des **triggers Make** ou **automatisations Airtable**.
