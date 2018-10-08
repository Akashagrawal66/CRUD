var express = require('express');
var app = express();

var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/getData', function(req, res) {
    fs.readFile('./books.json', function(err, data) {
        if(err) {
            return console.error(err);
        }
        var jsonObj=JSON.parse(data);
        console.log(jsonObj);
        res.json(jsonObj);
    });
});
let server = app.listen(8083,'0.0.0.0',function() {
	let host = server.address().address
	let port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
});