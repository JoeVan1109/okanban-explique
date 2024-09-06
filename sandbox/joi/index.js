import Joi from 'joi';

const schema = Joi.object({
  name: Joi.string().min(3).max(12).required(),
});

const obj1 = {
  name: 'nibelune',
};

const obj2 = {
  name: 'na',
};

const obj3 = {
  
};

const obj4 = {
  name:'Gislain',
  size: 187,
};

console.log(schema.validate(obj1));
console.log(schema.validate(obj2));
console.log(schema.validate(obj3));
console.log(schema.validate(obj4).error.details[0]);