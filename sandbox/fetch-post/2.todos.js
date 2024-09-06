// Ce support prépare mieux au challenge C06, mais est plus chronophage !


document.addEventListener("DOMContentLoaded", init); // Le callback du DOMContentLoaded sera appelé lorsque le DOM est bien chargé (le HTML est parsé par le navigateur)

async function init() {
  const httpResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await httpResponse.json();
  console.log(posts);

  posts.forEach(post => {
    // Selectionner le template
    const postTemplate = document.querySelector("#post-template");

    // Cloner le template
    const postClone = postTemplate.content.cloneNode(true);

    // Modifier le contenu du template
    postClone.querySelector('[slot="post-title"]').textContent = post.title;
    postClone.querySelector('[slot="post-body"]').textContent = post.body;

    // Selectionner un parent
    const postsContainerElement = document.querySelector("#posts-container");

    // Insérer le template dans un parent
    postsContainerElement.appendChild(postClone);
  });


  // On selectionne le formulaire
  const formElement = document.querySelector("form");

  // On écoute le SUBMIT sur le formulaire, et en cas de submit : 
  formElement.addEventListener("submit", async (event) => {
    // - preventDefault pour empecher le comportement par défaut du formulaire (ie, le rechargement de la page)
    event.preventDefault();

    // - récupérer les données que l'utilisateur a rentré dans le formulaire
    // METHODE 1 : on selectionne les inputs et on lit leur value
    // METHODE 2 : Object.fromEntries(new FormData(formElement)) => pour avoir tous les champs d'un seul coup

    const body = Object.fromEntries(new FormData(formElement));
    console.log(body); // { title: "...", body: "..." }

    // ==== FETCH : POST ===
    const httpResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // par défaut, ça serait GET
      body: JSON.stringify(body), // penser à stringifier le body, car sur le réseau, il n'y a que les string qui passent 
      headers: { "Content-Type": "application/json" } // préciser le type de ce body stringifier (ici, on envoie du JSON)
    });

    const createdPost = await httpResponse.json();
    console.log(createdPost); // { id, title, body }

    // Etape suivante ? ==> l'afficher à l'aide du template ;) 

  });
}
