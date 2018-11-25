'use strict';
const config = require('../config/Config');
const crypto_extra = require('crypto-extra');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User } = require('../models/Model');

var data = new User({ name: "admin", password: crypto_extra.createHash('sha256').update("admin").digest("hex")});
data.save();

data = new User( { name: "calebe", password: crypto_extra.createHash('sha256').update("umasenha").digest("hex") } );
data.save();

data = new User( { name: "hans", password: crypto_extra.createHash('sha256').update("duassenha").digest("hex") } );
data.save();

data = new User( { name: "1521998", password: crypto_extra.createHash('sha256').update("*123456#").digest("hex") } );
data.save();

data = new User( { name: "1615822", password: crypto_extra.createHash('sha256').update("*123456#").digest("hex") } );
data.save();

data = new User( { name: "123456", password: crypto_extra.createHash('sha256').update("2444").digest("hex") } );
data.save();

data = new User( { name: "123", password: crypto_extra.createHash('sha256').update("123").digest("hex") } );
data.save();