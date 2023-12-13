const sql = require('../models/db');

const Personne = {
  getAllPersonnes: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM personne', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },
}

module.exports = Personne;
