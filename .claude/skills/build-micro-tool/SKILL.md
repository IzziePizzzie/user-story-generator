---
name: build-micro-tool
description: Utiliser ce skill pour construire un micro-outil web. Déclencher sur : "construis l'outil", "code cet outil", "génère le code", "build". Inclut les règles de qualité UI/UX, SEO et deploy.
allowed-tools: Read, Write, Bash
---

# Build d'un micro-outil web

## Avant de coder — checklist obligatoire
- [ ] Lire @context/business-vision.md pour rappel des contraintes
- [ ] Lire @context/target-persona.md pour garder l'utilisateur en tête
- [ ] Vérifier que la validation produit a été faite

## Choix technique
- **Outil simple (1 interaction)** → HTML + CSS + JS vanilla, fichier unique
- **Outil avec état ou plusieurs vues** → React, fichier unique (tout inline)
- **Jamais** de backend sauf si absolument nécessaire

## Structure HTML obligatoire
```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Nom de l'outil] — [Bénéfice en 5 mots]</title>
  <meta name="description" content="[Description SEO 150 caractères max]">
  <meta property="og:title" content="[Titre]">
  <meta property="og:description" content="[Description]">
</head>
```

## Règles UI/UX non négociables
1. Mobile-first : tester mentalement sur 375px
2. CTA principal visible sans scroll
3. Résultat affiché immédiatement après action
4. Maximum 2 champs de saisie pour le cas d'usage principal
5. Couleurs accessibles (contraste > 4.5:1 pour le texte)
6. Police lisible : minimum 16px pour le body

## Règles SEO
- H1 unique contenant le mot-clé principal
- Texte explicatif sous le H1 (50 à 100 mots) pour indexation
- Footer avec lien vers d'autres outils du portfolio (quand ils existent)

## Après le code
- Créer le dossier dans /products/[nom-outil]/
- Créer le README.md du produit (voir skill new-product-readme)
- Documenter la décision dans @context/decisions-log.md
