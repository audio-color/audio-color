'use strict';

const temporal = require('temporal');
const five = require('johnny-five'); 
const raspi = require('raspi-io').RaspiIO; 



//////////////////////////////////////////////////

const rgbOne = function(duration) {
  
  const board = new five.Board({ 
    io: new raspi(), 
  });
  
  
  board.on('ready', function() {
    console.log(duration);
    // Initialize the RGB LED
    var led = new five.Led.RGB([3, 0, 5]);
    
    led.color("B30077");
    temporal.queue([{
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 1500,
      task: function() {
        led.color("220066");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(100);
      }
    }, {
      wait: 1500,
      task: function() {
        led.color("80002A");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 1500,
      task: function() {
        led.color("40004D");
      }
    
    }, ]);
  });  
}

///////////////////////////////////////////

const rgbTwo = function(duration) {
  
  const board = new five.Board({ 
    io: new raspi(), 
  });
  
  
  board.on('ready', function() {
    console.log(duration);
    // Initialize the RGB LED
    var led = new five.Led.RGB([3,0,5]);
    
    led.color("009919");
    temporal.queue([{
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("00B3B3");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(100);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("00264D");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("00E626");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("4DE1FF");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("006600");
      }
    }, {
      wait: 1500,
      task: function() {
        led.intensity(80);
      }
    }, ]);
    
    
    // var rainbow = ["009919","00B3B3","00264D","00E626","4DE1FF","006600"]
    
  });  
}


////////////////////////////////////////////////

const rgbThree = function(duration) {
  
  const board = new five.Board({ 
    io: new raspi(), 
  });
  
  board.on('ready', function() {
    console.log(duration);

    // Initialize the RGB LED
    var led = new five.Led.RGB([3, 0, 5]);
    //var rainbow = ["CC0000","CCCC00","993300","804000"]
    led.color("CC0000");
    temporal.queue([{
      wait: 1000,
      task: function() {
        led.intensity(80);
      }
    }, {
      wait: 500,
      task: function() {
        led.color("993300");
      }
    }, {
      wait: 1000,
      task: function() {
        led.intensity(100);
      }
    }, {
      wait: 500,
      task: function() {
        led.color("CCCC00");
      }
    }, {
      wait: 1000,
      task: function() {
        led.intensity(50);
      }
    }, {
      wait: 500,
      task: function() {
        led.color("804000");
      }
    }, {
      wait: 1000,
      task: function() {
        led.intensity(100);
      }
    }, {
      wait: 800,
      task: function() {
        led.color("CC0000");
      }
    }, {
      wait: 1000,
      task: function() {
        led.intensity(90);
      }
    }, {
      wait: 500,
      task: function() {
        led.color("993300");
      }
    }, {
      wait: 1000,
      task: function() {
        led.intensity(80);
      }
    }, ]);
    
    
    
  });  
}



module.exports = {rgbOne, rgbTwo, rgbThree, temporal, five, raspi};
