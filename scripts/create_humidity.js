'use strict';
const config = require('../config/Config');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User, Temperature_setPoint, Humidity_setPoint, Humidity, Temperature } = require('../models/Model');

// var Humidity_setPoint = require('../models/Model');

var data = new Humidity(
    {
        value: "9",
        datetime: "2018/10",
    }
)
data.save();