# Dossier Ideas — Idées non validées

Ce dossier stocke les idées de micro-outils **avant validation**. Une idée reste ici jusqu'à ce qu'on décide de la développer ou de l'abandonner.

## Workflow d'une idée

```
/ideas/[nom-idee].md
        ↓ validation SEO + concurrents (skill validate-product)
        ↓
  ✅ Validée → /products/[nom-outil]/   (on code)
  ❌ Rejetée → archivée dans /ideas/archives/  (on garde la trace)
```

## Format d'une fiche idée

Chaque idée = un fichier `kebab-case.md` avec :

```markdown
# [Nom de l'idée]

**Date** : JJ/MM/AAAA
**Statut** : Idée brute | En cours de validation | Validée | Rejetée

## Le problème
Quel problème précis cet outil résout-il ?

## La solution envisagée
En une phrase : ce que fait l'outil.

## Cible
Persona 1 (Alex le designer) ou Persona 2 (Marie la product builder) ?

## Premières impressions SEO
Y a-t-il des recherches Google sur ce sujet ? (à vérifier avec validate-product)

## Notes
Autres observations, inspirations, liens concurrents...
```

## Règle

On ne code **jamais** depuis ce dossier.
Une idée ne passe en `/products/` qu'après avoir passé le skill `validate-product`.
