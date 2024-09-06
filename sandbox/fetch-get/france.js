async function main() {
  
  // Requête AJAX (fetch) vers une API 
  const regionURL = "https://geo.api.gouv.fr/regions";
  const httpResponse = await fetch(regionURL);
  const regions = await httpResponse.json();

  // Affichage des données dans la page
  const regionListUl = document.querySelector("#regions-list"); // Selectionner le UL
  regions.forEach((region) => {
    const regionLi = document.createElement("li"); // Créer un LI
    regionLi.textContent = region.nom; // Changer le contenu du LI
    regionListUl.appendChild(regionLi); // Ajouter le LI dans le UL

    // Ajoute d'une fonctionnalité au click sur une région
    regionLi.addEventListener("click", async () => {

      // Requête AJAX (fetch) vers une API 
      const departementURL = `https://geo.api.gouv.fr/regions/${region.code}/departements`;
      const httpResponse = await fetch(departementURL);
      const departements = await httpResponse.json();

      // Affichage des données dans la page
      const departementsUL = document.querySelector("#departements-list");
      departementsUL.innerHTML = ""; // On vide la liste des régions AVANT d'en insérer de nouvelles
      departements.forEach((departement) => {
        const departementLI = document.createElement("li");
        departementLI.textContent = departement.nom;
        departementsUL.appendChild(departementLI);
      });
    });
  });


  // Challenge : quand je clique sur un région, on affiche les départements de cette région sur le côté !
}

main();

