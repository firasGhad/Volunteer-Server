var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cookieEncrypter = require('cookie-encrypter')
var logger = require('morgan');
const cors = require('cors');
const secretKey = '9872buscalCookies0Secret7Key1059'

var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events');
var citiesRouter = require('./routes/cities');
var signUpRouter = require('./routes/signUp');
var loginRouter = require('./routes/login');
var organizationSignUpRouter = require('./routes/organizationSignUp');
var organizationRouter = require('./routes/organization');


var schedule = require('node-schedule');

//// check connection with sequelize 
const db = require('./config/database');

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(secretKey));
app.use(cookieEncrypter(secretKey))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/cities', citiesRouter);
app.use('/signup', signUpRouter);
app.use('/login', loginRouter);

app.use('/organization_signup', organizationSignUpRouter);

app.use('/organizations', organizationRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
