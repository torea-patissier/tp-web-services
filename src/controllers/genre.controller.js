const Genre = require('../models/genre.model');

const GenreController = {

  getAllGenres: async function(req, res) {
    try {
      const results = await Genre.getAllGenres();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getGenreById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await Genre.getGenreById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('Genre non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addGenre: async function(req, res) {
    try {
      const nouvelleGenre = req.body;
      await Genre.addGenre(nouvelleGenre);
      res.status(201).json({
        message: 'Genre rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateGenre: async function(req, res) {
    try {
      const id = req.params.id;
      const GenreToUpdate = req.body;
      await Genre.updateGenre(id, GenreToUpdate);
      res.status(200).json({message : "Informations du Genre modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteGenre: async function(req, res) {
    try {
      const id = req.params.id;
      await Genre.deleteGenre(id);
      res.status(200).json({message : 'Genre supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = GenreController;
