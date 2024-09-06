# Les Modules

Node.js supporte deux systèmes de modules : CommonJS (CJS) et ECMAScript Modules (ESM).
Comprendre ces deux formats vous aidera à écrire et maintenir vos applications Node.js efficacement.
Voici un guide pratique pour distinguer et utiliser ces deux types de modules.

---

#### **1. CommonJS (CJS)**

**Définition** :  
CommonJS est le système de module traditionnel utilisé dans Node.js depuis ses débuts. Il est conçu pour les applications serveur.

**Comment utiliser les modules CJS :**

- **Exportation** : Vous pouvez exporter des fonctions, objets, ou valeurs depuis un module en utilisant `module.exports`.

  ```javascript
  // Dans un fichier math.js
  const add = (a, b) => a + b;
  module.exports = add;
  ```

- **Importation** : Utilisez `require()` pour importer les modules.

  ```javascript
  // Dans un autre fichier
  const add = require("./math.js");
  console.log(add(2, 3)); // 5
  ```

**Caractéristiques principales** :

- Synchronisation : Les imports sont résolus de manière synchrone.
- Adapté au serveur mais peut rendre le chargement frontal plus lent.

#### **2. ECMAScript Modules (ESM)**

**Définition** :  
ESM est le système officiel de modules introduit dans ECMAScript 2015 (ES6). Node.js supporte ESM à partir de la version 12, avec la stabilité obtenue vers la version 14.

**Comment utiliser les modules ESM :**

- **Exportation** : Exportez des éléments avec `export`.

  ```javascript
  // Dans un fichier math.js
  export const add = (a, b) => a + b;
  ```

- **Importation** : Utilisez `import` pour charger les modules.

  ```javascript
  // Dans un autre fichier
  import { add } from "./math.js";
  console.log(add(2, 3)); // 5
  ```

**Caractéristiques principales** :

- Asynchro, adapté pour le code partagé entre le serveur et le client.
- Importation dynamique possible, bénéficient d’une mise en cache plus sophistiquée.

#### **Différences Clés**:

| Aspect                | CommonJS                                       | ES Modules                                                |
| --------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| Initialisation        | Synchrone                                      | Asynchrone                                                |
| Syntaxe               | `require`, `module.exports`                    | `import`, `export`                                        |
| Chargement            | Au runtime                                     | Au démarrage                                              |
| Condition d'exécution | Peut importer conditionnellement à l'exécution | Déclaration statique, mais supporte l'import dynamique    |
| Extension de fichier  | `.js` (par défaut)                             | `.mjs` ou `.js` avec "type": "module" dans `package.json` |

---

#### Interopérabilité entre CJS et ESM

L'interopérabilité signifie faire fonctionner ensemble des modules CommonJS et ESM dans une même application. Voici quelques points clés pour y parvenir :

1. **Importation de CJS dans ESM** :

   - Utilise l’instruction `import` pour importer des modules CJS dans un module ESM.
   - Exemple :
     ```javascript
     import package from "some-commonjs-package";
     ```

2. **Importation de ESM dans CJS** :

   - Node.js permet d'utiliser `await import()` pour importer dynamiquement des modules ESM dans des modules CJS.
   - Exemple :
     ```javascript
     async function loadModule() {
       const module = await import("some-es-module");
       console.log(module.default);
     }
     loadModule();
     ```

3. **Conversions et configurations** :

   - **package.json** : Ajoute `"type": "module"` pour traiter les fichiers `.js` comme ESM par défaut, ou utilise l'extension `.mjs` pour les modules ES dans un contexte CJS.
   - Sois prudent avec le mélange des types de module car cela peut entraîner des erreurs subtiles, surtout autour de la synchronisation des imports.

4. **Limitations et précautions** :
   - Les modules CJS sont toujours chargés de manière synchrone, tandis que les ESM peuvent être chargés de manière asynchrone.
   - Fais attention aux cycles de dépendances qui peuvent être plus difficiles à gérer lors de l’utilisation mixte de CJS et ESM.

#### **Conseils Pratiques** :

- **Choisir entre CJS et ESM** : Si votre projet implique beaucoup de dépendances qui utilisent CJS, il pourrait être plus simple de rester avec CJS. Cependant, pour les nouveaux projets, ESM est souvent recommandé pour sa gestion plus moderne et ses capacités d'optimisation.
- **Interopérabilité** : Node.js permet certaines formes d'interopérabilité entre CJS et ESM, mais il est important de comprendre comment importer des CJS dans ESM et vice versa pour éviter des erreurs communes.
