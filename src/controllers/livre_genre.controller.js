const livreGenreModel = require('../models/livre_genre.model');

const livreGenreController = {

  getAllLivreGenres: async function(req, res) {
    try {
      const results = await livreGenreModel.getAllLivreGenres();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getLivreGenreById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await livreGenreModel.getLivreGenreById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('LivreGenre non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addLivreGenre: async function(req, res) {
    try {
      const nouvelleLivreGenre = req.body;
      await livreGenreModel.addLivreGenre(nouvelleLivreGenre);
      res.status(201).json({
        message: 'LivreGenre rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateLivreGenre: async function(req, res) {
    try {
      const id = req.params.id;
      const LivreGenreToUpdate = req.body;
      await livreGenreModel.updateLivreGenre(id, LivreGenreToUpdate);
      res.status(200).json({message : "Informations de la LivreGenre modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteLivreGenre: async function(req, res) {
    try {
      const id = req.params.id;
      await livreGenreModel.deleteLivreGenre(id);
      res.status(200).json({message : 'LivreGenre supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = livreGenreController;
