const sql = require('./db');

const genre = {

  getAllGenres: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM genre', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getGenreById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM genre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addGenre: function(nouveauGenre) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO genre SET ?', nouveauGenre, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateGenre: function(id, GenreToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE genre SET ? WHERE id = ?', [GenreToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteGenre: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM genre WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

};

module.exports = genre;
