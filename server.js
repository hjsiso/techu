require('./config/config');     
//require('./global_functions');

const express = require('express');
const v1 = require('./routes/v1');
const passport = require('passport');
const bodyParser = require('body-parser');
const app = express();
const models = require("./models");

const logger = require('morgan');
const mongoose = require('mongoose');
const jsonParser = express.json();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(function (req, res, next) { //Para permitir CORS 
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization, Content-Type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/v1', v1);

//Manejo de Errores
app.use('/', function(req, res){
  res.statusCode = 200; 
  res.json({status:"success", message:"Parcel Pending API", data:{}})
}); 
app.use(function(req, res, next) {
 var err = new Error('Not Found');
 err.status = 404;
 next(err);
});
app.use(function(err, req, res, next) {
 res.locals.message = err.message;
 res.locals.error = req.app.get('env') === 'development' ? err : {};
 res.status(err.status || 500);
 res.render('error');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});
