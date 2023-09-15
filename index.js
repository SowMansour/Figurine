const express = require('express');
const app = express();
const session = require('express-session');
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

app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: true, //Sauvegarde une session meme s'il y'a rien dedans
  resave: false, //Sauvegarde de nouveau les données de la session
  cookie: {
      secure: false, //Parce que nous sommes en HTTP et non en HTTPS
      maxAge: 100 * 60 * 60 //1h
      }
      }));

//Pour tranferer les infos de la session en locals de notre appli en global
app.use((req, res, next) => {
  app.locals.session = req.session;
  next()
})

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
