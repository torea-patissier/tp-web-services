const express = require('express');
const router = express.Router();
const livreGenreController = require('../controllers/livre_genre.controller');

router.get('/', livreGenreController.getAllLivreGenres);
router.get('/:id', livreGenreController.getLivreGenreById);
router.post('/',livreGenreController.addLivreGenre);
router.put('/:id',livreGenreController.updateLivreGenre);
router.delete('/:id',livreGenreController.deleteLivreGenre);

module.exports = router;