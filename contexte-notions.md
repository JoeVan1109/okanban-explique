# Projet Kanban API

Ce projet est une API RESTful pour une application de type Kanban, utilisant Node.js, Express, et PostgreSQL avec Sequelize. Voici un aperçu des principales notions abordées :

## Architecture et Structure

- **Architecture MVC** : Séparation du code en Modèles, Vues (ici, les réponses JSON), et Contrôleurs.
- **Routage modulaire** : Utilisation de sous-routeurs Express pour organiser les routes par ressource.

## Base de données

- **ORM Sequelize** : Utilisation de Sequelize pour interagir avec la base de données PostgreSQL.
- **Modèles** : Définition des modèles pour les listes, cartes, et tags.
- **Relations** : Gestion des relations entre les modèles (one-to-many, many-to-many).

## Middleware

- **Validation** : Middleware personnalisé utilisant Joi pour valider les données entrantes.
- **Gestion d'erreurs** : Middleware centralisé pour capturer et traiter les erreurs.
- **Try-Catch Wrapper** : Fonction d'ordre supérieur pour envelopper les contrôleurs dans des blocs try-catch.

## Validation des données

- **Schémas Joi** : Définition de schémas de validation pour les différentes entités (cartes, listes, tags).
- **Validation modulaire** : Séparation des schémas de validation dans des fichiers distincts.
- **Middleware de validation** : Utilisation d'une fonction factory pour créer des middlewares de validation réutilisables.

## Routes RESTful

- Implémentation des opérations CRUD (Create, Read, Update, Delete) pour chaque ressource.
- Utilisation appropriée des méthodes HTTP (GET, POST, PATCH, DELETE).
- Intégration de la validation des données dans les routes.

## Bonnes pratiques

- **Variables d'environnement** : Utilisation de dotenv pour gérer les configurations.
- **Gestion des erreurs** : Création d'une classe d'erreur personnalisée (HttpError).
- **Seeding** : Script pour peupler la base de données avec des données initiales.
- **Validation des entrées** : Utilisation systématique de la validation pour sécuriser l'API.

## Fonctionnalités Kanban

- Gestion des listes, cartes, et tags.
- Association et dissociation de tags aux cartes.
- Positionnement des cartes dans les listes.
- Validation des données pour chaque opération sur les entités.

Ce projet démontre une approche structurée et modulaire pour construire une API robuste, en utilisant des concepts modernes de développement Node.js, en suivant les principes RESTful, et en mettant l'accent sur la validation des données et la sécurité.