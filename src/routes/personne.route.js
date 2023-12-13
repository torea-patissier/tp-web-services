const express = require('express');
const router = express.Router();
const personneController = require('../controllers/personne.controller');

router.get('/', personneController.getAllPersonnes);

module.exports = router;