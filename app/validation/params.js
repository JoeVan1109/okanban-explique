// Importation de la bibliothèque Joi pour la validation des données
import Joi from 'joi';

// Schéma de validation pour un paramètre ID
export const idSchema = Joi.object({
  // L'ID doit être un nombre entier et est obligatoire
  id: Joi.number().integer().required(),
});

// Schéma de validation pour l'association entre une carte et un tag
export const associateSchema = Joi.object({
  // L'ID de la carte doit être un nombre entier et est obligatoire
  cardId: Joi.number().integer().required(),
  
  // L'ID du tag doit être un nombre entier et est obligatoire
  tagId: Joi.number().integer().required(),
});