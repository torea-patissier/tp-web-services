const personneModel = require('../models/personne.model')
const personneController = {
  getAllPersonnes: async function(req, res) {
    try {
      const results = await personneModel.getAllPersonnes();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = personneController;