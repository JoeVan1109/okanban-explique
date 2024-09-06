export function validate(schema, src){
  return function(req, res, next){
    const {error} = schema.validate(req[src]);
    if(!error){
      return next();
    }
    res.status(400).json({error: error.details[0].message});
  };
}


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