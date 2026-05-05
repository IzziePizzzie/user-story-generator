# Template — Permissions & rôles

> Étape 8 du skill `product-launch`. Définir qui peut faire quoi dans le produit. Question produit (UX, parcours) ET question sécurité (RGPD, privacy rules Bubble).
>
> Principes RGPD généraux → voir `product-builder-core/SKILL.md` section "RGPD — Principes clés".

---

## Template permissions

```markdown
## Permissions par rôle — [Nom du produit]

### Rôles identifiés
- [Rôle 1] : [description courte]
- [Rôle 2] : [description courte]
- [Visiteur non connecté] : toujours documenter ce cas

### Matrice de permissions
| Action | [Rôle 1] | [Rôle 2] | Visiteur |
|---|---|---|---|
| Voir la liste des [objets] | ✅ | ✅ | ✅ |
| Créer un [objet] | ✅ | ❌ | ❌ |
| Modifier ses propres [objets] | ✅ | ❌ | ❌ |
| Modifier les [objets] des autres | ❌ | ✅ (admin) | ❌ |
| Voir les données personnelles | ✅ (les siennes) | ✅ (admin) | ❌ |
| Supprimer | ❌ | ✅ (admin) | ❌ |

### Règles RGPD à appliquer
- Données personnelles (email, téléphone...) : visibles uniquement par [rôles]
- Données d'autres utilisateurs : [règle de visibilité]
- Logs et historique : [durée de conservation prévue]
```

---

## Points à ne pas oublier

- **Visiteur non connecté** : toujours documenter ce cas (ne rien voir par défaut)
- **Ses propres objets vs ceux des autres** : distinction critique pour Bubble Privacy Rules
- **Données personnelles** : règle de visibilité explicite (email masqué en vue publique, etc.)
- **Implémentabilité** : ces permissions sont-elles faisables dans l'outil cible (Bubble Privacy Rules, Airtable interfaces) ?
