const jwt = require('jsonwebtoken')
require('dotenv').config()

const authMiddleware = {

  checkLoginData: function (req, res, next) {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).send({message: 'Nom d\'utilisateur et mot de passe requis'});
    }
    next();
  },

  verifyToken : function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(403).send({message: 'Un jeton est requis pour l\'authentification'});
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send({message: 'Jeton invalide'});
    }

    return next();
  }
};



module.exports = authMiddleware;
