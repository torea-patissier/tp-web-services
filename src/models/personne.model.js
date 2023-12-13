const sql = require('./db');

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

  getPersonneById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM personne WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addPersonne: function(nouvellePersonne) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO personne SET ?', nouvellePersonne, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updatePersonne: function(id, personneToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE personne SET ? WHERE id = ?', [personneToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deletePersonne: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM personne WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
};

module.exports = Personne;
