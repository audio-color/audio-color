'use strict';

const temporal = require('temporal');
const five = require('johnny-five'); 
const raspi = require('raspi-io').RaspiIO; 

//////////////////////////////////////////////////

const rgbThree = function(duration) {
  const board = new five.Board({ 
    io: new raspi(), 
  });
  board.on('ready', function() {
    console.log(duration);
    // Initialize the RGB LED
    var led = new five.Led.RGB([3, 0, 5]);
    
    var index = 0;
    var rainbow = ["3366FF", "9966FF", "666699", "cc00ff", "130613", "4da6ff", "000099"];
    this.loop(1000, function() {
      led.color(rainbow[index++]);
      if (index === rainbow.length) {
        index = 0;
        //led.strobe(100);
        led.intensity(30);
      }
    })
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
    var led = new five.Led.RGB([3, 0, 5]);
    
    var i = 0;
    var j = 0;
    var rainbow = ["b316b6","23147c","666699", "cc00ff", "130613", "4da6ff", "000099"];
    var inten = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100,90, 80 ,70, 60, 50, 40 ,30, 20];
    
    this.loop(0, function() {
      
      for (i =0;i<rainbow.length;i++){
        for (j=0;j<inten.length;j++){
          console.log(i, j);
          led.color(rainbow[i])
            led.intensity(inten[j])
        }
      }
      
      // led.color(rainbow[i++])
      //   led.intensity(inten[j++]);
      
      // if (i === rainbow.length) {
      //   i = 0;
      // }
      // if (j === inten.length){
      //   j = 0;
      // }
      


    })
  });  
}


////////////////////////////////////////////////

const rgbOne = function(duration) {
  const board = new five.Board({ 
    io: new raspi(),  
  });
  board.on('ready', function() {
    console.log(duration);
    // Initialize the RGB LED
    var led = new five.Led.RGB([3, 0, 5]);

    
    this.loop(100,function(){
    led.color("cc00ff");
    temporal.queue([{
      // After 3 seconds, dim to 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(90);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(80);
        //led.color("99e600");
      }
    },{
      wait: 10000,
      task: function() {
        led.intensity(70);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(60);
        //led.color("99e600");
      }
    },{
      // Another 3 seconds, go full intensity blue
      wait: 10000,
      task: function() {
        led.intensity(50);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(40);
        //led.color("99e600");
      }
    },{
      wait: 10000,
      task: function() {
        led.intensity(30);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(20);
        //led.color("99e600");
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(10);
        //led.color("99e600");
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(0);
        //led.color("99e600");
      }
    },{
      wait: 10000,
      task: function() {
        led.intensity(10);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(20);
        led.color("3333cc");
      }
    },{
      wait: 10000,
      task: function() {
        led.intensity(30);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(40);
        //led.color("99e600");
      }
    },{
      // Another 3 seconds, go full intensity blue
      wait: 10000,
      task: function() {
        led.intensity(50);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(60);
        //led.color("99e600");
      }
    },{
      wait: 10000,
      task: function() {
        led.intensity(70);
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(80);
        //led.color("99e600");
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(90);
        //led.color("99e600");
      }
    },{
      // 3 secs then turn blue, still 30% intensity
      wait: 10000,
      task: function() {
        led.intensity(100);
        //led.color("99e600");
      }
    
    },]);
    })
  });
}
rgbTwo();

module.exports = {rgbOne, rgbTwo, rgbThree, temporal, five, raspi};