import 'dotenv/config';
import { Sequelize } from 'sequelize';

// Extraction des variables d'environnement pour la configuration de la base de données
const { 
  PGUSER: user,
  PGDATABASE: database,
  PGPASSWORD: password,
  PGHOST: host,
  PGPORT: port,
} = process.env;

// Création de l'instance Sequelize pour la connexion à la base de données
export const client = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${database}`, {
  define: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  logging: false,
});

// Test de la connexion à la base de données
client.authenticate()
  .then(
    () => console.log(`🚀 database ${database} connected`),
    () => console.log(`❌ unable to connect to database ${database}`)
  );

/*
try {
    await sequelize.authenticate()
    console.log('database connection ok')
} catch (error){
    console.log('Houston, i\'ve got a problem')
}
*/
