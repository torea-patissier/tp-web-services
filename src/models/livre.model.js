const sql = require('./db');

const livre = {


  filterLivres: function (req) {
    const request = req.query.titre;
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre WHERE titre LIKE ?', ['%' + request + '%'], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      })
    })
  },

  getAllLivres: function (page, limit) {
    const startIndex = (page - 1) * (limit - 1);

    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM livre LIMIT ? OFFSET ?', [limit, startIndex], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getLivreById: function (id) {
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

  addLivre: function (nouveauLivre) {
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

  updateLivre: function (id, LivreToUpdate) {
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

  deleteLivre: function (id) {
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
