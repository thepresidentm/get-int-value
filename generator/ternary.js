const fs = require('fs');
const stream = fs.createWriteStream('int-ternary.js');

stream.write('function getValue(i){' + '\n');

for(var i = 0; i < 2715; i++){
    stream.write(`i == ${i} ? console.log("Your number is ${i}") :\n`);
}

stream.write(`console.log("The number is not supported")`);
stream.write('}' + '\n');
stream.write('module.exports = { getValue }')