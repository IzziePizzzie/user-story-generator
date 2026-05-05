---
name: seo-research
description: |
  Analyser le potentiel SEO d'un mot-clé ou d'une idée de micro-outil web. Déclencher sur :
  "est-ce que les gens cherchent ça", "quel est le volume de recherche", "recherche SEO",
  "valide le SEO", "y a-t-il de la demande pour", "cherche si les gens googlen".
  Utiliser aussi dès qu'on évalue une idée dans /ideas/ — le SEO doit toujours être vérifié
  avant de passer à validate-product ou de coder quoi que ce soit.
allowed-tools: WebSearch
---

# SEO Research

L'objectif : savoir si des vrais gens cherchent activement ce que tu veux construire.
Sans demande prouvée, pas de produit — le SEO organique est le canal principal du projet.

## Ce qu'on cherche

Pour chaque idée, répondre à 3 questions :
1. **Y a-t-il une demande ?** Les gens cherchent-ils activement ce problème/outil ?
2. **Quelle est l'intention ?** Cherchent-ils un outil gratuit à utiliser maintenant, un tutoriel, une définition ?
3. **Le marché est-il accessible ?** Les résultats actuels sont-ils mauvais ou génériques ?

## Processus en 4 étapes

### 1. Trouver les vraies requêtes

Chercher les formulations exactes que les utilisateurs tapent. Ne pas inventer — chercher.

Requêtes à explorer :
- `[outil] free online` / `[outil] gratuit en ligne`
- `[outil] tool for designers` / `[outil] pour designers`
- `[problème] checker` / `[problème] generator` / `[problème] calculator`
- Variantes françaises si la cible est francophone

**But :** identifier les 2-3 requêtes principales + estimer leur volume (élevé >10k/mois, moyen 1k-10k, faible <1k).

### 2. Lire l'intention de recherche

Observer ce que Google affiche pour ces requêtes :
- Des outils gratuits → les gens veulent utiliser, pas lire ✅
- Des articles de blog / tutoriels → intention informationnelle, moins direct
- Des résultats payants → marché existant, validé mais concurrentiel
- Peu ou rien → trop niche ou trop tôt

### 3. Évaluer la qualité des concurrents

Regarder les 3 premiers résultats :
- Interface soignée ou générique/datée ?
- Friction élevée (inscription obligatoire, paywall dès le départ) ?
- Résultat visible immédiatement ou parcours long ?

Une UX médiocre sur les concurrents = opportunité réelle pour un outil bien designé.

### 4. Évaluer les mots-clés longue traîne

La longue traîne (requêtes plus spécifiques, volume faible mais intention forte) est souvent plus accessible pour un nouveau site :
- `contrast ratio checker WCAG AA free`
- `user story generator for product managers`

Ces requêtes convertissent mieux et sont moins compétitives.

## Output attendu

Terminer avec ce tableau de synthèse :

```
## Analyse SEO — [Nom de l'idée]

| Critère              | Résultat                        |
|----------------------|---------------------------------|
| Requête principale   | [ex: "contrast checker online"] |
| Volume estimé        | Élevé / Moyen / Faible          |
| Intention            | Outil / Tutoriel / Définition   |
| Concurrents          | [2-3 noms + appréciation UX]    |
| Opportunité UX       | Oui / Non / Partielle           |
| Mots-clés longue traîne | [1-2 exemples]              |

**Verdict SEO :** ✅ Demande confirmée / ⚠️ Demande faible / ❌ Pas de demande détectable
**Prochaine étape recommandée :** [validate-product si ✅ | Chercher angle différent si ⚠️ | Abandonner si ❌]
```

## À noter

Ce skill ne remplace pas `validate-product` — il s'en occupe uniquement de la partie SEO.
`validate-product` complète avec l'analyse concurrentielle approfondie et les critères de build.
L'enchaînement naturel : `seo-research` → `validate-product` → `build-micro-tool`.
