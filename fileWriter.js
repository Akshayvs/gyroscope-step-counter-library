'use strict';

var fs = require('fs');

function fileWriter(finalArr) {

    var arrayString = finalArr.toString().split(',').join('\n');;


    fs.writeFile('./testData/result.txt', arrayString , function(err) {
        if (err) console.log('ERROR GENERATING FILE >result.txt' + err);

        else {
            console.log('FILE SUCCESSFULLY GENERATED \n');
            console.log('PATH TO FILE : /projectRootFolder/testData/result.txt');
        }
    });
}

module.exports = fileWriter;
