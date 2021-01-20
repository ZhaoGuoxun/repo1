const fs = require('fs');

const readStream = fs.createReadStream('./pipe.js');
const writeStream = fs.createWriteStream('../pipe.js');

readStream.pipe(writeStream);