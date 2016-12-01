'use strict';

var fs = require('fs');
var path = require('path');
var absolutePath = process.argv[2];
var dataCleaner = require('./dataCleaner.js');

fs.readFile(absolutePath, function (err, file) {
    if (err) {
        console.log('ABORT! - error in reading file from the path given : ' + err);
    } else {
        var timeArray = [];
        var xAxisValues = [];
        var yAxisValues = [];
        var zAxisValues = [];

        var data = file.toString();
        var rowsofData = data.split('\n');
        rowsofData.shift();
        rowsofData.pop();

        rowsofData.forEach(function (element) {
            var element = element.split(',').map(Number);
            // storing the values for X, y and Z axis along with the time.
            timeArray.push(element[0]);
            xAxisValues.push(element[1]);
            yAxisValues.push(element[2]);
            zAxisValues.push(element[3]);
        });
        console.log("\nSTEP1: Input Parsed Successfully\n");

// array X is selected after manually  plotting all 3 axis readings on a graph and observing the differences.

        dataCleaner(xAxisValues);     // call is made to DataCleaner for filtering the data
    }
});
