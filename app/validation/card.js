// Importation de la bibliothèque Joi pour la validation des données
import Joi from 'joi';

// Schéma de validation pour la création d'une nouvelle carte
export const createSchema = Joi.object({
  // Le titre doit être une chaîne de caractères d'au moins 3 caractères et est obligatoire
  title: Joi.string().min(3).required(),
  
  // Le contenu est obligatoire et doit être une chaîne de caractères
  content: Joi.string().required(),
  
  // La couleur est optionnelle, mais si elle est fournie, elle doit être une chaîne de 7 caractères max (pour les codes couleur hex)
  color: Joi.string().max(7),
  
  // La position est optionnelle, mais si elle est fournie, elle doit être un nombre entier
  position: Joi.number().integer(),
  
  // L'ID de la liste à laquelle la carte appartient est obligatoire et doit être un nombre entier
  list_id: Joi.number().integer().required(),
});

// Schéma de validation pour la mise à jour partielle d'une carte existante
export const patchSchema = Joi.object({
  // Tous les champs sont optionnels pour une mise à jour partielle
  title: Joi.string().min(3),
  content: Joi.string(),
  color: Joi.string().max(7),
  position: Joi.number().integer(),
  list_id: Joi.number().integer(),
}).min(1); // Au moins un champ doit être fourni pour la mise à jour

/*
Plus besoin de ces fonction très répétitives (elles sont identique si ce n'est me schema à valider)
On va plutot créer une fonction quie les fabrique dynamiquement

export function validateCreateSchema(req, res, next){
  const {error} = createSchema.validate(req.body);
  if(!error){
    return next();
  }
  res.status(400).json({error: error.details[0].message});
}

export function validatePatchSchema(req, res, next){
  const {error} = patchSchema.validate(req.body);
  if(!error){
    return next();
  }
  res.status(400).json({error: error.details[0].message});
}


*/