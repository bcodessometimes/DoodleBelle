//Get User
const db = require('../config/database');

module.exports = {
  getByEmail: (email, callback) => {

    const query = 'SELECT id, nickname, email FROM users WHERE email = ?';

    db.query(query, [email], function (err, results) {
      if (err || results.length === 0) return callback(err || null);

      const user = results[0];
      callback(null, {
        user_id: user.id.toString(),
        nickname: user.nickname,
        email: user.email
      });
    });
  },

  getUsers: (callback) => {
    db.query("SELECT * FROM users", (err, res) => {
      callback(res);
    });
  }

}