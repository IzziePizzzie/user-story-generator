---
name: new-product-readme
description: Créer la fiche produit d'un nouvel outil dans /products/. Déclencher après chaque build ou à la création d'un nouveau produit. Déclencher sur : "crée la fiche produit", "nouveau produit", "documente l'outil".
---

# Template README produit

Générer un fichier README.md dans /products/[nom-outil]/ avec cette structure :

```markdown
# [Nom de l'outil]

## Résumé
[Une phrase : ce que fait l'outil et pour qui]

## URL
[URL Vercel une fois déployé]

## Statut
- [ ] Idée validée
- [ ] Code terminé
- [ ] Déployé sur Vercel
- [ ] Lancé sur Product Hunt
- [ ] Premiers visiteurs
- [ ] Premiers revenus

## Problème résolu
[2-3 lignes : quel problème précis, pour quel persona]

## Fonctionnement
[Liste des étapes utilisateur]

## Monétisation
- Modèle : [freemium / affiliation / payant]
- Limite gratuite : [ex: 3 audits/mois]
- Prix payant : [ex: 9$/mois]
- Affiliations : [ex: lien Webflow]

## SEO
- Mot-clé principal : [ex: "wcag contrast checker"]
- Volume estimé : [faible / moyen / élevé]
- Position actuelle : [à remplir après indexation]

## Métriques
| Date | Visiteurs/mois | Revenus/mois | Notes |
|------|---------------|--------------|-------|
|      |               |              |       |

## Améliorations backlog
- [ ] [idée future]
- [ ] [idée future]

## Décisions & apprentissages
[Lien vers les entrées correspondantes dans /context/decisions-log.md]
```
