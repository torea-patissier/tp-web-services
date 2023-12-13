const sql = require('./db');

const Couverture = {

  getAllCouvertures: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM couverture', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getCouvertureById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM couverture WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addCouverture: function(nouveauCouverture) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO couverture SET ?', nouveauCouverture, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateCouverture: function(id, CouvertureToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE couverture SET ? WHERE id = ?', [CouvertureToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteCouverture: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM couverture WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

};

module.exports = Couverture;
