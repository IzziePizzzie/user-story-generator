# Benchmark — Process guidé

## Quand charger ce fichier
Isa dit "benchmark", "comparer des outils", "quel outil choisir", ou demande une analyse comparative.

---

## Process en 5 phases

### Phase 1 — Cadrage (avec Isa)

**Questions à poser :**
1. Quel besoin fonctionnel tu veux couvrir ?
2. Quels outils tu veux comparer ? (min 2, max 5)
3. Quelles contraintes non négociables ? (budget, RGPD, équipe non-tech…)
4. C'est pour un choix immédiat ou pour documenter une décision déjà prise ?

**Output :** remplir les sections 1 (Contexte) et début de section 2 (Critères) du template `templates/benchmark.md`.

---

### Phase 2 — Critères & pondération (co-construction)

**Critères par défaut (adapter selon contexte) :**

| Critère | Quand le garder | Quand le retirer |
|---------|----------------|-----------------|
| Facilité d'utilisation | Toujours | Jamais |
| Profondeur fonctionnelle | Toujours | Jamais |
| Personnalisation | App ou interface utilisateur | Back-office pur |
| Scalabilité | Volume attendu > 1000 users ou records | Projet one-shot |
| Interopérabilité (API) | Multi-outils | Outil isolé |
| Coût / pricing | Toujours | Jamais |
| Support & communauté | Outil récent ou niche | Outil établi (Google, Microsoft) |
| SEO | Projet web public | App interne |
| RGPD / conformité | Données personnelles | Données non sensibles |

**Règles de pondération :**
- Total = 100%
- Max 3 critères à 15%+ (sinon tout se dilue)
- Les critères "non négociables" = éliminatoires, pas pondérés (ex : RGPD = si pas conforme, l'outil est éliminé d'office)
- Demander à Isa de valider les poids AVANT de scorer

**Output :** tableau critères + poids validé.

---

### Phase 3 — Scoring (critère par critère)

**Échelle de notation :**

| Note | Signification |
|------|--------------|
| 1 | Inadapté — ne répond pas au besoin | 🔴 Red |
| 2 | Faible — répond partiellement, frictions majeures | 🩷 Pink |
| 3 | Correct — fait le job, quelques limites | 🟠 Orange |
| 4 | Bon — répond bien, limites mineures | 🟡 Yellow |
| 5 | Excellent — répond parfaitement au besoin | 🟢 Green |

**Règles de scoring :**
- Scorer un critère à la fois pour TOUS les outils (pas un outil à la fois) → évite le biais de halo
- Justifier chaque note en une phrase
- Score pondéré = note × poids / 100

**Output :** matrice complète avec notes + justifications + scores pondérés + total.

**Output Notion (si demandé) :** créer une BDD Notion avec la structure décrite dans la section "BDD Notion — Benchmark visuel" ci-dessous.

---

### Phase 4 — Approfondissement (si pertinent)

**Scalabilité** — pour chaque outil dans le top 2 :
- Hard limites (max users, max records, max storage)
- Palier tarifaire pour débloquer les limites
- Retours communauté sur la montée en charge

**Simulation pricing** — sur 12 mois :
- Hypothèses d'usage réalistes (pas optimistes)
- Coût mensuel plan adapté
- Coûts cachés : API tierces, stockage, opérations supplémentaires
- Comparer : gratuit vs plan réel nécessaire

**POC** — si l'écart de score est < 0.5 entre les deux premiers :
- Tester les 2 finalistes sur les fonctionnalités critiques
- Temps imparti : 1 journée max par outil
- Documenter : faisable / non faisable / partiel

**Output :** sections 5, 6 et 7 du template remplies.

---

### Phase 5 — Décision & livrable

**Format de la recommandation :**
```
Outil retenu : [Nom]
Score : [X.X / 5]

Justification :
- [Critère clé 1] : [pourquoi cet outil est meilleur]
- [Critère clé 2] : [pourquoi cet outil est meilleur]

Pourquoi pas [Outil B] :
- [Raison principale]

Limites acceptées :
- [Limite 1 et comment on la gère]

Prochaines étapes :
- [Action concrète]
```

**Output :** benchmark complet prêt pour la soutenance ou la documentation projet.

---

## Format de sortie

Le livrable final est un fichier Markdown basé sur `templates/benchmark.md`, sauvegardé dans :
- `references/benchmarks/benchmark-[sujet].md` pour les benchmarks PlayOff
- Et/ou dans une BDD Notion (voir structure ci-dessous)

---

## BDD Notion — Benchmark visuel

> Structure à dupliquer pour chaque benchmark. Combine calcul automatique + visuel couleur.

### Propriétés de la BDD

| Propriété | Type Notion | Usage |
|-----------|-------------|-------|
| Critère | Title | Nom du critère évalué |
| Poids (%) | Number (%) | Pondération du critère (total = 100%) |
| [Outil A] — Note | Number | Note brute /5 |
| [Outil A] — Niveau | Select | Visuel couleur (voir options ci-dessous) |
| [Outil A] — Pondéré | Formula | Score pondéré calculé |
| [Outil B] — Note | Number | idem |
| [Outil B] — Niveau | Select | idem |
| [Outil B] — Pondéré | Formula | idem |
| [Outil C] — Note | Number | idem |
| [Outil C] — Niveau | Select | idem |
| [Outil C] — Pondéré | Formula | idem |
| Justification | Text | Une ligne par outil, séparée par un saut de ligne |

### Options du Select "Niveau" (identiques pour chaque outil)

| Option | Couleur Notion | Quand l'utiliser |
|--------|---------------|-----------------|
| 1 — Inadapté | 🔴 Red | Ne répond pas au besoin |
| 2 — Faible | 🩷 Pink | Répond partiellement, frictions majeures |
| 3 — Correct | 🟠 Orange | Fait le job, quelques limites |
| 4 — Bon | 🟡 Yellow | Répond bien, limites mineures |
| 5 — Excellent | 🟢 Green | Répond parfaitement |

### Formules Notion

**Score pondéré** (pour chaque colonne Outil — Pondéré) :
```
prop("[Outil A] — Note") * prop("Poids (%)") / 100
```

### Vue recommandée

- **Vue Table** pour le scoring détaillé (vue par défaut)
- Trier par : Poids (%) décroissant → les critères les plus importants en haut
- Ajouter une **ligne "TOTAL"** manuellement ou utiliser le calcul natif Notion (Sum) en bas de chaque colonne Pondéré

### Process de remplissage

1. Créer les lignes (1 par critère)
2. Remplir Poids (%)
3. Pour chaque critère, scorer tous les outils en même temps (évite le biais)
4. Pour chaque note saisie → sélectionner le Niveau correspondant dans le Select
5. Les colonnes Pondéré se calculent automatiquement
6. Le Sum en bas de colonne donne le score total par outil

---

## Jury RNCP — Points à anticiper

Le jury vérifie que tu as :
- [ ] Défini des critères AVANT de comparer (pas après-coup)
- [ ] Pondéré les critères selon le contexte projet
- [ ] Justifié chaque note (pas juste des chiffres)
- [ ] Documenté les limites de l'outil choisi
- [ ] Expliqué pourquoi les autres ont été écartés
- [ ] Chiffré le coût (même approximatif)
