const fs = require('fs');
const stream = fs.createWriteStream('new-int-classic.js');

stream.write('function getValue(i){' + '\n');
stream.write(`if(i == 0){console.log("Your number is 0")}` + '\n');

for(var i = 1; i < 1687; i++){
    stream.write(`else if(i == ${i}){console.log("Your number is ${i}")}` + '\n');
}

stream.write('else{console.log("Your number is not supported")}')
stream.write('}' + '\n');
stream.write('module.exports = { getValue }')