// Importation des dépendances nécessaires
import { Router } from 'express';
import { cardController } from '../controllers/cardController.js';
import { createSchema, patchSchema } from '../validation/card.js';
import { idSchema, associateSchema } from '../validation/params.js';
import { validate } from '../validation/validate.js';
import { withTryCatch } from '../controllers/withTryCatchController.js';

// Création d'un nouveau routeur Express
export const router = Router();

// Route GET pour récupérer toutes les cartes
router.get('/', withTryCatch(cardController.getAll));

// Route GET pour récupérer une carte spécifique par son ID
router.get(
  '/:id',
  validate(idSchema, 'params'), // Validation de l'ID dans les paramètres
  withTryCatch(cardController.getOne)
);

// Route POST pour créer une nouvelle carte
router.post(
  '/',
  validate(createSchema, 'body'), // Validation du corps de la requête
  withTryCatch(cardController.createOne)
);

// Route PATCH pour mettre à jour une carte existante
router.patch(
  '/:id',
  validate(idSchema, 'params'), // Validation de l'ID dans les paramètres
  validate(patchSchema, 'body'), // Validation du corps de la requête
  withTryCatch(cardController.patchOne)
);

// Route DELETE pour supprimer une carte
router.delete(
  '/:id',
  validate(idSchema, 'params'), // Validation de l'ID dans les paramètres
  withTryCatch(cardController.deleteOne)
);

// Route PUT pour associer un tag à une carte
router.put(
  '/:cardId/tags/:tagId',
  validate(associateSchema, 'params'), // Validation des IDs de carte et de tag
  withTryCatch(cardController.associateOneWithTag)
);

// Route DELETE pour dissocier un tag d'une carte
router.delete(
  '/:cardId/tags/:tagId',
  validate(associateSchema, 'params'), // Validation des IDs de carte et de tag
  withTryCatch(cardController.dissociateOneFromTag)
);