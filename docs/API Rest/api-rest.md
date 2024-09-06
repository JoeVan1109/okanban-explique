### API REST

#### 1. Introduction aux API RESTful

- **Définition** : Une API RESTful est une interface de programmation d'application qui utilise les requêtes HTTP pour obtenir, créer, modifier et supprimer des données.
- **Principes de base** : Utilisation des méthodes HTTP (GET, POST, PUT, DELETE, etc.), communication via le protocole HTTP, et échange de données principalement en JSON.

#### 2. Qu'est-ce qu'un Endpoint ?

- **Définition** : Un endpoint est un point de terminaison d’une connexion dans une communication réseau. Dans le contexte d'une API, il correspond à une URL spécifique où l'API peut être accesée et à travers laquelle les ressources peuvent être spécifiquement manipulées.
- **Exemple** : `https://api.exemple.com/utilisateurs` où `/utilisateurs` est l’endpoint pour accéder aux informations des utilisateurs.

#### 3. Conception des Endpoints

- **Représentation des Ressources** : Chaque endpoint devrait correspondre à une ressource spécifique ou à un ensemble de ressources. Les noms doivent être clairs et intuitifs.
  - **Bonnes pratiques** : Utilisation de noms au pluriel (p. ex., `/utilisateurs`), structuration hiérarchique pour les ressources liées (p. ex., `/utilisateurs/123/posts` pour les posts de l'utilisateur 123).

#### 4. Méthodes HTTP et Endpoints

- Chaque action CRUD est généralement représentée par une méthode HTTP :
  - **GET** : Récupérer des données. Ex : `GET /utilisateurs` pour obtenir une liste des utilisateurs.
  - **POST** : Créer une nouvelle ressource. Ex : `POST /utilisateurs` pour créer un nouvel utilisateur.
  - **PUT ou PATCH** : Mettre à jour une ressource existante. Ex : `PUT /utilisateurs/123` pour mettre à jour les informations de l'utilisateur 123.
  - **DELETE** : Supprimer une ressource. Ex : `DELETE /utilisateurs/123` pour supprimer l'utilisateur 123.

#### 5. Réponses HTTP

- **Codes de statut** : Les endpoints doivent renvoyer des codes de statut HTTP adéquats qui indiquent le résultat de la requête (p. ex., 200 pour succès, 404 pour "non trouvé", 500 pour erreur serveur).
- **Corps de la réponse** : Typiquement, une réponse inclut un corps qui contient les données requises ou un message d'erreur détaillant le problème rencontré.

#### 6. Sécurité et Authentification

- **Importance** : Les endpoints doivent souvent être sécurisés pour empêcher les accès non autorisés.
- **Méthodes** : Utilisation de tokens (comme les JWT - JSON Web Tokens), de sessions, ou d'autres mécanismes d'authentification pour contrôler l'accès.

#### 7. Conclusion

- Concevoir des endpoints clairs et intuitifs améliore non seulement la lisibilité et la maintenance de l'API, mais assure également que les développeurs et les applications clients peuvent interagir avec l'API de manière efficace.

---

### Ressources Complémentaires

- [REST API Tutorial](https://restfulapi.net/)
- [Mozilla Developer Network (MDN) – HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
