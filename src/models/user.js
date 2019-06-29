//Get User
const db = require('../config/database');

function getByEmail(email, callback) {

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
}

module.exports = {
  getByEmail
}