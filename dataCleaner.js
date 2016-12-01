'use strict';

var fileWriter = require('./fileWriter.js');
var counter = require('./counter.js');

function dataCleaner(accelerometerAxisReadings) {

    var windowSize = 11;  // THIS SIZE CAN BE CHANGED TO VARY TO RESULT OF FILTERING

    var lowerBound = 0;   //first element to be included in the avergae calculation. This will be incremented
    var upperBound = windowSize - 1; // last  element to be included in the avergae calculation. This will be incremented
    var windowCenter = (windowSize + 1) / 2;

    var totalReadings = accelerometerAxisReadings.length;
    var redundantValues = windowCenter - 1;
    var cleanReadings = []; //array for storing new values;


    console.log('STEP-2: Data Cleaning Started\n');

    console.log('Window Size :' + windowSize);
    console.log('Total Sanitized Input Readings:' + totalReadings + '\n');

    for (var i = redundantValues; i < totalReadings - redundantValues; i++) { // loop for fixing the lower bound and upper bound.
        var sum = 0;
        for (var j = lowerBound; j <= upperBound; j++) {// loop iterates over the accelerometer values that needs to be cleaned.
            sum = sum + accelerometerAxisReadings[j];
        }
        lowerBound++;
        upperBound++;
        var average = sum / windowSize;
        cleanReadings[i] = average;
    }

    // stores the Starting redundant values from the original array to the new array
    for (var i = 0; i < redundantValues; i++) {
        cleanReadings[i] = accelerometerAxisReadings[i];
    }
    ;

    // stores the End redundant values from the original array to the new array
    for (var i = totalReadings - redundantValues; i <= totalReadings; i++) {
        cleanReadings[i] = accelerometerAxisReadings[i];
    }
    ;

    //fileWriter(cleanReadings); // for debugging. Writes cleaned readings to a file for graphical analysis
    counter(cleanReadings);
};
module.exports = dataCleaner;