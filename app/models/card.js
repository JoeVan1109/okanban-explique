import { Model, DataTypes } from 'sequelize';
import { client } from './client.js';

// Définit la classe Card qui étend le modèle Sequelize
export class Card extends Model {}

// Initialise le modèle Card avec ses attributs et options
Card.init({
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, 
  },
  color: {
    type: DataTypes.STRING(7),
    allowNull: false,
    defaultValue: '#000000',
  },
}, {
  sequelize: client,
  tableName: 'card',
});