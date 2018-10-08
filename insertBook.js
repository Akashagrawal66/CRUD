var express = require('express');
var app = express();

var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/postData',function(req,res){
    let newData= req.body;
    console.log(newData);
    res.send({"status": 1});
    var jsonobj = [];
    var data = fs.readFileSync('./books.json');
    var jsonobj = JSON.parse(data);
    console.log(jsonobj);
    var len = jsonobj.length;
    // console.log(len);
    jsonobj[len]=newData;
    // console.log(jsonobj);
    var finalData = JSON.stringify(jsonobj);
    // console.log(finalData);
	fs.writeFile('./books.json',finalData, function(err){
		if(err){
			return console.error(err);
		}	
    });
});
let server = app.listen(8084,'0.0.0.0',function() {
	let host = server.address().address
	let port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
});