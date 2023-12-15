const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()
const app = express();
const URL = 'http://localhost';
const PORT = process.env.PORT;
const personneRoutes = require('./src/routes/personne.route');
const livreRoutes = require('./src/routes/livre.route');
const genreRoutes = require('./src/routes/genre.route');
const couvertureRoutes = require ('./src/routes/couverture.route');
const auteurRoutes = require ('./src/routes/auteur.route');
const authRoutes = require('./src/routes/auth.route');

const corsOptions = {
  origin: "http://localhost:8082",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API !');
});
app.use('/api/auth', authRoutes);
app.use('/api/personnes', personneRoutes);
app.use('/api/livres', livreRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/couvertures', couvertureRoutes);
app.use('/api/auteurs', auteurRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
  console.log(`URL : ${URL}:${PORT}`);
});