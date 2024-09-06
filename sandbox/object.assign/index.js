/*
Il est possible de fusionner un objet avec un autre grâve à la méthode
Object.assign(cible, source) fusionne source à l'intérieur de cible
*/

const card = {
  title: 'titre de la carte',
  position: 4,
  save: () => console.log('je suis sauvé !'),
};

const body = {
  color: '#ff6600',
  position:2,
};

Object.assign(card, body);
console.log(card);

