const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const URL = 'http://localhost';
const PORT = 8082;
const personneRoutes = require('./src/routes/personne.route');
const livreGenreRoutes = require('./src/routes/livre_genre.route');
const livreRoutes = require('./src/routes/livre.route');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API !');
});
app.use('/api/personnes', personneRoutes);
app.use('/api/livre_genres', livreGenreRoutes);
app.use('/api/livres',livreRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
  console.log(`URL : ${URL}:${PORT}`);
});