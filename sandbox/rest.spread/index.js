/*
... rest ou spread operator
*/

function rest(...args){
  console.log(args);
}

function spread(array){
  console.log(...array);
}

rest('Bonjour',32, false, [1,2,3]);

spread([7,98,32]);