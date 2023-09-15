const express = require('express');
const app = express();
// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();
// on importe le router
const router = require('./app/router');
// un peu de config
const PORT = process.env.PORT;

//On va utiliser Ejs
app.set('view engine', 'ejs');
app.set('views', './app/views');

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
