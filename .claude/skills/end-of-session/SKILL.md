---
name: end-of-session
description: |
  Récapitulatif de fin de session et commit GitHub. Déclencher quand Isa dit "on s'arrête",
  "fin de session", "récap de ce qu'on a fait", "commit GitHub", ou "clôture la session".
  Produit un résumé structuré de la session et propose un commit si des fichiers ont changé.
---

# End of Session

L'objectif : un projet **clean, committé, documenté et sauvegardé** à chaque fin de session.

## Étape 1 — Récapitulatif de session
Lister ce qui a été produit ou décidé pendant la session :
- Livrables créés / modifiés
- Décisions prises → vérifier qu'elles sont logguées dans `context/decisions-log.md`
- Points bloquants identifiés
- Prochaines étapes suggérées

### Format des entrées dans `context/decisions-log.md`
- **Titre :** `### DD/MM/YYYY : Titre` (ex : `### 15/04/2026 : Choix stack`)
- **Ordre :** antéchronologique — toute nouvelle entrée se met **en haut**
- Corps : **Décision** / **Contexte** / **Raisonnement** (en gras, retours à la ligne)
- Séparer chaque entrée par `---`

## Étape 2 — Audit de sécurité et nettoyage

### 2a — Auditer settings.json versionné
Lire `.claude/settings.json` et vérifier la règle **"allow = local, deny = public"** :
- AUCUN `allow` ne doit être présent (règle absolue)
- Seuls des `deny` sont tolérés dans ce fichier
- Si un `allow` s'est glissé automatiquement (Bash, Edit, MCP…) → le supprimer ou le déplacer dans `.claude/settings.local.json`
- Voir `SECURITY.md` pour la règle complète

### 2b — Vérifier .gitignore
Vérifier que `.env`, `.mcp.json`, `CLAUDE.local.md`, `.claude/settings.local.json` sont toujours listés.

### 2c — Vérifier les fichiers stagés
Avant le commit, lancer `git status` et vérifier :
- Aucune donnée personnelle (emails, téléphones, noms réels)
- Aucun fichier credentials ou token
- Si un fichier suspect est stagé → alerter Isa et ne pas committer

## Étape 3 — Mettre à jour la mémoire
- Mettre à jour `memory/project_sprint_status.md` avec le statut actuel des produits
- Créer un fichier `memory/feedback_[sujet].md` si Isa a corrigé ou validé une approche non-évidente
- Mettre à jour `memory/MEMORY.md` si des fichiers mémoire ont été ajoutés/supprimés

## Étape 4 — Commit GitHub (si validé)
- Proposer un message de commit clair et descriptif (en français, pas de Co-Authored-By)
- Attendre la validation d'Isa
- Exécuter le commit + push

## Étape 5 — Sync Notion (optionnel)
Proposer de lancer le skill `notion-sync` si des pages Notion sont concernées par les changements.
