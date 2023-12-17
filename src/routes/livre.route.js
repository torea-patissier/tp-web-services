const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livre.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const middleware = [
  authMiddleware.verifyToken
]

router.get('/', ...middleware, livreController.getAllLivres);
router.get('/:id', ...middleware, livreController.getLivreById);
router.post('/', ...middleware, livreController.addLivre);
router.put('/:id', ...middleware, livreController.updateLivre);
router.delete('/:id', ...middleware, livreController.deleteLivre);

module.exports = router;