---
name: project-maintenance
description: |
  Analyse, nettoyage et suggestions de mise à jour du projet. Déclencher quand Isa dit
  "analyse le projet", "qu'est-ce qui est à jour", "nettoyage", "audit du projet",
  ou quand il faut vérifier la cohérence des fichiers contexte et skills.
---

# Project Maintenance

## Étape 1 — Audit des fichiers contexte

Lire chaque fichier et vérifier avec cette checklist :

| Fichier | Vérifications |
|---------|---------------|
| `context/me.md` | Rôle actuel correct ? Certification à jour ? Objectif formation cohérent ? |
| `context/work.md` | Stack outils complète ? Connexions MCP à jour ? Sprint range correct ? |
| `context/team.md` | Personnages cohérents avec les sprints en cours ? Rôles encore pertinents ? |
| `context/playoff-project.md` | Livrables par sprint complets ? Cohérent avec ce qui a été réellement produit ? |
| `CLAUDE.md` | Skills listés = skills existants ? Outils connectés à jour ? Environnement correct ? |
| `SECURITY.md` | Fichiers protégés listés = fichiers dans `.gitignore` ? Permissions MCP cohérentes avec `settings.json` ? |

## Étape 2 — Audit des skills

Pour chaque skill dans `.claude/skills/` :
1. Le SKILL.md existe et a un frontmatter valide (name, description)
2. La description correspond au contenu réel du skill
3. Le skill est référencé dans `CLAUDE.md` (section Skills disponibles)
4. Le contenu est actionnable (pas juste des généralités)
5. Pas de doublon avec un autre skill

## Étape 3 — Audit config et mémoire

- `.claude/settings.json` : permissions cohérentes avec les MCP actifs ? Pas de références à des serveurs inexistants ?
- `.gitignore` : tous les fichiers sensibles listés ?
- `memory/MEMORY.md` : mémoires encore valides ? Pas de doublons ? Infos obsolètes ?

## Étape 4 — Rapport de maintenance

Présenter un rapport structuré :

| Élément | Statut | Problème identifié | Action suggérée |
|---------|--------|-------------------|-----------------|
| ... | ✅ OK / ⚠️ À mettre à jour / ❌ Manquant / 🗑️ Obsolète | ... | ... |

## Étape 5 — Mise à jour (avec validation)

Pour chaque mise à jour proposée :
- Montrer le contenu actuel vs. le contenu proposé
- Attendre la validation explicite d'Isa avant de modifier
- Ne jamais modifier plusieurs fichiers en même temps sans validation intermédiaire
