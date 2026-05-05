# Template — User Stories + Critères d'acceptation

> Étape 5 du skill `product-launch`.
>
> **Format générique "En tant que..." + règles d'écriture + Given/When/Then** → voir `product-builder-core/SKILL.md` section "User Stories".
> Ce template ajoute la spécificité cadrage MVP : volume + priorisation.

---

## Template tableau User Stories

```markdown
## User Stories — [Nom du produit]

| ID | Persona | User Story | Priorité | Critères d'acceptation |
|---|---|---|---|---|
| US-01 | [Persona] | En tant que... je veux... afin de... | Must | Given... When... Then... |
| US-02 | | | Should | |
| US-03 | | | Must | |
```

---

## Volume de stories MVP

- **Must** : 5 à 8 stories maximum (parcours principal de bout en bout)
- **Should** : 3 à 5 stories (V1 post-MVP)
- **Could / Won't** : documentées dans le backlog, **pas** dans le PRD

---

## Spécificités cadrage MVP

- Chaque story Must doit correspondre à **un écran de maquette** (étape 5c)
- Si une story Must n'a pas d'écran associé → soit la story est incomplète, soit il manque un écran
- Chaque story Must doit être **liée à un item MoSCoW** (étape 9) pour traçabilité
