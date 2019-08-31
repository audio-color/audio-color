"use strict";

const rgb = require('./rgb.js');

/**
 * 
 * @param {...number} start 
 * @param {...number} end 
 * creates an array equal to the
 * values between start and end
 */
const range = (start, end) => {
  const length = end - start;
  return Array.from({ length }, (_, i) => start + i);
};

/**
 * 
 * @param {...number} num 
 * checks if num is between 0 and 10
 * throws error if invalid
 * otherwise returns true
 */
const validateParam = function (num) {
  if (num < 0 || num > 10 || typeof num !== 'number') {
    throw 'invalid parameter';
  }
  else {
    console.log('good value', num)
    return true;
  }
};

/**
 * 
 * @param {...number} valence
 * if valence is not a number, throws error
 * returns rgb function according to which
 * group valence falls in 
 */

const convertMoodToRGB = valence => {
  validateParam(valence);

  let groupOne = range(0, 4);
  let groupTwo = range(4, 7);
  let groupThree = range(7, 11);

  if (groupOne.includes(valence)) {
    console.log('group one');
    // rgb.rgbOne()
  }
  if (groupTwo.includes(valence)) {
    console.log('group two');
    // rgb.rgbTwo()
  }
  if (groupThree.includes(valence)) {
    console.log('group three');
    // rgb.rgbThree()
  }
};

module.exports = { range, validateParam, convertMoodToRGB };
