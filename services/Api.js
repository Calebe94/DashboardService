var express = require('express')

var api_routes = express.Router()

var { Load } = require('../models/Model');

/**************************************************************************************/
/*************************************** GET ******************************************/
/**************************************************************************************/

api_routes.route('/get/:type/:number/status').get(function(req, res){
    Load.find({type: req.params.type, number: req.params.number}, '-_id -__v -parameter -initial -end').exec(function(error, item){
        if(error)
        {
            res.send(JSON.stringify({ status: "DB Error!" }));
        }
        else
        {
            try 
            {
                res.send(item[0]);
            }
            catch (error)
            {
                res.send(JSON.stringify({ status: "DB Error!" }));
            }
        }
    });
});


api_routes.route('/get/:type/:number/parameter').get(function(req, res){
    Load.find({type: req.params.type, number: req.params.number}, '-_id -__v -status -initial -end').exec(function(error, item){
        if(error)
        {
            res.send(JSON.stringify({ status: "DB Error!" }));
        }
        else
        {
            try 
            {
                res.send(item[0]);
            }
            catch (error)
            {
                res.send(JSON.stringify({ status: "DB Error!" }));
            }
        }
    });
});

api_routes.route('/get/:type/:number/setpoints').get(function(req, res){
    Load.find({type: req.params.type, number: req.params.number}, '-_id -__v').exec(function(error, item){
        if(error)
        {
            res.send(JSON.stringify({ status: "DB Error!" }));
        }
        else
        {
            try 
            {
                res.send(item[0]);
            }
            catch (error)
            {
                res.send(JSON.stringify({ status: "DB Error!" }));
            }
        }
    });
});

api_routes.route('/get/loads').get(function(req, res){
    var response = "";
    Load.find({}, '-_id -__v').exec(function(error, docs){
        if(error)
        {
            res.send(JSON.stringify({ status: "DB Error!" }));
        }
        else
        {
            try 
            {
                res.send(docs);
            }
            catch (error) 
            {
                res.send(JSON.stringify({ status: "DB Error!" }));
            }
        }
    });
});


/**************************************************************************************/
/*************************************** SET ******************************************/
/**************************************************************************************/

api_routes.route('/set/:type/:number/time').post(function(req, res){
    var response = "";
    Load.findOneAndUpdate({type: req.params.type, number: req.params.number}, { parameter: 'time', initial: req.body.initial, end: req.body.end }).exec(function(error, item){
        if(error)
        {
            response = 400;
        }
        else
        {
            response = 200; 
        }
    });
    res.send(response);
});

api_routes.route('/set/:type/:number/value').post(function(req, res){
    var response = "";
    Load.findOneAndUpdate({type: req.params.type, number: req.params.number}, { parameter: 'value', initial: req.body.initial, end: req.body.end }).exec(function(error, item){
        if(error)
        {
            response = 400;
        }
        else
        {
            response = 200; 
        }
    });
    res.send(response);
});

api_routes.route('/set/:type/:number/disable').post(function(req, res){
    var response = "";
    Load.findOneAndUpdate({type: req.params.type, number: req.params.number}, { parameter: 'disabled', initial: "", end: "" }).exec(function(error, item){
        if(error)
        {
            response = 400;
        }
        else
        {
            response = 200; 
        }
    });
    res.send(response);
});

module.exports = api_routes;