import Joi from 'joi';

export const createSchema = Joi.object({
  title: Joi.string().min(3).required(),
  content: Joi.string().required(),
  color: Joi.string().max(7),
  position: Joi.number().integer(),
  list_id: Joi.number().integer().required(),
});

export const patchSchema = Joi.object({
  title: Joi.string().min(3),
  content: Joi.string(),
  color: Joi.string().max(7),
  position: Joi.number().integer(),
  list_id: Joi.number().integer(),
}).min(1);


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