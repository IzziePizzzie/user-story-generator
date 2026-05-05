# Template — Design System + Maquettes + Prototype

> Étapes 5b, 5c, 5d du skill `product-launch`. Les 3 livrables design s'enchaînent : règles visuelles → écrans de référence → démo cliquable.
>
> Pour le contexte PlayOff : appliquer `playoff-design-system/SKILL.md` à la place de cette étape.
> Pour les prompts Lovable optimisés crédits : voir `lovable-prompts/SKILL.md`.

---

## 5b — Design System minimal MVP

```markdown
## Design System — [Nom du produit]

### Couleurs
- Couleur principale (identité) : [#hex]
- Couleur secondaire : [#hex]
- Couleur d'action (CTA — boutons, liens) : [#hex]
- Couleur neutre (fond, texte) : [#hex]

### Typographie
- Police titres : [nom + règle H1/H2/H3]
- Police corps : [nom + règle taille]
- Hiérarchie visuelle : titre > sous-titre > texte > libellé

### Composants de base
- Bouton principal
- Bouton secondaire
- Champ de formulaire
- Carte (objet métier principal affiché en liste)

### Règles d'usage
- Alignements et espacements
- Contraste minimum, taille minimum
```

**Règle MVP** : 4 couleurs + 2 polices + 4 composants suffisent. Pas plus.

---

## 5c — Description d'écran (maquette Figma)

```markdown
## Écran — [Nom de l'écran]

User Story(ies) couverte(s) : US-0X, US-0X
Persona principal : [Prénom]

Éléments présents :
- [Composant 1 — ex: liste des terrains disponibles]
- [Composant 2 — ex: filtre par sport]
- [CTA principal — ex: "Réserver ce terrain"]

Action attendue de l'utilisateur :
[Ce que l'utilisateur fait sur cet écran]

Écran suivant :
[Vers quel écran l'action principale mène]

États à prévoir :
- Vide (liste sans résultat)
- Chargement
- Erreur
```

**Règle de sélection** : couvrir uniquement les écrans Must du parcours principal. 1 User Story Must = 1 écran minimum.

---

## 5d — Prompt Lovable (structure)

```markdown
Contexte produit :
[Description en 2-3 phrases : qui, quel problème, quel produit]

Parcours utilisateur à démontrer :
1. [Écran 1 — action de l'utilisateur]
2. [Écran 2 — action suivante]
3. [Écran 3 — résultat final]

Périmètre volontairement simulé :
- [Ce qui est fictif : données, calculs, authentification...]
- [Ce qui n'est pas implémenté : paiement, notifications...]

Contraintes visuelles :
- Couleur principale : [#hex]
- Couleur CTA : [#hex]
- Style : [sobre / dynamique / sportif...]
- Inspiration : [joindre exports Figma si disponibles]

Important : ne pas ajouter de base de données ni de logique métier.
Rester sur [X] écrans maximum.
```

**Règle prototype** : démo cliquable uniquement. Pas de BDD, pas de logique métier réelle, pas d'itération infinie.
