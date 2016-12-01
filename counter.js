'use strict';

var steps = 0;
var threshold = 3.3;
var resetValue = 1.5;
var flag = true;

module.exports = function counter(sanitizedData) {
    console.log('STEP-3: Step Counting started');

    sanitizedData.forEach(function (element) {
        if (element >= threshold && flag) {
            steps = steps + 1;
            flag = false;
        }
        if (element < resetValue && flag == false) {
            flag = true;
        }
    });
    console.log('\n\n\n\n\n\n\nTOTAL NUMBER OF STEPS DETECTED = ' + steps);
    console.log('\nEND OF EXECUTION...');
};