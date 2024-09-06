// Importation des modèles Card et Tag
import { Card, Tag } from '../models/index.js';
// Importation de la classe d'erreur personnalisée
import { HttpError } from '../error/httperror.js';

export const cardController = {
  // Récupère toutes les cartes avec leurs tags associés
  getAll: async(_, res)=>{
    const cards = await Card.findAll({
      include: 'tags', // Inclut les tags associés à chaque carte
    });
    res.json(cards); // Renvoie les cartes en JSON
  },

  // Récupère une carte spécifique par son ID
  getOne:async (req, res)=>{
    const cardId = parseInt(req.params.id, 10); // Convertit l'ID en nombre
    const selectedCard = await Card.findByPk(cardId); // Recherche la carte par sa clé primaire
    if(!selectedCard){
      throw new HttpError(404, 'Card not found. Please verify the provided ID.');
    }
    res.json(selectedCard); // Renvoie la carte en JSON
  },

  // Crée une nouvelle carte
  createOne: async(req, res)=>{
    const newCard = await Card.create(req.body); // Crée une carte avec les données du corps de la requête
    res.status(201).json(newCard); // Renvoie la nouvelle carte avec un statut 201 (Created)
  },

  // Met à jour une carte existante
  patchOne: async (req, res) => {
    const cardId = parseInt(req.params.id, 10);
    const selectedCard = await Card.findByPk(cardId);
    if(!selectedCard){
      throw new HttpError(404, 'Card not found. Please verify the provided ID.');
    }
    Object.assign(selectedCard, req.body); // Fusionne les nouvelles données avec la carte existante
    await selectedCard.save(); // Sauvegarde les modifications
    res.json(selectedCard); // Renvoie la carte mise à jour
  },

  // Supprime une carte
  deleteOne: async (req, res)=> {
    const cardId = parseInt(req.params.id, 10);
    const selectedCard = await Card.findByPk(cardId);
    if(!selectedCard){
      throw new HttpError(404, 'Card not found. Please verify the provided ID.');
    }
    await selectedCard.destroy(); // Supprime la carte de la base de données
    res.status(204).end(); // Renvoie un statut 204 (No Content)
  },

  // Associe un tag à une carte
  associateOneWithTag: async(req, res) => {
    const cardId = parseInt(req.params.cardId, 10);
    const tagId = parseInt(req.params.tagId, 10);
    const card = await Card.findByPk(cardId);
    const tag = await Tag.findByPk(tagId);
    if(!card || !tag){
      throw new HttpError(404, 'Card or tag not found. Please verify the provided IDs.');
    }
    await card.addTag(tag); // Ajoute le tag à la carte
    const updatedCard = await Card.findByPk(cardId, {
      include: 'tags', // Récupère la carte mise à jour avec ses tags
    });
    res.status(201).json(updatedCard); // Renvoie la carte mise à jour
  },
  
  // Dissocie un tag d'une carte
  dissociateOneFromTag: async(req, res) => {
    const cardId = parseInt(req.params.cardId, 10);
    const tagId = parseInt(req.params.tagId, 10);
    const card = await Card.findByPk(cardId);
    const tag = await Tag.findByPk(tagId);
    if(!card || !tag){
      throw new HttpError(404, 'Card or tag not found. Please verify the provided IDs.');
    }
    await card.removeTag(tag); // Retire le tag de la carte
    const updatedCard = await Card.findByPk(cardId, {
      include: 'tags', // Récupère la carte mise à jour avec ses tags restants
    });
    res.status(201).json(updatedCard); // Renvoie la carte mise à jour
  },
};