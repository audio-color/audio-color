'use strict';
const temporal = require('temporal');
const five = require('johnny-five'); 
const raspi = require('raspi-io').RaspiIO; 
const rgb = require('./rgb.js');


const range = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
}

const validateParam = function (num) {
  if (num < 0 || num > 10 || typeof num !== 'number') {
    throw 'invalid parameter';
  }
  else {
    console.log('good value', num)
    return true;
  }
}

const convertMoodToRGB = (valence,duration) => {
  
  validateParam(valence)

  let groupOne = range(0, 4);
  let groupTwo = range(4, 7);
  let groupThree = range(7, 11);

  if (groupOne.includes(valence)) {
    console.log('in 1');
    
    rgb.rgbOne(duration);
  }
  if (groupTwo.includes(valence)) {
    console.log('in 2');
    
    rgb.rgbTwo(duration);
  }
  if (groupThree.includes(valence)) {
    
    console.log('in 3');
    
    rgb.rgbThree(duration);
  }
};

module.exports = {range, validateParam, convertMoodToRGB};
