const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to My First Node.js Website!</h1>');
});

server.listen(2000, () => {
    console.log('Server running at http://localhost:2000');
});
