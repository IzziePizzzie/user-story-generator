# Grille de notation — Prompts Lovable

> Sous-grille du skill `evaluation`. Charger ce fichier quand Isa demande une note chiffrée sur un prompt Lovable (init monolithique, init frontend/backend segmenté, feature, fix).
>
> Pour la **rédaction** d'un prompt Lovable (pas l'évaluation) → utiliser `lovable-prompts/SKILL.md` à la place.

---

## Vue d'ensemble — Pondération /100

| Critère | Poids | Focus |
|---|---|---|
| **Structure CTGC** | /15 | Respect du format Context / Task / Guidelines / Constraints / Critère de succès |
| **Scope dimensionné** | /15 | Choix monolithique vs segmenté cohérent avec la matrice Lovable |
| **Direction créative narrative** | /10 | Adjectifs émotionnels précis > spec technique froide |
| **Guardrails explicites** | /15 | Ce que Lovable ne doit PAS faire, anticipation des dérives |
| **Économie de crédits** | /15 | Ressources réutilisables (KB, screenshots), évitement des pièges coûteux |
| **Critère de succès objectif** | /15 | Checklist actionnable, validable sans ambiguïté |
| **Data & ressources prêtes** | /10 | Seed data spécifiée, URLs stables, tokens hex exacts |
| **Validation préalable** | /5 | Prompt force Lovable à résumer sa compréhension avant code |
| **TOTAL** | **/100** | |

---

## Critère 1 — Structure CTGC (/15)

**Évalue** : le respect du format template du skill `lovable-prompts` (méthode CTGC du cours).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| 5 sections présentes avec bonne hiérarchie | /8 | `# Context` + `## Task` + `### Guidelines` + `#### Constraints` + `## Critère de succès` → 8 pts. 4/5 sections = 5 pts. 3/5 ou moins = 2 pts. |
| Sections bien remplies (pas de squelette vide) | /4 | Chaque section apporte de la valeur = 4 pts. Sections présentes mais squelettiques = 2 pts. |
| Ordre respecté (Context → Task → Guidelines → Constraints → Succès) | /3 | OK = 3 pts. Ordre inversé = 1 pt. Mélange complet = 0 pt. |

---

## Critère 2 — Scope dimensionné (/15)

**Évalue** : le choix mono vs segmenté selon la matrice de décision Lovable et la pertinence du périmètre.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Choix monolithique vs segmenté cohérent avec la matrice | /6 | ≤3 tables + auth standard + ≤5 écrans = monolithique OK. Dépassement sur 1 critère = segmenté OK. Mauvais choix = 0 pt. |
| Post-Init : 1 seule chose par prompt | /5 | 1 feature / 1 page / 1 fix = 5 pts. 2 features = 2 pts. 3+ features = 0 pt. Non applicable sur init (note pleine). |
| Init : tout le contexte en un seul bloc cohérent | /4 | Init monolithique qui charge tout = 4 pts. Init fragmenté = 1 pt. Non applicable sur post-init (note pleine). |

---

## Critère 3 — Direction créative narrative (/10)

**Évalue** : la qualité de la direction créative (narrative > technique), règle d'or n°4 du skill.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Adjectifs émotionnels précis | /4 | "énergique, confident, cosy, tactile" = 4 pts. "sympa, joli, moderne" seul = 1 pt. Aucun adjectif = 0 pt. |
| Univers positionné par contraste | /3 | "Entre X et Y" ou "comme un coach qui…" = 3 pts. Description plate = 1 pt. |
| Équilibre narration / spec technique | /3 | Narration présente même si tokens hex donnés = 3 pts. Spec technique seule (CSS tokens + liste composants) = 0 pt. |

---

## Critère 4 — Guardrails explicites (/15)

**Évalue** : la clarté de ce que Lovable ne doit PAS faire (règle d'or n°5 du skill).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Librairies / stack interdites listées nommément | /5 | "Pas de Supabase, pas de Stripe, pas de lib hors X/Y/Z" = 5 pts. Guardrails vagues = 2 pts. Aucune = 0 pt. |
| Comportements Lovable anticipés | /5 | "Ne pas inventer un 4e écran même si cohérent", "Ne pas refactorer le reste" = 5 pts. Partiel = 2 pts. Rien = 0 pt. |
| Périmètre visuel borné | /5 | "Orange RÉSERVÉ aux CTA", "Jamais plus de 4 couleurs", "Pas de variation hors palette" = 5 pts. Partiel = 2 pts. |

---

## Critère 5 — Économie de crédits (/15)

**Évalue** : les leviers activés pour minimiser la consommation (règles d'or 1-2-6-7-8-9 du skill).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Screenshots / images jointes | /4 | 1+ image de réf fournie = 4 pts. Description longue à la place = 1 pt. Rien = 0 pt. |
| Tokens hex livrés directement | /3 | Palette complète en hex = 3 pts. Couleurs vagues ("bleu foncé") = 0 pt. |
| Pas d'anti-pattern coûteux | /4 | Aucun "améliore le design", "répare ça", multi-features = 4 pts. 1 anti-pattern = 1 pt. |
| KB mentionnée ou justifiée | /2 | Référence à KB ou mention "proto jetable, pas besoin de KB" = 2 pts. Absence sans justification = 0 pt. |
| Pas de secrets / infos sensibles | /2 | OK = 2 pts. Clé API ou webhook en clair = 0 pt. |

---

## Critère 6 — Critère de succès objectif (/15)

**Évalue** : la capacité à valider oui/non le résultat sans ambiguïté.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Checklist actionnable numérotée | /6 | 3+ points vérifiables binaires = 6 pts. 1-2 points = 3 pts. Pas de checklist = 0 pt. |
| Validable sans interprétation | /5 | Chaque point = test oui/non clair = 5 pts. Points flous ("respecte la palette") = 2 pts. |
| Couvre les 3 dimensions (flow, data, visuel) | /4 | Les 3 présentes = 4 pts. 2/3 = 2 pts. 1/3 = 0 pt. |

---

## Critère 7 — Data & ressources prêtes (/10)

**Évalue** : la précision du seed data et des ressources fournies.

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Seed data complète (noms, ids, valeurs) | /4 | Toutes les entrées listées nommément = 4 pts. Quelques exemples = 2 pts. "quelques données" = 0 pt. |
| URLs stables pour images (pas de placeholders gris) | /3 | `picsum.photos/seed/xxx` ou URLs déterministes = 3 pts. URLs génériques = 1 pt. Pas d'URL = 0 pt. |
| Mix d'états varié (pour tester les edge cases visuels) | /3 | "50/50 dispo/indispo varié" = 3 pts. "quelques états" = 1 pt. Rien = 0 pt. |

---

## Critère 8 — Validation préalable (/5)

**Évalue** : la présence du prompt validation KB (1 crédit qui en sauve 5-10).

| Sous-critère | Points | Comment évaluer |
|---|---|---|
| Instruction explicite "résume avant de coder" | /3 | "Résume ta compréhension en N bullets avant tout code" = 3 pts. Absent = 0 pt. |
| Autorise Lovable à poser des questions | /2 | "Si un point est flou, pose la question" = 2 pts. Absent = 0 pt. |

---

## Aide à l'estimation gain/effort

Pour chaque axe d'amélioration proposé, estimer :

### Gain (en points)
Faire la différence entre la note actuelle du critère et la note projetée si l'amélioration est appliquée. Sommer si l'axe touche plusieurs critères.

### Effort
| Niveau | Critères |
|---|---|
| **Faible** | Modification < 10 min, ajout de texte (ex : ajouter 2 adjectifs émotionnels, reformuler un critère de succès, ajouter l'instruction "résume avant code") |
| **Moyen** | 10-30 min, restructuration locale (ex : traduire le prompt en anglais, réécrire la direction créative, remettre la hiérarchie CTGC en ordre) |
| **Élevé** | > 30 min ou refonte structurelle (ex : décomposer un init raté en 2 prompts segmentés, refaire la palette, basculer de mono à segmenté) |

### Ratio gain/effort
- **Gain ≥ 10 pts pour effort faible** → priorité maximale (à faire systématiquement)
- **Gain ≥ 15 pts pour effort moyen** → bon ROI
- **Gain ≥ 25 pts pour effort élevé** → vaut le coup si prompt critique (init projet réel)
- **Gain < 10 pts pour effort moyen/élevé** → ne pas faire (polish cosmétique qui retarde le Build)

---

## Spécificités prompts Lovable

- **Un prompt init à 85+/100** = envoyer tel quel. Au-delà, le polish ne paie plus (Build lance avec les mêmes crédits).
- **Un prompt < 60/100** = refondre avant d'envoyer, sinon Build raté = crédits perdus sans résultat.
- **Règle remix** : si un prompt de fix dépasse 3 tentatives échouées, la grille ne sert plus → passer en mode Remix (cf `lovable-prompts/SKILL.md`).
