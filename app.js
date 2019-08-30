"use strict";
const rgb = require('./rgb.js');

// const range = (start, end) => {
//   const length = end - start;
//   return Array.from({ length }, (_, i) => start + i);
// };

const validateParam = function(num) {
  console.log(num);
  if (num < 0 || num > 10 || typeof num !== "number") {
    console.log("in if");
    return "invalid parameter";
  } else {
    console.log("good value", num);
    return true;
  }
};

const convertMoodToRGB = valence => {
  // if(!validateParam(valence)) { 

  // }

  if(valence < 4) {
    rgb.rgbOne();
  } else if(valance >= 4 && valance < 7) {
    rgb.rgbTwo();
  } else if(valance >= 7) {
    rgb.rgbThree();
  }

  // let groupOne = range(0, 4);
  // let groupTwo = range(4, 7);
  // let groupThree = range(7, 11);

  // if (groupOne.includes(valence)) {
  //   console.log('group one');
  //   rgb.rgbOne()
  // }
  // if (groupTwo.includes(valence)) {
  //   console.log('group two');
  //   rgb.rgbTwo()
  // }
  // if (groupThree.includes(valence)) {
  //   console.log('group three');
  //   rgb.rgbThree()
  // }
};

module.exports = { range, validateParam, convertMoodToRGB };
