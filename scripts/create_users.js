'use strict';
const config = require('../config/Config');
const crypto_extra = require('crypto-extra');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User } = require('../models/Model');

// var data = new User({ name: "admin", password: "admin"});
var data = new User({ name: "admin", password: crypto_extra.createHash('sha256').update("admin").digest("hex")});
data.save();

// data = new User( { name: "calebe", password: "umasenha" } );
data = new User( { name: "calebe", password: crypto_extra.createHash('sha256').update("umasenha").digest("hex") } );
data.save();

// data = new User( { name: "hans", password: "duassenha" } );
data = new User( { name: "hans", password: crypto_extra.createHash('sha256').update("duassenha").digest("hex") } );
data.save();
