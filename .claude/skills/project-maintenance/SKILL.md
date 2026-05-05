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
| `context/me.md` | Profil à jour ? Objectifs toujours cohérents ? |
| `context/business-vision.md` | Vision et objectifs chiffrés toujours valides ? |
| `context/target-persona.md` | Personas toujours représentatifs de la cible ? |
| `context/decisions-log.md` | Décisions récentes bien logguées ? Format respecté ? |
| `context/feedback-log.md` | Feedbacks récents capturés ? |
| `CLAUDE.md` | Skills listés = skills existants dans `.claude/skills/` ? Stack et règles à jour ? |
| `SECURITY.md` | Fichiers protégés listés = fichiers dans `.gitignore` ? |

## Étape 2 — Audit des skills

Pour chaque skill dans `.claude/skills/` :
1. Le `SKILL.md` existe et a un frontmatter valide (`name`, `description`)
2. La description correspond au contenu réel du skill
3. Le skill est référencé dans `CLAUDE.md` (section Skills disponibles)
4. Les fichiers référencés dans le skill existent bien
5. Pas de doublon avec un autre skill

## Étape 3 — Audit config et mémoire

- `.claude/settings.json` : contient uniquement des `deny` ? Pas de `allow` qui se serait glissé ?
- `.gitignore` : `.env`, `.claude/settings.local.json`, `.mcp.json`, `CLAUDE.local.md` listés ?
- `memory/MEMORY.md` : entrées encore valides ? Pas d'infos obsolètes ?
- `memory/project_sprint_status.md` : statut des produits à jour ?

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
