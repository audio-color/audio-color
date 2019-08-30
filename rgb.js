'use strict';

const temporal = require('temporal');
const five = require('johnny-five'); 
const Raspi = require('raspi-io').RaspiIO; 

//////////////////////////////////////////////////

const board = new five.Board({ 
  io: new Raspi(), 
});

// Initialize the RGB LED
let led = new five.Led.RGB([3, 0, 5]);

const rgbOne = function(duration) {

  led.off();
  
  board.on('ready', function() {
    console.log(duration);

    let i = 0;
    let j = 0;
    let rainbow = ["B30077", "220066","80002A","40004D"]
    let inten = [30, 60, 80, 100, 80, 70, 60, 100];
    //0441fe,030089
    this.loop(1500, function() {
      
      led.color(rainbow[i++])
      
        led.intensity(inten[j++]);
        console.log(i,j)
      if (i === rainbow.length) {
        i = 0;
      }
      if (j === inten.length){
        j = 0;
      }
      
    })
  });  
}

///////////////////////////////////////////

const rgbTwo = function(duration) {
  
  board.on('ready', function() {
    console.log(duration);

    led.off();
    
    let i = 0;
    let j = 0;
    let rainbow = ["009919","00B3B3","00264D","00E626","4DE1FF","006600"]//,"23147c","666699", "cc00ff", "130613", "4da6ff", "000099"];
    let inten = [50, 70, 90, 80, 90, 100,80, 60,100];
    //fe0805,864405,== 008005,00D5FF
    this.loop(900, function() {
      
      led.color(rainbow[i++])
      
        led.intensity(inten[j++]);
        console.log(i,j)
      
      if (i === rainbow.length) {
        i = 0;
      }
      if (j === inten.length){
        j = 0;
      }
      
    })
  });  
}


////////////////////////////////////////////////

const rgbThree = function(duration) {
  
  board.on('ready', function() {
    console.log(duration);

    led.off();
    
    let i = 0;
    let j = 0;
    let rainbow = ["CC0000","CCCC00","993300","804000"]
    let inten = [50, 60, 70, 80, 90, 100,90, 80 ,70, 60, 50];
    
    this.loop(500, function() {
      
      led.color(rainbow[i++])
        led.intensity(inten[j++]);
        console.log(i,j)
       
      if (i === rainbow.length) {
        i = 0;
      }
      if (j === inten.length){
        j = 0;
      }
       
    })
  });  
}



module.exports = {rgbOne, rgbTwo, rgbThree, temporal, five, raspi};
