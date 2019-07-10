//Requirements
// var db = require('../models');
var User = require('../models/user');
var moment = require('moment');
var momentRange = require('moment-range');
var range = momentRange.extendMoment(moment)

module.exports = function (app, passport) {

  // * USER ROUTES
  // * =====================================

  // ! Route for getting all users
  app.get('/users', function (req, res) {
    User.getUsers(function (data) {
      res.send(data);
    });
  });

  // ! Route for logging in
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
  }));

  // ! Route for adding a user
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
  }), (req, res) => {
    var firstName = 'joe';
    var lastName = 'biden';
    var userName = 'example1234'
    var email = 'example@me.com'
    var password = 'enter123';
    User.addUser(firstName, lastName, userName, email, password, data => {
      console.log(data)
      res.send(data)
    })
  });

  // ! Route for deleting a user
  app.delete('/users/:id', function (req, res) {
    User.deleteUser(req.params.id, function (data) {
      console.log(data)

      res.json(data);
    });
  });
}