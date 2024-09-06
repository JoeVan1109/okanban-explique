/*
JS considére que toutes les valeurs sont vraies (truthy)
sauf 6 (false ou falsy values)
false
undefined
0
null
NaN
'' (chaine de caractèes vide)
*/

let myVar;

if(myVar){
  console.log('myVar est true ou truthy');
} else {
  console.log('myVar est false ou falsy');
}
