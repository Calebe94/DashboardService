var express = require('express')

var api_routes = express.Router()

var { User, Setpoints, Humidity, Temperature } = require('../models/Model');

api_routes.route('/auth').post(function(req, res){
    User.findOne({name: req.body.username}).exec(function(error, user){
        if(error) res.send( { auth: false } );
        else
        {
            try {
                if(user.password == req.body.password)
                {
                    res.send( { auth: true } );
                }
                else
                {
                    res.send( { auth: false} );
                }
            } catch (err) {
                res.send( { auth: "ERROR" } );
            }
        }
    });
});

api_routes.route('/add/:type').post(function(req, res){
    var timestamp = new Date();
    var response = "";
    if( req.params.type == "temperature")
    {
        try 
        {
            var data = new Temperature({ value: req.body.measure, datetime: timestamp });
            data.save();
            response = { measure: "OK" };
        } 
        catch (error) 
        {
            response = { measure: "DATABASE ERROR" };
        }
    }
    else if( req.params.type == "humidity")
    {
        try 
        {
            var data = new Humidity( { value: req.body.measure, datetime: timestamp } )
            data.save();
            response = { measure: "OK" };
        }
        catch (error) 
        {
            response = { measure: "DATABASE ERROR" };
        }
    }
    else if( req.params.type == "measure")
    {
        try 
        {
            var humidity = new Humidity( { value: req.body.humidity, datetime: timestamp } )
            humidity.save();
            var temperature = new Temperature({ value: req.body.temperature, datetime: timestamp });
            temperature.save();
            response = { measure: "OK" };
        } 
        catch (error) 
        {
            response = { measure: "DATABASE ERROR" };
        }
    }
    else
    {
        response = { measure: "BODY ERROR" };
    }
    
    res.send(response);
});

api_routes.route('/setpoints/set/:type').post(function(req, res){
    var response = "";
    if(req.params.type == "temperature")
    {
        Setpoints.findOneAndUpdate( {type: "temperature"},  { minimal_value: req.body.minimal_value, maximum_value: req.body.maximum_value } , { upsert: true }, function(err, item){
            if(err)
            {
                response = { setpoint: "DATABASE ERROR" };
                res.send(response);
            }
            else 
            {
                response = { setpoint: "OK" };
                res.send(response);
            }
        });
    }
    else if(req.params.type == "humidity")
    {
        Setpoints.findOneAndUpdate( {type: "humidity"},  { minimal_value: req.body.minimal_value, maximum_value: req.body.maximum_value } , { upsert: true }, function(err, item){
            if(err)
            {
                response = { setpoint: "DATABASE ERROR" };
                res.send(response);
            }
            else 
            {
                response = { setpoint: "OK" };
                res.send(response);
            }
        });
    }
    else
    {
        response = { setpoint: "BODY ERROR" };
        res.send(response);
    }
    
});

api_routes.route('/setpoints/get/:type').get(function(req, res){
    var response = "";
    Setpoints.findOne( { type: ""+req.params.type }, function(err, item){
        if(err)
        {
            res.send({ setpoint: "DATABASE ERROR" });
        }
        else
        {
            res.send(item);
        }
    });
});

api_routes.route('/measure/last/:type').get(function(req, res){
    if(req.params.type == "temperature")
    {
        Temperature.findOne({}, {}, { sort: { 'datetime' : -1 } }, function(err, item) {
            if(err)
            {
                res.send( { measure: "DATABASE ERROR" } );
            }
            else
            {
                res.send({ measure: item });
            }
        });
    }
    else if(req.params.type == "humidity")
    {
        // -1 is the oldest and 1 is the newest.
        // Reference: https://stackoverflow.com/questions/12467102/how-to-get-the-latest-and-oldest-record-in-mongoose-js-or-just-the-timespan-bet
        Humidity.findOne({}, {}, { sort: { 'datetime' : -1 } }, function(err, item) {
            if(err)
            {
                res.send( { measure: "DATABASE ERROR" } );
            }
            else
            {
                res.send({ measure: item });
            }
        });
    }
    else
    {
        res.send( { measure: "BODY ERROR" } );
    }
});

api_routes.route('/measure/today/:type').get(function(req, res){
    var today = new Date();
    var start = today.setHours(00,00,01);
    var end = today.setHours(23,59, 59);

    if( req.params.type == "temperature" )
    {
        Temperature.find({ datetime: {$gte: start, $lt: end}}, function (err, docs) { 
            console.log(docs) ;
        });
        res.send({ today: "OK" });
    }
    else if( req.params.type == "humidity" )
    {
        Humidity.find({ datetime: {$gte: start, $lt: end}}, function (err, docs) { console.log(docs) } );
        res.send({ today: "OK" });
    }
    else
    {
        res.send( { today: "FALSE" } );
    }
});

module.exports = api_routes;