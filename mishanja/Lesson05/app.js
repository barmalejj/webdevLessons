const http = require('http');
const url = require('url');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;


const server = http.createServer((req, res) => {
    console.log( req.method, req.url);

    if (req.url === '/data'){
            res.statusCode = 200;

            fs.readFile('data/index.html', 'utf8', function (err, html) {
                if (err) throw err;

                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(html);
                });
    } else {
        fs.readFile('index.html', function (err, html) {
            if (err) {
                throw err;
            }
        res.statusCode = 200;
        res.end(html);
        });

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});