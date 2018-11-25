'use strict';
const config = require('../config/Config');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User, Temperature_setPoint, Humidity_setPoint, Humidity, Temperature } = require('../models/Model');

var data = new Humidity_setPoint(
    {
        minimal_value: "10",
        maximum_value: "30"
    }
)
data.save();