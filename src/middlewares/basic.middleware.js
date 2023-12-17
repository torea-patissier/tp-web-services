const basisMiddleware = {
  checkBodyIsEmpty: function (req, res, next) {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({message: 'Le corps de la requête est vide'});
    }
    next();
  }
};

module.exports = basisMiddleware;
