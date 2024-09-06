// Importation des modèles et du client Sequelize
import { List } from './list.js';
import { Card } from './card.js';
import { Tag } from './tag.js';
import { client } from './client.js';

// Définition de la relation One-to-Many entre List et Card
List.hasMany(Card, {
  as: 'cards', // Alias pour accéder aux cartes d'une liste (ex: list.cards)
  foreignKey: {
    name: 'list_id', // Nom de la colonne dans la table 'card' qui référence 'list'
    allowNull: false, // La carte doit obligatoirement appartenir à une liste
  },
  onDelete: 'cascade', // Si une liste est supprimée, toutes ses cartes le seront aussi
});

Card.belongsTo(List, {
  as: 'list', // Alias pour accéder à la liste d'une carte (ex: card.list)
  foreignKey: 'list_id', // Nom de la colonne dans 'card' qui fait référence à 'list'
});



// Définition de la relation Many-to-Many entre Card et Tag
Card.belongsToMany(Tag, {
  as: 'tags', // Alias pour accéder aux tags d'une carte (ex: card.tags)
  through: 'card_has_tag', // Nom de la table de jonction
  foreignKey: 'card_id', // Clé dans la table de jonction qui référence 'card'
});

Tag.belongsToMany(Card, {
  as: 'cards', // Alias pour accéder aux cartes d'un tag (ex: tag.cards)
  through: 'card_has_tag', // Nom de la table de jonction (même que ci-dessus)
  foreignKey: 'tag_id', // Clé dans la table de jonction qui référence 'tag'
});

// Exportation des modèles et du client pour utilisation dans d'autres fichiers
export { List, Card, Tag, client };