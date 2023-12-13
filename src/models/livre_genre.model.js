const sql = require('./db');

const LivreGenre = {

  getAllLivreGenres: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre_genre', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getLivreGenreById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre_genre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addLivreGenre: function(nouveauLivreGenre) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO livre_genre SET ?', nouveauLivreGenre, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateLivreGenre: function(id, LivreGenreToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE livre_genre SET ? WHERE id = ?', [LivreGenreToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteLivreGenre: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM livre_genre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

};

module.exports = LivreGenre;
