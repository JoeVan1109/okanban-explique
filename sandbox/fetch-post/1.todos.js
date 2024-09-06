const apiBaseUrl = "https://jsonplaceholder.typicode.com";

// GET

async function getTodos() {
  const httpResponse = await fetch(`${apiBaseUrl}/todos`); // CALL HTTP. Par défaut GET
  const todos = await httpResponse.json();
  console.log(todos);
}

getTodos();


// POST 

async function createPost() {
  const httpResponse = await fetch(`${apiBaseUrl}/posts`, {
    method: "POST", // 1. Choix du VERBE
    body: JSON.stringify({ // 2. Stringifier le body
      title: "C'est la saison de la raclette",
      body: "N'oubliez pas les cornichons !"
    }),
    headers: { "Content-Type": "application/json" } // 3. Préciser les headers du format du body
  });
  const createdPost = await httpResponse.json();
  console.log(createdPost);
}

createPost();
