import { client } from '../models/index.js';

console.log('🗑️ Suppression des tables existantes...'); // Notamment pour relancer le script plusieurs fois si on veut faire un reset:db
await client.drop();

console.log('🚧 Création des tables...'); // Synchroniser le modèle séquelize avec la BDD, ie, RE-CREER la table à partir du modèle client
await client.sync();

console.log('✅ Migration OK ! Fermeture de la base...'); // On ferme le tunnel de connexion pour que le script s'arrête bien
await client.close();
