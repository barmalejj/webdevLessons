var fs = require('fs');

var express = require('express')
var app = express()

app.use(express.static('public'))


app.get('/data', function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) throw err;
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json');
        res.end(data);
    });})

    app.listen(8080)
