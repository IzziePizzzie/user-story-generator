# Template — Documentation (Journal arbitrages + Sécurité RGPD + Passation)

> Étape 10 du skill `product-launch`. La documentation n'est pas une étape finale — c'est un fil continu. Chaque décision prise doit être tracée au moment où elle est prise.
>
> 3 documents en parallèle : **10a journal arbitrages** (continu), **10b sécurité RGPD** (continu), **10c passation** (finale).

---

## 10a — Journal des arbitrages (continu)

À tenir **dès l'étape 1**, mis à jour à chaque décision structurante.

```markdown
## Journal des arbitrages — [Nom du produit]

### Arbitrage [N] — [Titre court]
Date : [JJ/MM/AAAA]
Contexte : [Pourquoi cette décision était nécessaire]
Options considérées :
  - Option A : [description + avantages + inconvénients]
  - Option B : [description + avantages + inconvénients]
Décision retenue : [Option X]
Raison : [Critère principal qui a fait pencher la balance]
Limites connues : [Ce que ce choix ne couvre pas]
```

**Quand créer un arbitrage** : à chaque fois qu'il y avait plusieurs options et qu'un choix a été fait. Si la décision était évidente, pas besoin d'arbitrer — la noter suffit.

---

## 10b — Page Sécurité & RGPD (continu)

À **initialiser dès que des données personnelles apparaissent dans le modèle** (étape 7).

```markdown
## Sécurité & RGPD — [Nom du produit]

### Données personnelles identifiées
| Champ | Objet | Sensibilité | Visible par |
|---|---|---|---|
| Email | User | Haute | L'utilisateur lui-même + admin |
| Téléphone | User | Haute | Admin uniquement |

### Règles de visibilité appliquées
- [Règle 1 — ex: les emails ne sont pas affichés dans les vues publiques]
- [Règle 2]

### Automatisations manipulant des données personnelles
| Scénario | Données manipulées | Risque identifié | Mesure appliquée |
|---|---|---|---|

### Durée de conservation prévue
- [Type de donnée] : [durée] — [justification]

### Risques identifiés
- [Risque 1] : [Mesure de mitigation]

### Plan d'action en cas d'incident
1. [Étape 1 — ex: identifier la nature et le périmètre de l'incident]
2. [Étape 2 — ex: notifier les personnes concernées si données personnelles exposées]
3. [Étape 3 — ex: corriger et tracer]
```

---

## 10c — Documentation de passation (finale)

Rédigée **en fin de cadrage, avant le go-dev**. Elle doit permettre à quelqu'un d'autre de reprendre le projet sans toi.

```markdown
## Documentation de passation — [Nom du produit]
Version : [v1.0] | Date : [JJ/MM/AAAA]

### Ce que fait le produit
[2-3 phrases — reprendre la proposition de valeur]

### Stack technique
| Outil | Usage | Accès |
|---|---|---|
| [Bubble] | Application principale | [lien + credentials] |
| [Airtable] | [si utilisé] | |
| [Make] | Automatisations | |

### Parcours principal
[Description étape par étape du parcours Must, sans jargon technique]

### Règles métier clés
- [Règle 1 — ex: une réservation ne peut être créée que si le terrain est disponible]
- [Règle 2]

### Limites connues du MVP
- [Limite 1 — et pourquoi elle a été acceptée]
- [Limite 2]

### Prochaines évolutions identifiées
- [Évolution 1 — Should ou Could du MoSCoW]
- [Évolution 2]

### Points de vigilance
- [Point 1 — ex: les données de paiement ne sont pas gérées dans ce MVP]
```
