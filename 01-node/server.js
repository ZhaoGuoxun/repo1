const http = require('http');

http.createServer((req, res) => {

    console.log(req.url);

    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" })

    res.write('hhh');

    res.end('这里是 node js');

}).listen(3000);