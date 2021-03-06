const path = require('path');

require('dotenv').config({path:__dirname+'/../.env.dev'});

  const express = require('express');

  const logger = require('morgan');
  const favicon = require('serve-favicon');
  const expressValidator = require('express-validator');
  const cookieParser = require('cookie-parser');
  const session = require('express-session');
  const bodyParser = require('body-parser');
  const multer = require('multer');
  const config = require('../config');
  // const aclify = require('aclify');
  const mongoose = require('../database/db');
  const index = require('../routes');
  const MongoStore = require('connect-mongodb-session')(session);

  const passport = require('passport');

  const csrf = require('csurf');
  const flash = require('express-flash');

  const app = express();

  // Page Rendering
  app.set('views', path.join(__dirname, '../views'));
  app.set('view engine', 'pug');

  // Favicon
  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  // Logger
  if (app.get('env') === 'development') {
    app.use(logger('dev'));
  }


  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(expressValidator());

  // Session
  app.use(cookieParser());

  app.use(session({
    name: config.session.name,
    resave: false,
    saveUninitialized: true,
    secret: config.session.secret,
    key: config.session.key,
    store: new MongoStore({ url: config.db.uri, autoReconnect: true, clear_interval: 3600 }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
      secure: 'auto'
    }
  }));

  let storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, path.join(__dirname, '../public/uploads'));
    },
    filename: function(req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  let upload = multer({ storage: storage });

  app.use(multer(upload).single('file'));

  // csrf protection MUST be defined after cookieParser and session middleware
  app.use(csrf({ cookie: true }));

  app.use(function(req, res, next){
      res.locals._csrf = req.csrfToken();
      next();
  });

  app.use(flash());

  // passport needs to come after session initialization
  app.use(passport.initialize());
  app.use(passport.session());


  // Public directory
  app.use(express.static(path.join(__dirname, '../public')));

  // pass the user object to all responses
  app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
  });

  // Routing

  app.use('/', index);

  // Error handing
  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: { },
    });
  });

module.exports = app;
