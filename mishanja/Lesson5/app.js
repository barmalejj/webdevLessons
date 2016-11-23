const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 8080;
var fs = require('fs');
var obj;


fs.exists("data.json", function(fileok){
    if(fileok)fs.readFile("data.json", function(error, data) {
        console.log("Contents: " + data);
        obj = JSON.parse(data);
        console.log(obj.name);
    });
    else console.log("file not found");
});
console.log("Carry on executing");

fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj.name);
});

const server = http.createServer(function(req, res) {
    console.log( req.method, req.url);

    var parcedUrl = url.parse(req.url, true);
    console.log(parcedUrl);
    if (parcedUrl.pathname === '/data/'){
        res.statusCode = 200;

        console.log("Well...");
        res.end(
        '<title>WebApp</title>' +
            '<body><h1>' + obj.message + '\n' + obj.count +'</h1></body>'
        );
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    }
});

server.listen(port, hostname); /*, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */