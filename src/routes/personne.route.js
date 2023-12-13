const express = require('express');
const router = express.Router();
const personneController = require('../controllers/personne.controller');

router.get('/', personneController.getAllPersonnes);
router.get('/:id', personneController.getPersonneById);
router.post('/',personneController.addPersonne);
router.put('/:id',personneController.updatePersonne);
router.delete('/:id',personneController.deletePersonne);

module.exports = router;