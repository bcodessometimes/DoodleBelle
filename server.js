//Requirements
require('dotenv').config();
var express = require('express');
var User = require('./src/models/user');
var mysql = require('mysql');
var app = express();
var PORT = process.env.PORT || 8080;

//Passport.js Requirements (middleware for node & auth)
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');

// * PassportJS Configuration - Connect to our database
// * ==========================================

require('./src/config/passport')(passport, User); // * pass passport for configuration

// * The Middleware - Set up our app
// * ==========================================
app.use(morgan('dev')); // ! log every request to the console
app.use(cookieParser()); // ! read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

// * PassportJS Methods
// * ==========================================
app.use(session({
  secret: 'be excellent to each other',
  resave: true,
  saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // ! persistent login sessions
app.use(flash()); // ! use connect-flash for flash messages stored in session

//Routes
//Loading routes and passing in the app & passport
var apiRoute = require('./src/routes/apiRoutes')(app, passport);
// var htmlRoute = require('./src/routes/htmlRoutes')(app, passport);

// * Passport strategies
// * ==========================================
require('./src/config/passport')(passport, User);

app.listen(PORT, () => {
  console.log(`listening at ${PORT}`)
})