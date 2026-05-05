# Template — Persona

> Étape 3 du skill `product-launch`. Définir 2-3 profils utilisateurs représentatifs. Pas des caricatures — des profils ancrés dans la réalité du problème.

---

## Mode co-construction (AskUserQuestion)

**Quand l'activer** : Isa dit "aide-moi à construire le persona", "on le fait ensemble", "je sais pas trop", ou ne donne que le prénom / la cible. Sinon — si elle donne directement le persona complet dans son message — taper le tableau tel quel, ne pas l'interroger.

**Utiliser `AskUserQuestion`** pour les champs énumérables (choix rapides), **texte libre** pour le reste.

### Questions AskUserQuestion (choix multiples)

| Champ | Options proposées |
|---|---|
| Tranche d'âge | 18-25 / 25-35 / 35-45 / 45-55 / 55+ |
| Situation | Salarié / Indépendant / Étudiant / Dirigeant / Retraité / Autre |
| Niveau digital | Débutant / Intermédiaire / Avancé / Power user |
| Device principal | Mobile prioritaire / Desktop prioritaire / Mixte |
| Fréquence d'usage anticipée | Quotidienne / Hebdo / Mensuelle / Occasionnelle |
| Type persona | Principal / Secondaire / Bloquant (à convaincre) |

> Règle : poser **1 à 2 questions max par batch** AskUserQuestion pour éviter l'effet formulaire. Grouper les plus liés (ex : âge + situation).

### Questions en texte libre (à poser après)

- Le nom / prénom fictif du persona
- Son problème principal (1 phrase)
- Ses 3 frustrations les plus fortes
- Ce qu'il attend concrètement du produit
- Ce qui le ferait abandonner dès les premières secondes

### Fin de co-construction

- Récapituler le persona complet sous forme de tableau markdown
- Demander validation avant de passer au persona suivant
- Marquer explicitement le persona principal

---

## Template Persona (à remplir en solo ou après co-construction)

```markdown
## Persona — [Prénom fictif, ex: "Julie"]

**Profil**
- Âge approximatif :
- Situation : (ex: salarié, étudiant, indépendant...)
- Niveau digital : (débutant / intermédiaire / avancé)
- Contexte d'usage : (quand, où, sur quel device)

**Son problème principal**
[Une phrase claire sur ce qu'il/elle essaie d'accomplir]

**Ses frustrations actuelles**
- [Frustration 1]
- [Frustration 2]
- [Frustration 3]

**Ce qu'il/elle attend du produit**
[Ce que le produit lui apporte concrètement]

**Ce qui le/la ferait abandonner**
[Le principal point de friction à éviter absolument]
```

---

## Règles personas

- **Max 3 personas** pour un MVP — au-delà, on perd le focus
- **Un problème distinct par persona** — si deux personas ont le même problème, les fusionner
- **Identifier le persona principal** (celui pour qui le MVP est d'abord conçu)
- **Ne pas inventer** — s'appuyer sur des observations, interviews ou analogies réelles
- **Vérifier la cohérence avec les Parties prenantes (étape 2)** — chaque persona doit correspondre à une partie prenante utilisateur identifiée
