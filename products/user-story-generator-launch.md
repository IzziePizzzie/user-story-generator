# User Story Generator — Cadrage MVP

---

## TL;DR *(rédigé en dernier — à compléter après MoSCoW)*

> À remplir après l'étape MoSCoW.

---

## Étape 1 — Problem Statement & Proposition de valeur

**Contexte :** Les PMs, product builders no-code, chefs de projet digital et lead devs doivent régulièrement rédiger des user stories pour cadrer leurs features. Cette tâche est répétitive, chronophage, et souvent mal faite (format incohérent, critères d'acceptation oubliés).

**Problème :** Rédiger des user stories bien structurées depuis une description de feature prend du temps et requiert une maîtrise du format agile que tout le monde n'a pas.

**Impact :** 15 à 30 minutes perdues par feature, des stories incomplètes qui génèrent des incompréhensions en équipe, et une friction qui freine la cadence produit.

**Alternative actuelle :** Écrire à la main dans Notion/Jira, utiliser ChatGPT avec un prompt maison, ou copier un template. Toutes ces solutions manquent de structure, de format standardisé, et ne produisent pas les critères d'acceptation automatiquement.

**Proposition de valeur :**
> *User Story Generator* aide les product builders à générer des user stories formatées + critères d'acceptation en 10 secondes, sans prompt à rédiger, contrairement à ChatGPT qui demande du contexte et ne garantit pas le bon format.

---

## Étape 2 — Parties prenantes

| Partie prenante | Rôle | Impact produit |
|---|---|---|
| Isabelle (éditrice) | Crée et maintient l'outil | Toutes les décisions produit |
| PM / Product builder | Utilisateur principal | Génère des user stories |
| Chef de projet digital | Utilisateur secondaire | Même usage que PM |
| Lead dev | Utilisateur occasionnel | Vérifie/complète les stories |
| OpenAI / Anthropic | Fournisseur API LLM | Dépendance technique critique |
| Vercel | Hébergeur | Deploy et disponibilité |

---

## Étape 3 — Personas

### Persona principal — Thomas, Product Builder No-Code

**Profil**
- Âge : 28-38 ans
- Situation : Indépendant ou salarié dans une startup / PME
- Niveau digital : Avancé
- Contexte d'usage : Desktop, en session de cadrage produit ou sprint planning

**Son problème principal**
Il doit rédiger des user stories pour ses features mais le format lui prend du temps et il oublie souvent les critères d'acceptation.

**Ses frustrations actuelles**
- Rédiger manuellement dans Notion est lent et incohérent
- ChatGPT donne des résultats variables selon comment il prompt
- Les outils existants (StoriesOnBoard, AgileStory) sont trop complexes ou orientés dev

**Ce qu'il attend du produit**
Coller une description de feature → recevoir une user story bien formatée + critères d'acceptation prêts à copier-coller.

**Ce qui le ferait abandonner**
Une inscription obligatoire avant de voir le résultat, ou un résultat trop générique inutilisable.

---

### Persona secondaire — Sophie, Chef de projet digital

**Profil**
- Âge : 30-45 ans
- Situation : Salariée en agence ou grande entreprise
- Niveau digital : Intermédiaire
- Contexte d'usage : Desktop, en réunion de cadrage ou en préparation de brief

**Son problème principal**
Elle doit structurer les besoins clients en user stories pour les transmettre à l'équipe dev, sans maîtriser parfaitement le format agile.

**Ses frustrations actuelles**
- Elle ne connaît pas le format "As a… I want… So that…" de mémoire
- Les critères d'acceptation lui demandent une réflexion supplémentaire
- Aucun outil simple ne fait ça sans s'inscrire

**Ce qu'il attend du produit**
Un outil qui lui apprend le bon format en produisant directement le résultat.

**Ce qui la ferait abandonner**
Un jargon trop technique (termes agile / scrum) ou une interface trop orientée dev.

---

## Étape 4 — PRD (synthèse)

**Nom du produit :** User Story Generator
**Tagline :** *De la feature à la user story en 10 secondes.*

**Ce que le produit fait :**
- Prend en entrée : une description de feature en texte libre (1-3 phrases)
- Produit en sortie : une user story formatée (As a… / I want… / So that…) + 3 critères d'acceptation (Given / When / Then)
- Permet de copier le résultat en un clic

**Ce que le produit ne fait pas (hors scope V1) :**
- Pas de sauvegarde / historique
- Pas de compte utilisateur
- Pas de génération multiple en batch
- Pas de personnalisation du format de sortie
- Pas d'intégration Jira / Notion

**Objectifs mesurables V1 :**
- Time to value < 15 secondes (de l'atterrissage au résultat)
- 0 inscription requise pour tester
- Résultat copiable en 1 clic

**Stack :** HTML/JS vanilla — fichier unique déployé sur Vercel
**API :** Claude API (Anthropic) ou OpenAI — à trancher avant build
**Monétisation V1 :** 3 générations gratuites / session → modal freemium (5€/mois illimité)

---

## Étape 5 — User Stories MVP

### US-01 — Générer une user story
**En tant que** product builder,
**je veux** coller une description de feature dans un champ texte et cliquer sur "Générer",
**afin d'obtenir** une user story formatée + critères d'acceptation sans effort de rédaction.

**Critères d'acceptation :**
- Given une description de feature saisie (min. 10 caractères)
- When l'utilisateur clique sur "Générer"
- Then une user story au format "As a… / I want… / So that…" + 3 critères Given/When/Then s'affichent en moins de 5 secondes

---

### US-02 — Copier le résultat
**En tant que** product builder,
**je veux** copier le résultat en un seul clic,
**afin de** le coller directement dans Notion, Jira ou un doc sans reformatage.

**Critères d'acceptation :**
- Given un résultat affiché à l'écran
- When l'utilisateur clique sur "Copier"
- Then le texte complet (user story + critères) est copié dans le presse-papier et un feedback visuel confirme l'action

---

### US-03 — Régénérer une variante
**En tant que** product builder,
**je veux** pouvoir régénérer une nouvelle version si le premier résultat ne me convient pas,
**afin d'obtenir** une formulation différente sans ressaisir ma description.

**Critères d'acceptation :**
- Given un résultat déjà affiché
- When l'utilisateur clique sur "Régénérer"
- Then une nouvelle user story est générée à partir de la même description

---

### US-04 — Limite freemium
**En tant qu'** utilisateur gratuit,
**je veux** être informé clairement quand j'atteins la limite de générations gratuites,
**afin de** comprendre l'offre payante sans me sentir bloqué brutalement.

**Critères d'acceptation :**
- Given 3 générations déjà effectuées dans la session
- When l'utilisateur clique sur "Générer" à nouveau
- Then un modal s'affiche avec le compteur atteint, la proposition d'abonnement (5€/mois) et un CTA vers Stripe

---

## Étape 9 — MoSCoW MVP

### Must *(sans ça le produit ne fonctionne pas)*
- [x] Champ de saisie texte libre — lié à US-01
- [x] Appel API LLM + affichage du résultat formaté — lié à US-01
- [x] Bouton "Copier" avec feedback — lié à US-02
- [x] Compteur de générations + modal freemium — lié à US-04
- [x] Meta tags SEO (title, description, og:) — règle CLAUDE.md
- [x] Design mobile-first responsive

### Should *(important mais pas bloquant pour le MVP)*
- [ ] Bouton "Régénérer" — lié à US-03
- [ ] Exemple pré-rempli au chargement pour réduire la friction
- [ ] Sélecteur de persona cible (optionnel, améliore la qualité du résultat)

### Could *(si le temps le permet)*
- [ ] Export en markdown
- [ ] Choix de la langue (FR / EN)

### Won't *(hors scope V1 — documenté)*
- Historique des générations — Raison : nécessite un compte utilisateur, hors scope V1
- Intégration Jira/Notion — Raison : complexité disproportionnée pour V1
- Génération en batch — Raison : hors cible MVP (besoin one-shot)
- Plugin WordPress — Raison : audience différente, à évaluer en V2

---

## Étape 11 — Checklist go-dev

- [x] Problem Statement rédigé et validé
- [x] Personas définis (2)
- [x] PRD synthétique rédigé
- [x] User Stories Must rédigées avec critères d'acceptation
- [x] MoSCoW arbitré
- [ ] Choix API LLM tranché (Claude vs OpenAI) — **à décider avant build**
- [ ] Clé API disponible
- [ ] Compte Stripe configuré pour le freemium
- [ ] Domaine ou sous-domaine Vercel choisi

---

## Questions ouvertes avant build

1. **API LLM** : Claude API (Anthropic) ou OpenAI GPT-4o ? *(Claude = meilleure qualité rédactionnelle, OpenAI = plus connu)*
2. **Langue de l'interface** : FR ou EN ? *(EN = audience plus large pour le SEO)*
3. **Nom de domaine** : sous-domaine Vercel gratuit pour V1, ou domaine custom ?
