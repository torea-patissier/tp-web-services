const express = require('express');
const router = express.Router();
const auteurController = require('../controllers/auteur.controller');

router.get('/', auteurController.getAllAuteurs);
router.get('/:id', auteurController.getAuteurById);
router.post('/',auteurController.addAuteur);
router.put('/:id',auteurController.updateAuteur);
router.delete('/:id',auteurController.deleteAuteur);

module.exports = router;