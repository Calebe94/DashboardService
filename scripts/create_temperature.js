'use strict';
const config = require('../config/Config');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { User, Setpoints, Humidity, Temperature } = require('../models/Model');

var data = new Temperature(
    {
        value: "8",
        datetime: "2018/10",
    }
)
data.save();