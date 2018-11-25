'use strict';
const config = require('../config/Config');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User, Setpoints, Humidity, Temperature } = require('../models/Model');

var data = new Setpoints(
    {
        type: "temperature",
        minimal_value: "10",
        maximum_value: "30"
    }
);
data.save();

data = new Setpoints(
    {
        type: "humidity",
        minimal_value: "10",
        maximum_value: "30"
    }
);
data.save();