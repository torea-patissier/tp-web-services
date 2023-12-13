const express = require('express');
const router = express.Router();
const couvertureController = require('../controllers/couverture.controller');

router.get('/', couvertureController.getAllCouvertures);
router.get('/:id', couvertureController.getCouvertureById);
router.post('/',couvertureController.addCouverture);
router.put('/:id',couvertureController.updateCouverture);
router.delete('/:id',couvertureController.deleteCouverture);

module.exports = router;