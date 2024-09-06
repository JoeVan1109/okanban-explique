// Exporte une fonction d'ordre supérieur qui enveloppe un contrôleur dans un bloc try-catch
export function withTryCatch(controller){
  // Retourne une nouvelle fonction asynchrone qui sera utilisée comme middleware
  return async function(req, res, next){
    try{
      // Exécute le contrôleur original dans un bloc try
      await controller(req, res, next);
    } catch(error){
      // Si une erreur est levée, elle est passée au middleware de gestion d'erreurs suivant
      next(error);
      // La ligne commentée ci-dessous était probablement une ancienne façon de gérer les erreurs
      // res.status(500).json({ error: 'Unexpected server error. Please try again later.' });
    }
  };
};