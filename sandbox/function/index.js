/*
Les fonctions sont des valeurs comme les autres.
On peut les stocke dans des variables, dans des propriétés d'objet, les passer en argumentà des fonctions
... Et il est aussi possible de créer des fonction qui renvoient donc des fonctions (ce sont des valeurs comme les autres)
*/

// cette fonction renvoie une fonction qui attend un paramètre. et qui executée l'ajoute à num et affiche le résultat dans la console
function sum(num){
  return function(num2){
    console.log(num + num2);
  };
}

const addTo5 = sum(5); // on vient de créer une fonction qui peut ajouter un nombre à 5
const addTo2 = sum(2);// on vient de créer une fonction qui peut ajouter un nombre à 2

addTo5(2);
addTo2(6);