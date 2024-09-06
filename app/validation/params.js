import Joi from 'joi';

export const idSchema = Joi.object({
  id: Joi.number().integer().required(),
});

export const associateSchema = Joi.object({
  cardId: Joi.number().integer().required(),
  tagId: Joi.number().integer().required(),
});