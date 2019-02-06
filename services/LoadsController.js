const axios = require('axios');

const clock_relay_dc_1 = require('date-events')();
const clock_relay_dc_2 = require('date-events')();
const clock_relay_dc_3 = require('date-events')();

const clock_relay_ac_1 = require('date-events')();
const clock_relay_ac_2 = require('date-events')();
const clock_relay_ac_3 = require('date-events')();
const clock_relay_ac_4 = require('date-events')();

const gpio = require("gpio");

const Config = require('../config/Config');

var setClockToRelayAC_1 = function(initial, end){
    clock_relay_ac_1.removeAllListeners();
    clock_relay_ac_1.on(initial, function(date){
        console.log("> LIGA a carga 1 AC.");
        relay_ac_1.set(1);
    });

    clock_relay_ac_1.on(end, function(date){
        console.log("> DESLIGA a carga 1 AC.");
        relay_ac_1.set(0);
    });
};

var setClockToRelayAC_2 = function(initial, end){
    clock_relay_ac_2.removeAllListeners();
    clock_relay_ac_2.on(initial, function(date){
        console.log("> LIGA a carga 2 AC.");
        relay_ac_2.set(1);
    });

    clock_relay_ac_2.on(end, function(date){
        console.log("> DESLIGA a carga 2 AC.");
        relay_ac_2.set(0);
    });
};

var setClockToRelayAC_3 = function(initial, end){
    clock_relay_ac_3.removeAllListeners();
    clock_relay_ac_3.on(initial, function(date){
        console.log("> LIGA a carga 3 AC.");
        relay_ac_3.set(1);
    });

    clock_relay_ac_3.on(end, function(date){
        console.log("> DESLIGA a carga 3 AC.");
        relay_ac_3.set(0);
    });
};

var setClockToRelayAC_4 = function(initial, end){
    clock_relay_ac_4.removeAllListeners();
    clock_relay_ac_4.on(initial, function(date){
        console.log("> LIGA a carga 4 AC.");
        relay_ac_4.set(1);
    });

    clock_relay_ac_4.on(end, function(date){
        console.log("> DESLIGA a carga 4 AC.");
        relay_ac_4.set(0);
    });
};

var setClockToRelayDC_1 = function(initial, end){
    clock_relay_dc_1.removeAllListeners();
    clock_relay_dc_1.on(initial, function(date){
        console.log("> LIGA a carga 1 DC.");
        relay_dc_1.set(1);
    });

    clock_relay_dc_1.on(end, function(date){
        console.log("> DESLIGA a carga 1 DC.");
        relay_dc_1.set(0);
    });
};

var setClockToRelayDC_2 = function(initial, end){
    clock_relay_dc_2.removeAllListeners();
    clock_relay_dc_2.on(initial, function(date){
        console.log("> LIGA a carga 2 DC.");
        relay_dc_2.set(1);
    });

    clock_relay_dc_2.on(end, function(date){
        console.log("> DESLIGA a carga 2 DC.");
        relay_dc_2.set(0);
    });
};

var setClockToRelayDC_3 = function(initial, end){
    clock_relay_dc_3.removeAllListeners();
    clock_relay_dc_3.on(initial, function(date){
        console.log("> LIGA a carga 3 DC.");
        relay_dc_3.set(1);
    });

    clock_relay_dc_3.on(end, function(date){
        console.log("> DESLIGA a carga 3 DC.");
        relay_dc_3.set(0);
    });
}

/***********
 * DC LOADS
 **********/
var relay_dc_1 = gpio.export(Config.RELAY_DC_1, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/DC/1/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayDC_1(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    } 
});
var relay_dc_2 = gpio.export(Config.RELAY_DC_2, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/DC/2/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayDC_2(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }  
});
var relay_dc_3 = gpio.export(Config.RELAY_DC_3, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/DC/3/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayDC_3(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }  
});

/***********
 * AC LOADS
 **********/
 
var relay_ac_1 = gpio.export(Config.RELAY_DC_1, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/AC/1/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayAC_1(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    } 
});

var relay_ac_2 = gpio.export(Config.RELAY_DC_2, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/AC/2/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayAC_2(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    } 
});

var relay_ac_3 = gpio.export(Config.RELAY_DC_3, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/AC/3/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayAC_3(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    }
});
var relay_ac_4 = gpio.export(Config.RELAY_DC_4, { 
    direction: gpio.DIRECTION.OUT,
    ready: function(){
        axios.get('http://localhost:3000/api/master/get/AC/4/setpoints')
        .then(function (response) {
            // handle success
            console.log(response.data);
            if(response.data.parameter === "time")
            {
                console.log("Load activated by time");
                setClockToRelayAC_4(response.data.initial, response.data.end);
            }
            else if(response.data.parameter == "value")
            {
                console.log("Load activated by sensor value");
            }
            else
            {
                console.log("Load Disabled");
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
    } 
});


/*
var built_in_led_pin = 102;
var lamp_pin = 149;

var lamp = gpio.export(lamp_pin, {
    direction: gpio.DIRECTION.OUT
});

var built_in_led = gpio.export(built_in_led_pin, {
   direction: gpio.DIRECTION.OUT,
   ready: function() {
       const now = new Date();
       console.log("> Datahora Atual: "+now);
       if(now.getHours() >= 10 || now.getHours() < 20 )
       {
            console.log("> Liga a Lâmpada na Inicializacão!");
            built_in_led.set(1);
            lamp.set(1);    
       }
       else
       {
            console.log("> Desliga a Lâmpada na Inicializacão!");
            built_in_led.set(0);
            lamp.set(0);    
       }
   }
});

clock.on('20:00', function (date) {
    console.log("> Desliga a Lâmada! ");
    built_in_led.set(0);
    lamp.set(0);    
});

clock.on('10:00', function (date) {
    console.log("> Liga a Lâmada! ");
    built_in_led.set(1);
    lamp.set(1);    
});
*/

module.exports =  {
    setClockToRelayAC_1,
    setClockToRelayAC_2,
    setClockToRelayAC_3,
    setClockToRelayAC_4,
    setClockToRelayDC_1,
    setClockToRelayDC_2,
    setClockToRelayDC_3,
};