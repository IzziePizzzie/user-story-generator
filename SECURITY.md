# SECURITY.md — Règles de sécurité

> ⚠️ Ce fichier doit être lu avant toute action impliquant des credentials, des données personnelles ou des connexions à des services externes.

---

## Ce qui ne doit JAMAIS fuiter

### Clés API et credentials
| Élément | Risque | Règle |
|---------|--------|-------|
| Clé API Anthropic | Facturation, usage non autorisé | Dans `.env` uniquement, jamais dans le code |
| Token MCP Notion | Accès complet à ton Notion | Dans `.env` uniquement |
| Clé API Airtable | Lecture/écriture BDD | Dans `.env` uniquement |
| Token Make | Déclenchement de scénarios | Dans `.env` uniquement |
| Tout autre token/secret | Variable | Dans `.env` uniquement |

### Données personnelles PlayOff (RGPD)
- Emails, téléphones, noms des contacts (table Contact Airtable)
- Ne jamais copier ces données dans des fichiers de contexte ou des prompts
- Ne jamais les envoyer dans un appel API sans nécessité absolue

---

## Fichiers protégés — ne jamais committer sur GitHub

```
.env
.mcp.json
CLAUDE.local.md
.claude/settings.local.json
node_modules/
```

Ces fichiers sont listés dans `.gitignore` — **ne jamais les supprimer du `.gitignore`**.

---

## Philosophie settings.json

**Règle : "allow = local, deny = public"**

| Fichier | Contenu autorisé | Versionné ? |
|---------|-----------------|-------------|
| `.claude/settings.json` | `deny` + `ask: Write/Delete` uniquement | ✅ Git |
| `.claude/settings.local.json` | Tous les `allow` + `ask` spécifiques MCP | ❌ Gitignored |

**Pourquoi** : ne pas exposer sur GitHub la stack utilisée (MCP Notion, domaines Lovable, skills privés, Edit rights). Les `deny` et `ask: Write/Delete` sont **défensifs** — protection publique robuste même en cas de clone.

**Attention aux `Edit(...)` ponctuels** ajoutés en session (ex : `Edit(/.claude/skills/xxx/**)` pour autoriser une édition rapide). Ces permissions finissent en `settings.json` si on n'y prend pas garde → **toujours les déplacer en local avant de committer**.

Voir `.claude/rules/security.md` pour la règle complète et la checklist anti-pollution.

---

## Permissions MCP Notion

```json
"allow": [lecture seule — search, fetch, get]
"ask":   [écriture — create, update, move, duplicate]
"deny":  [suppression définitive]
```

> ⚠️ Toute action d'écriture dans Notion nécessite une validation explicite d'Isa.

---

## Signaux d'alerte — situations à risque

Claude doit signaler immédiatement si :
- Une clé API apparaît dans un fichier `.md`, `.json` ou dans le code directement
- Un fichier `.env` est sur le point d'être commité
- Une donnée personnelle (email, téléphone) est présente dans un contexte ou un prompt
- Une action Make ou Airtable pourrait écraser des données sans retour arrière possible
- Un webhook est exposé publiquement sans authentification

---

## Bonnes pratiques pour débutant

1. **Toujours vérifier `.gitignore`** avant un `git push`
2. **Ne jamais copier-coller une clé API** dans le chat ou dans un fichier de code
3. **Tester les scénarios Make sur des données fictives** avant de les activer en production
4. **Sauvegarder Airtable** (export CSV) avant toute modification en masse
5. **Demander à Claude de vérifier** avant tout déploiement ou envoi réel (email, SMS)
