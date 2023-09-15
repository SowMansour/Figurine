// 1. require le module
const pg = require('pg');

// 2. Créer un client
//const client = new pg.Client(process.env.PG_URL);
const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

// 3. Connecter le client
//client.connect();
client.connect((err) => {
    if (err) {
        console.error('Erreur de connexion', err.stack);
    } else {
        console.log('Connexion effectuée avfec succès');
    }
});

// 4. Exporter le client connecté
module.exports = client;