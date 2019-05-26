var fs = require('fs');
var input = fs.readFileSync('input.txt', 'utf8').toString().split('\r\n');
var patterns = fs.readFileSync('patterns.txt', 'utf8').toString().split('\r\n');

function findExactMatch(value) {
    for (var i = 0; i < input.length; i++) {
        if (input[i] === value) {
            return input[i];
        }
    }
}

function findMatch(value) {
    for (var i = 0; i < input.length; i++) {  
        if (input[i].includes(value)) {
            return (input[i]);
        }; 
    }
}



for (var i = 0; i < patterns.length; i++) {
    var line = patterns[i];

    var exactMatch = findExactMatch(line);
    if (exactMatch) {
        console.log("Mode 1: " + exactMatch); 
    }

    var match = findMatch(line);
    if (match) {
        console.log("Mode 2: " + match); 
    }

}