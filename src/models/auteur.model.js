const sql = require('./db');

const Auteur = {

  filterAuteur: function(auteurInfo){
    let query = `SELECT * FROM auteur WHERE nom LIKE ?`;
    return new Promise((resolve, reject) => {
      sql.query(query,[`%${auteurInfo}%`], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getAllAuteurs: function() {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM auteur', (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  getAuteurById: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM auteur WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  addAuteur: function(nouveauAuteur) {
    return new Promise((resolve, reject) => {
      sql.query('INSERT INTO auteur SET ?', nouveauAuteur, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  updateAuteur: function(id, AuteurToUpdate) {
    return new Promise((resolve, reject) => {
      sql.query('UPDATE auteur SET ? WHERE id = ?', [AuteurToUpdate, id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  },

  deleteAuteur: function(id) {
    return new Promise((resolve, reject) => {
      sql.query('DELETE FROM auteur WHERE id = ?', [id], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

};

module.exports = Auteur;
