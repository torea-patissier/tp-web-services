const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const URL = 'http://localhost';
const PORT = 8082;
const personneRoutes = require('./src/routes/personne.route');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API !');
});
app.use('/api/personnes', personneRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
  console.log(`URL : ${URL}:${PORT}`);
});