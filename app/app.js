// Importe le framework Express
import express from 'express';

// Importe le routeur principal depuis le fichier index.js du dossier routers
import { router } from './routers/index.js';

// Crée une nouvelle instance d'application Express
export const app = express();

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Utilise le routeur principal pour gérer les routes de l'application
app.use(router);