# Template — MoSCoW & périmètre MVP

> Étape 9 du skill `product-launch`.
>
> **Framework MoSCoW générique (Must / Should / Could / Won't)** → voir `product-builder-core/SKILL.md` section "Priorisation".
> Ce template ajoute les règles spécifiques cadrage MVP.

---

## Template MoSCoW MVP

```markdown
## MoSCoW — [Nom du produit] MVP

### Must (sans ça le produit ne fonctionne pas)
- [ ] [Fonctionnalité 1] — lié à US-0X
- [ ] [Fonctionnalité 2] — lié à US-0X

### Should (important mais pas bloquant pour le MVP)
- [ ] [Fonctionnalité 3]
- [ ] [Fonctionnalité 4]

### Could (souhaitable si le temps le permet)
- [ ] [Fonctionnalité 5]

### Won't (hors scope délibéré — à documenter avec justification)
- [Fonctionnalité X] — Raison : [complexité, hors cible MVP, évolution V2]
- [Fonctionnalité Y] — Raison : [...]
```

---

## Règles spécifiques cadrage MVP

- Les **Must** doivent couvrir le **parcours principal de bout en bout** sans blocage
- Un **Must sans User Story correspondante est suspect** — soit c'est une tâche technique déguisée, soit il manque une US
- Le **Won't est aussi important que le Must** — il protège le périmètre contre la dérive
- Si **tout est Must**, la priorisation n'a pas été faite
- Chaque item Must doit être **traçable à une US et à un écran de maquette**
