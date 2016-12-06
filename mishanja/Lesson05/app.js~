const http = require('http');
const url = require('url');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 8080;


const server = http.createServer((req, res) => {
    console.log( req.method, req.url);

    var parcedUrl = url.parse(req.url, true);
    console.log(parcedUrl);
    if (parcedUrl.pathname === '/data'){

        fs.readFile('./data.json', 'utf8', function (err, data) {
            if (err) throw err;
            res.statusCode = 200;

            res.setHeader('Content-Type', 'application/json');
        res.end(data);
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