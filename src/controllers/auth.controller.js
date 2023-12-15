const authModel = require('../models/auth.model');

const authController = {

  register: async function(req, res) {
    try {
      const register = req.body;
      await authModel.register(register);
      res.status(201).json({
        message: `Nouvel utilisateur : ${register.email}`
      });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  login: async function(req,res){
    try {
      const login = req.body;
      const result = await authModel.login(login);
      res.status(200).json(result);
    } catch (error){
      res.status(500).send(error);
    }
  }
};

module.exports = authController;
