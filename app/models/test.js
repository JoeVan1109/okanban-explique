import { List, Card, Tag } from './index.js';


/*
const lists = await List.findAll();
console.log(lists);

const cards = await Card.findAll();
console.log(cards);

const tags = await Tag.findAll();
console.log(tags);
*/

const list = await List.findByPk(1,{
  include:'cards',
});

// console.log(JSON.stringify(list, null, 4));

const card = await Card.findByPk(1,{
  include:'tags',
});

console.log(JSON.stringify(card, null, 4));