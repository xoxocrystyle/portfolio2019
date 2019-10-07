const http = require('http');
const fs = require('fs');
const PORT = 3000;


const server = http.createServer((req, res) => {
    console.log('request was made' + req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('aaaaayyyy dis is a test')
});

server.listen(PORT);
console.log('meet me @ port: ', PORT)