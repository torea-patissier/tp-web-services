const Couverture = require('../models/couverture.model');

const CouvertureController = {

  getAllCouvertures: async function(req, res) {
    try {
      const results = await Couverture.getAllCouvertures();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getCouvertureById: async function(req, res) {
    try {
      const id = req.params.id;
      const result = await Couverture.getCouvertureById(id);
      if (result.length > 0) {
        res.status(200).json(result);
      } else {
        res.status(404).send('Couverture non trouvée');
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  addCouverture: async function(req, res) {
    try {
      const nouvelleCouverture = req.body;
      await Couverture.addCouverture(nouvelleCouverture);
      res.status(201).json({
        message: 'Couverture rajouté'
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  updateCouverture: async function(req, res) {
    try {
      const id = req.params.id;
      const CouvertureToUpdate = req.body;
      await Couverture.updateCouverture(id, CouvertureToUpdate);
      res.status(200).json({message : "Informations du Couverture modifiées"});
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteCouverture: async function(req, res) { // todo delete on casca
    try {
      const id = req.params.id;
      await Couverture.deleteCouverture(id);
      res.status(200).json({message : 'Couverture supprimé'});
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = CouvertureController;
