// Importe les modèles et le client Sequelize depuis le fichier index des modèles
import { Card, List, Tag, client } from '../models/index.js';

// Appelle la fonction principale pour peupler la base de données
seedDatabase();

async function seedDatabase() {
  console.log('🔄 Okanban seeding started...');

  // Crée trois tags avec des noms et des couleurs spécifiques
  const urgentTag = await Tag.create({ name: 'Urgent',       color: '#FF00FF' });
  const lateTag   = await Tag.create({ name: 'En retard',    color: '#000000' });
  const ecoTag    = await Tag.create({ name: 'Eco-friendly', color: '#00FF00' });

  // Crée plusieurs listes et leurs cartes associées en une seule opération
  await List.bulkCreate([
    { title: 'Liste des courses', position: 1, cards: [
      { content: 'contenu de la carte', title: 'Chartreuse', position: 3 },
      { content: 'contenu de la carte', title: 'Concombre',  position: 2, color: '#00FF00' },
      { content: 'contenu de la carte', title: 'Savon', position: 1, color: '#FF00FF' }
    ] },

    { title: 'Todo', position: 2, cards: [
      { content: 'contenu de la carte', title: 'Dormir', position: 1, color: '#FF0000' },
      { content: 'contenu de la carte', title: 'Nourrir le chat', position: 2 },
      { content: 'contenu de la carte', title: 'Devenir le meilleur dresseur', position: 3 }
    ] },

    { title: 'Liste des anniversaires', position: 3, cards: [
      { content: 'contenu de la carte', title: 'Maman le 01/01/1970', position: 1, color: '#0000FF' }
    ] }

  ], { include: 'cards' });

  // Ajoute des tags à certaines cartes spécifiques
  await addTagToCard('Savon', ecoTag);
  await addTagToCard('Savon', urgentTag);
  await addTagToCard('Nourrir le chat', urgentTag);
  await addTagToCard('Dormir', lateTag);

  console.log('✅ Okanban seed done with success !');
  
  console.log('🧹 Clean up by closing database connexion');
  // Ferme la connexion à la base de données une fois le peuplement terminé
  await client.close();
}

// Fonction utilitaire pour ajouter un tag à une carte
async function addTagToCard(cardTitle, tagEntity) {
  // Trouve la carte par son titre
  const card = await Card.findOne({ where: { title: cardTitle}});
  // Ajoute le tag à la carte
  await card.addTag(tagEntity);
}
