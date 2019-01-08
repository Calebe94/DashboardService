'use strict';
const config = require('../config/Config');
const fs = require('fs');

var mongoose = require('mongoose');
mongoose.connect(config.DB, { useNewUrlParser: true });

var { Load } = require('../models/Model');

var data = new Load(
    {
        number: "1", // From 0 to ...
        type: "DC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

data = new Load(
    {
        number: "2", // From 0 to ...
        type: "DC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

data = new Load(
    {
        number: "3", // From 0 to ...
        type: "DC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

/* LOADS AC */
data = new Load(
    {
        number: "1", // From 0 to ...
        type: "AC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

data = new Load(
    {
        number: "2", // From 0 to ...
        type: "AC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

data = new Load(
    {
        number: "3", // From 0 to ...
        type: "AC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();

data = new Load(
    {
        number: "4", // From 0 to ...
        type: "AC", // AC or DC,
        status: "false",
        parameter: "disabled", // Time, Sensor Value or deactivated,
        initial: "",
        end: ""
    }
)
data.save();