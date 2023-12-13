const personneModel = require('../models/personne.model');

const personneController = {

  getAllPersonnes: async function(req, res) {
    try {
      const results = await personneModel.getAllPersonnes();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getPersonneById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await personneModel.getPersonneById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('Personne non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addPersonne: async function(req, res) {
    try {
      const nouvellePersonne = req.body;
      await personneModel.addPersonne(nouvellePersonne);
      res.status(201).json({
        message: 'Personne rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updatePersonne: async function(req, res) {
    try {
      const id = req.params.id;
      const personneToUpdate = req.body;
      await personneModel.updatePersonne(id, personneToUpdate);
      res.status(200).json({message : "Informations de la personne modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deletePersonne: async function(req, res) {
    try {
      const id = req.params.id;
      await personneModel.deletePersonne(id);
      res.status(200).json({message : 'Personne supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = personneController;
