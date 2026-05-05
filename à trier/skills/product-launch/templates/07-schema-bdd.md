# Template — Schéma BDD

> Étape 7 du skill `product-launch`. Modéliser les objets, leurs champs clés et leurs relations avant de toucher à un outil.

---

## Template schéma (format texte)

```markdown
## Schéma BDD — [Nom du produit]

### Objets principaux
| Objet | Champs clés | Statuts | Notes |
|---|---|---|---|
| [User] | id, email, nom, rôle | actif / inactif | Table sensible RGPD |
| [Terrain] | id, nom, adresse, sport, capacité | disponible / indisponible | |
| [...] | | | |

### Relations
| Relation | Type | Via | Remarque |
|---|---|---|---|
| User → Réservation | 1-N | — | Un user peut avoir plusieurs réservations |
| Terrain ↔ Session | N-N | [table pivot] | Plusieurs créneaux par terrain |

### Tables pivot (relations N-N)
[Nom de la table] relie [Objet A] à [Objet B]
Champs portés : [statut d'inscription, date, métadonnées propres à la relation]
```

---

## Règles de modélisation MVP

- **Partir des objets du cycle de vie** (étape 6) — ils sont déjà connus
- **Une relation N-N = toujours une table pivot explicite**
- **Ne pas modéliser les champs calculés** comme des champs de saisie (lookup / rollup / formule ≠ input)
- **Identifier les champs RGPD dès le schéma** (email, téléphone, DDN, données de paiement…)
- **Documenter ce qui est hors MVP mais anticipé** (ne pas surmodéliser, mais garder les hooks)

---

## Pont vers les étapes suivantes

- Les statuts cycle de vie (étape 6) → champs de statut dans ce schéma
- Les champs RGPD identifiés ici → règles de visibilité dans l'étape 8 (permissions) + documentation dans 10b (sécurité RGPD)
