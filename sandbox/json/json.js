// Javascript met à notre disposition un objet JSON qui contient des méthodes pour travailler facilement avec le format JSON
// En particluier 2 méthodes, stringify et parse qui permettent respectivement de transformer un objet JS en chaîne de caractères au format JSON
// et de transformer une chaîne de caractères au format JSON en objet javascript
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON

const nib = {
  firstname: "Benoît",
  lastname: "Schiex",
  age: 51,
  jobs: ["pirate", "teacher", "developer"],
};

const jsonNib = JSON.stringify(nib, null, 2);
console.log(jsonNib);

const nibClone = JSON.parse(jsonNib);
console.log(nibClone);
