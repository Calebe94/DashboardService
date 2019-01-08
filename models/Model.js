var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Define collection and schema for candidatos Item
var load = new mongoose.Schema(
    {
        type: { type: String }, // AC or DC,
        number: { type: String},
        status: { type: String },
        parameter: { type: String }, // Time, Sensor Value or deactivated,
        initial: { type: String },
        end: { type: String}
    }
);

var Load = mongoose.model('load', load);

module.exports = { Load };