// Create HTTP server
const http = require("http");
const {menProducts,womenProducts} = require("./data")
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to Men & Women Dummy Data');
    } else if (req.url === '/men') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(menProducts.slice(0, 10)));
    } else if (req.url === '/women') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(womenProducts.slice(0, 10)));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});