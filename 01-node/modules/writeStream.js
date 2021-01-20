const fs = require('fs');

const writeStream = fs.createWriteStream('../data.txt');

for (let i = 0; i < 500; i++) {
    writeStream.write('我是一段很长的话\n')
}
writeStream.end();

writeStream.on('finish', () => {
    console.log('finished');
})

console.log('hhh');

setTimeout(() => {
    console.log('dddd');
}, 100)