// Importe et configure les variables d'environnement depuis un fichier .env
import 'dotenv/config';

// Importe le module http natif de Node.js pour créer un serveur
import { createServer } from 'node:http';

// Importe l'application Express depuis le fichier app.js
import { app } from './app/app.js';

// Définit le port sur lequel le serveur va écouter
// Utilise le port défini dans les variables d'environnement ou 3000 par défaut
const PORT = process.env.PORT ?? 3000;

// Affiche la valeur de la variable d'environnement 'bidule' (probablement pour le débogage)
console.log(process.env.bidule);

// Crée un serveur HTTP en utilisant l'application Express
const server = createServer(app);

// Démarre le serveur sur le port spécifié
server.listen(PORT, () => {
  // Affiche un message dans la console une fois que le serveur est prêt
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});