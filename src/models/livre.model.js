const sql = require('./db');

const livre = {

  getAllLivres: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getLivreById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addLivre: function(nouveauLivre) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO livre SET ?', nouveauLivre, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateLivre: function(id, LivreToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE livre SET ? WHERE id = ?', [LivreToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteLivre: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM livre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

};

module.exports = livre;
