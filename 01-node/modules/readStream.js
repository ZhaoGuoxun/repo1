const fs = require('fs');

let readStream = fs.createReadStream('../a.txt');


let str = '', count = 0;
readStream.on('data', data => {
    str += data;
    count++;
})

readStream.on('end', () => {
    console.log(str);
    
    console.log(count);
})

readStream.on('error', err => {
    console.log(err);
})