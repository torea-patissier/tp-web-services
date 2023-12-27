const Auteur = require('../models/auteur.model');

const AuteurController = {

  filterAuteur: async function(req, res) {
    try {
      const auteurToFind = req.query.auteur || ''
      console.log('\n req.query : \n',req.query);
      const results = await Auteur.filterAuteur(auteurToFind);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getAllAuteurs: async function(req, res) {
    try {
      const results = await Auteur.getAllAuteurs();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getAuteurById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await Auteur.getAuteurById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('Auteur non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addAuteur: async function(req, res) {
    try {
      const nouvelleAuteur = req.body;
      await Auteur.addAuteur(nouvelleAuteur);
      res.status(201).json({
        message: 'Auteur rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateAuteur: async function(req, res) {
    try {
      const id = req.params.id;
      const AuteurToUpdate = req.body;
      await Auteur.updateAuteur(id, AuteurToUpdate);
      res.status(200).json({message : "Informations du Auteur modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteAuteur: async function(req, res) {
    try {
      const id = req.params.id;
      await Auteur.deleteAuteur(id);
      res.status(200).json({message : 'Auteur supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = AuteurController;
