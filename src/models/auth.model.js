const sql = require('./db');
const bcrypt = require("bcrypt");

const saltRounds = 10;
const Auth = {
  register: function(register_data) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(register_data.password, saltRounds, function(err, hash) {
        if(err){
          reject(err)
        }else{
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
};

module.exports = Auth;
