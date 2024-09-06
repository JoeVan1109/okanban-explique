// Importation des dépendances nécessaires
import { Router } from 'express';
import { errorHandler } from '../error/errorhandler.js';
import { router as listRouter } from './list.js';
import { router as cardRouter } from './card.js';
import { router as tagRouter } from './tag.js';
import { HttpError } from '../error/httperror.js';

// Création d'un nouveau routeur Express principal
export const router = Router();

// Montage des sous-routeurs pour chaque ressource
router.use('/lists', listRouter);  // Toutes les routes commençant par /lists seront gérées par listRouter
router.use('/cards', cardRouter);  // Toutes les routes commençant par /cards seront gérées par cardRouter
router.use('/tags', tagRouter);    // Toutes les routes commençant par /tags seront gérées par tagRouter

// Middleware pour gérer les routes non trouvées
router.use((req, res, next)=>{
  next(new HttpError(404, 'Resource not found'));  // Crée une erreur 404 si aucune route ne correspond
});

// Middleware de gestion globale des erreurs
router.use(errorHandler);