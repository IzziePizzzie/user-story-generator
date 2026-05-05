# User Story Generator

## Résumé
Outil web qui transforme une description de feature en user story formatée (As a… / I want… / So that…) + critères d'acceptation, en quelques secondes. Pour les PMs, product builders, chefs de projet digital et lead devs.

## URL
https://user-story-generator-pi.vercel.app

## GitHub
https://github.com/IzziePizzzie/user-story-generator

## Statut
- [x] Idée validée
- [x] Code terminé
- [x] Déployé sur Vercel
- [ ] Liens d'affiliation intégrés
- [ ] Lancé sur Product Hunt
- [ ] Premiers visiteurs
- [ ] Premiers revenus

## Problème résolu
Rédiger des user stories bien structurées est répétitif et chronophage — surtout pour ceux qui ne maîtrisent pas parfaitement le format agile. Les alternatives (ChatGPT, templates Notion) demandent du contexte et ne garantissent pas un format cohérent. Cet outil génère un résultat prêt à copier-coller en 10 secondes, sans prompt à rédiger.

## Fonctionnement
1. L'utilisateur décrit sa feature en texte libre (1 à 3 phrases)
2. Clique sur "Generate user story"
3. L'outil appelle Claude API (Haiku 4.5) et affiche la user story formatée + 3 critères d'acceptation
4. L'utilisateur copie le résultat en un clic ou régénère une variante
5. Après 3 générations gratuites, un modal freemium s'affiche

## Stack technique
- Frontend : HTML/JS vanilla, fichier unique `index.html`
- Backend : Vercel serverless function (`api/generate.js`)
- API LLM : Claude Haiku 4.5 (~0.001€/génération)
- Clé API : variable d'environnement Vercel `ANTHROPIC_API_KEY`
- Deploy : Vercel (auto-deploy sur push GitHub)

## Monétisation
- Modèle actuel : 100% gratuit (Stripe en Won't V1)
- Limite gratuite : 3 générations / session (sessionStorage)
- Prix payant : non configuré — à réévaluer après premiers retours
- Affiliation cible : Notion, Linear, Jira — liens à intégrer en V1.1

## SEO
- Mot-clé principal : "user story generator free online"
- Volume estimé : moyen à élevé
- Concurrents : StoriesOnBoard, AgileStory, Kollabe — interfaces génériques
- Opportunité : design soigné + cible product builders (angle non couvert)
- Position actuelle : à remplir après indexation Google

## Métriques
| Date | Visiteurs/mois | Revenus/mois | Notes |
|------|----------------|--------------|-------|
| 2026-05-05 | 0 | 0€ | Launch day |

## Backlog V2
- [ ] Liens d'affiliation Notion / Linear en footer
- [ ] Sauvegarde des user stories (localStorage — style Tinder keep/discard)
- [ ] Export en Markdown
- [ ] Choix de la langue (FR / EN)
- [ ] Sélecteur de persona cible (améliore la qualité du résultat)
- [ ] Batch generation (plusieurs features d'un coup)
- [ ] Compte utilisateur + historique cross-device (nécessite backend)
- [ ] Intégration Notion / Jira (push direct)

## Décisions & apprentissages
- Voir `/context/decisions-log.md` — entrée du 2026-05-05
- Contrast checker abandonné au profit de cet outil — marché saturé sur tous les angles
- Stripe mis en Won't V1 — valeur perçue insuffisante sans trafic établi
- Modèle affiliation retenu comme première stratégie de revenus
