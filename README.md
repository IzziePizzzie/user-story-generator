# Business Assistant — Structure du projet

```
business-assistant/
│
├── CLAUDE.md                          ← Cerveau principal : règles, stack, comportement
│
├── context/                           ← Mémoire permanente du projet
│   ├── business-vision.md             ← Stratégie, objectifs, modèle économique
│   ├── target-persona.md              ← Qui sont les utilisateurs cibles
│   ├── decisions-log.md               ← Toutes les décisions importantes + raisons
│   └── feedback-log.md                ← Feedbacks reçus + règles qui en découlent
│
├── products/                          ← Un dossier par micro-outil
│   ├── README.md                      ← Index de tous les produits
│   └── [nom-outil]/
│       ├── README.md                  ← Fiche produit (métriques, statut, backlog)
│       └── index.html                 ← Code de l'outil
│
└── .claude/
    └── skills/                        ← Skills Claude Code pour ce projet
        ├── validate-product/
        │   └── SKILL.md               ← Valider une idée avant de coder
        ├── build-micro-tool/
        │   └── SKILL.md               ← Règles de build (UI, SEO, tech)
        └── new-product-readme/
            └── SKILL.md               ← Générer la fiche produit
```

## Comment démarrer une session de travail

1. Ouvre VS Code dans ce dossier
2. Lance Claude Code
3. Dis ce que tu veux faire — Claude charge automatiquement le bon contexte

## Commandes utiles

- **Nouvelle idée** → "J'ai une idée d'outil : [description]. Valide-la."
- **Construire** → "Construis l'outil [nom]."
- **Documenter** → "Crée la fiche produit pour [nom]."
- **Faire le point** → "Quels sont mes produits en cours et leurs métriques ?"
