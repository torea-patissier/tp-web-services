const livre = require('../models/livre.model');

const livreController = {

  filterLivres: async function(req,res){
    try {
      const result = await livre.filterLivres(req);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getAllLivres: async function(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const results = await livre.getAllLivres(page, limit);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
     }
  },

  getLivreById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await livre.getLivreById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('Livre non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addLivre: async function(req, res) {
    try {
      const nouvelleLivre = req.body;
      await livre.addLivre(nouvelleLivre);
      res.status(201).json({
        message: 'Livre rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateLivre: async function(req, res) {
    try {
      const id = req.params.id;
      const LivreToUpdate = req.body;
      await livre.updateLivre(id, LivreToUpdate);
      res.status(200).json({message : "Informations du Livre modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteLivre: async function(req, res) {
    try {
      const id = req.params.id;
      await livre.deleteLivre(id);
      res.status(200).json({message : 'Livre supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = livreController;
