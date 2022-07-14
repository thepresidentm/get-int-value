const fs = require('fs');
const stream = fs.createWriteStream('int-classic.js');

stream.write('function getValue(i){' + '\n');
stream.write(`if(i == 1){console.log("Your number is ${i}")}` + '\n');

for(var i = 0; i < 1686; i++){
    stream.write(`else if(i == ${i}){console.log("Your number is ${i}")}` + '\n');
}

stream.write('else{console.log("Your number is not supported")}')
stream.write('}' + '\n');
stream.write('module.exports = { getValue }')