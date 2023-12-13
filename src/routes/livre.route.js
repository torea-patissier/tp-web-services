const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livre.controller');

router.get('/', livreController.getAllLivres);
router.get('/:id', livreController.getLivreById);
router.post('/',livreController.addLivre);
router.put('/:id',livreController.updateLivre);
router.delete('/:id',livreController.deleteLivre);

module.exports = router;