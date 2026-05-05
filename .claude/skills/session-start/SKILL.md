---
name: session-start
description: |
  Charger le contexte du projet et cadrer la session de travail. Déclencher sur :
  "on commence", "on démarre", "nouvelle session", "charge le contexte",
  "où on en était", "rappelle-moi où on en est", "on reprend".
  Utiliser aussi en début de conversation si Isa n'a pas encore précisé sur quoi travailler —
  c'est le point d'entrée naturel de chaque session.
---

# Session Start

L'objectif : reprendre là où on s'est arrêtés, sans friction, et décider ensemble sur quoi travailler.

## Étape 1 — Charger le contexte

Lire ces fichiers dans cet ordre :

1. `context/me.md` → qui est Isabelle, comment elle travaille
2. `memory/MEMORY.md` → règles de collaboration établies, patterns à respecter
3. `context/decisions-log.md` → les 3-5 dernières décisions (lire en haut du fichier, entrées les plus récentes)
4. Si un produit est en cours → lire son README dans `products/[nom-produit]/`

Ne pas tout lire en détail — scanner pour identifier ce qui est actif et pertinent.

**Vérification rapide de sécurité** : lire `.claude/settings.json` et vérifier qu'il ne contient que des `deny`. Si des `allow` sont présents (ajoutés automatiquement lors de la session précédente), les supprimer avant de commencer. C'est une minute de nettoyage qui évite de committer des permissions non intentionnelles.

## Étape 2 — Résumé de contexte

Présenter en 3-4 lignes maximum :
- Ce qui était en cours à la dernière session (si visible dans les décisions)
- Les produits actifs (statut : idée / en validation / en build / en ligne)
- Un rappel de l'objectif en cours (ex : "valider une idée SEO", "finir l'outil X", "premier déploiement")

Être concis. Isa n'a pas besoin d'un roman — juste assez pour se replacer mentalement.

## Étape 3 — Cadrer la session

Poser une seule question directe :

> **Sur quoi tu veux travailler aujourd'hui ?**

Proposer 2-3 options concrètes basées sur le contexte chargé. Exemples :
- "Continuer la validation SEO de l'idée [X]"
- "Coder l'outil [Y] qui était validé"
- "Explorer une nouvelle idée"
- "Audit et nettoyage du workspace"

Laisser Isa choisir ou décrire autre chose.

## Étape 4 — Lancer

Une fois la direction choisie, activer le skill correspondant ou commencer directement :
- Nouvelle idée → `seo-research` puis `validate-product`
- Build → `build-micro-tool`
- Fin de session → `end-of-session`
- Audit → `project-maintenance`

## À noter

Ce skill est léger et rapide — il ne doit pas prendre plus de 2 minutes.
L'objectif est de démarrer vite, pas de faire un bilan exhaustif.
Le bilan exhaustif, c'est le rôle de `end-of-session`.
