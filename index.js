var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

var routes = require('./services/Api');

const config = require('./config/Config');

var { Load } = require('./models/Model');


mongoose.connect(config.DB, { useNewUrlParser: true }, function(error, databese){
  if(error) throw error;
  else{
    databese.db.listCollections({name: 'loads'}).next(function(err, collections) {
      if(!collections)
      {
        var createdb = require('./scripts/create_loads');
      }
    });
  }
});

app.listen(config.PORT);

console.log("> Server(backend) running on port: http://localhost:"+config.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api/master', routes);

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');    
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

module.exports = app;