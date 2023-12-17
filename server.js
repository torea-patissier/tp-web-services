const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config()

const app = express();
const URL = 'http://localhost';
const PORT = process.env.PORT;
const livreRoutes = require('./src/routes/livre.route');
const genreRoutes = require('./src/routes/genre.route');
const couvertureRoutes = require ('./src/routes/couverture.route');
const auteurRoutes = require ('./src/routes/auteur.route');
const authRoutes = require('./src/routes/auth.route');

const corsOptions = {
  origin: "http://localhost:8082",
  optionsSuccessStatus: 200
}


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(limiter);

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon API !');
});
app.use('/api/auth', authRoutes);
app.use('/api/livres', livreRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/couvertures', couvertureRoutes);
app.use('/api/auteurs', auteurRoutes);

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
  console.log(`URL : ${URL}:${PORT}`);
});