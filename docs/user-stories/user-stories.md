# User stories

## Kesako ?

Un **récit utilisateur** (user story) est une phrase servant à expliquer une fonctionnalité logicielle, rédigée du point de vue de l'utilisateur final.

- C'est un outil de **clarification du besoin** lors de la conception.
- Il peut faire office de **scenario de test** pour validation de la bonne réalisation du projet.

## Format

- 🇫🇷 `En tant que [RÔLE], je souhaite pouvoir [ACTION], (( afin de [BUT] ))`
- 🇺🇸 `As a [ROLE], I want to [ACTION], (( SO THAT [GOAL] ))`

`ROLE` = l'état de l'utilisateur

- visiteur
- membre connecté
- administrateur du site
- utilisateur sur mobile
- utilisateur avec un handicap visuel
- etc…

## Exemple pour Okanban

Définition des rôles :

- un visiteur non loggé (unique), qu'on appellera `Utilisateur`.

| **En tant que**          | **Je souhaite pouvoir**               | **Dans le BUT de**                                                                |
| ------------------------ | ------------------------------------- | --------------------------------------------------------------------------------- |
| Utilisateur              | Accéder à la home page                | consulter l'état actuel du kaban (listes et cartes)                               |
| Utilisateur              | Créer une liste                       | rajouter une liste au kanban                                                      |
| Utilisateur              | Modifier une liste                    | changer ses informations (nom)                                                    |
| Utilisateur              | Déplacer une liste                    | modifier sa position au sein du board                                             |
| Utilisateur              | Supprimer une liste                   | de ne plus la voir s'afficher et de supprimer ses cartes également                |
| Utilisateur              | Créer une carte                       | rajouter une carte dans une liste                                                 |
| Utilisateur              | Modifier une carte                    | mettre à jour son titre, son contenu ou sa couleur                                |
| Utilisateur              | Déplacer une carte                    | réorganiser la liste ou de changer la carte de liste                              |
| Utilisateur              | Supprimer une carte                   | ne plus la voir                                                                   |
| Utilisateur              | Créer un label                        | augmenter la liste des labels disponibles                                         |
| Utilisateur              | Modifier un label                     | corriger une faute ou sa couleur                                                  |
| Utilisateur              | Supprimer un label                    | qu'il disparaisse complètement y compris de toutes les cartes où il était assigné |
| Utilisateur              | Associer un label à une carte         | qualifier la carte                                                                |
| Utilisateur              | Dissocier un label d'une carte        | retirer la qualification de la carte                                              |
| Utilisateur (sur mobile) | Accéder au site de manière responsive |
