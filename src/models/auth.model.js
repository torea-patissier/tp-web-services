const sql = require('./db');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config()


const saltRounds = 10;

function generateAccessToken(user) {
  return {
    id: user.id,
    email: user.email,
    access_token : jwt.sign(user, `${process.env.JWT_SECRET}`, { expiresIn: '1800s' })
  };
}

const Auth = {

  register: function (register_data) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(register_data.password, saltRounds, function (err, hash) {
        if (err) {
          reject(err)
        } else {
          register_data.password = hash;
          sql.query('INSERT INTO utilisateur SET ?', register_data, (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },

  login: function (login_data) {
    return new Promise((resolve, reject) => {
      sql.query('SELECT * FROM utilisateur WHERE email = ? ', [login_data.email], (error, results) => {
        if (error) {
          reject(error);
        } else {
          if (results.length > 0) {
            bcrypt.compare(login_data.password, results[0].password, function (err, result) {
              if (err) {
                reject(err);
              } else if (result) {
                const payload = {
                  id: results[0].id,
                  email : results[0].email
                }
                const token = generateAccessToken(payload)
                resolve(token);
              } else {
                reject(new Error('Invalid password'));
              }
            });
          } else {
            reject(new Error('User not found'));
          }
        }
      })
    })
  }

};

module.exports = Auth;
