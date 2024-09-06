// Fonction d'ordre supérieur pour créer un middleware de validation
export function validate(schema, src) {
  // Retourne un middleware Express
  return function(req, res, next) {
    // Valide les données de la requête en utilisant le schéma Joi fourni
    const { error } = schema.validate(req[src]);
    
    // Si aucune erreur n'est trouvée, passe au middleware suivant
    if (!error) {
      return next();
    }
    
    // En cas d'erreur, renvoie une réponse 400 avec le message d'erreur
    res.status(400).json({ error: error.details[0].message });
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