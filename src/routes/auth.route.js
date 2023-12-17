const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const basicMiddleware = require('../middlewares/basic.middleware');

const middleware = [
   basicMiddleware.checkBodyIsEmpty,
   authMiddleware.checkLoginData
]

router.post('/register', ...middleware, authController.register);
router.post('/login', ...middleware, authController.login);

module.exports = router;