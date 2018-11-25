var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Define collection and schema for candidatos Item
var user = new mongoose.Schema(
    {
        name: { type: String },
        password: { type: String },
        picture: { type: String },
    }
);

var measure = new mongoose.Schema(
    {
        value: { type: String },
        datetime: { type: Date },
    }
);

var setpoint = new mongoose.Schema(
    {
        type: { type: String },
        minimal_value: { type: String },
        maximum_value: { type: String }
    }
);

var User = mongoose.model('users', user);

// var Temperature_setPoint = mongoose.model('temperature_setpoints', setpoint);
// var Humidity_setPoint = mongoose.model('humidity_setpoints', setpoint );
var Humidity = mongoose.model('humidities', measure);
var Temperature = mongoose.model('temperatures', measure);
var Setpoints = mongoose.model('setpoints', setpoint);

module.exports = { User, Setpoints, Humidity, Temperature };

// var Vereadores = mongoose.model('vereadores', candidato);
// var Prefeitos  = mongoose.model('prefeitos', candidato);
// var Eleitores  = mongoose.model('eleitores', eleitor);

// module.exports = {Vereadores, Prefeitos, Eleitores};