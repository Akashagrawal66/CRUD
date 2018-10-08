var express = require('express');
var app = express();

var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.put('/updateBook/:id', function(req, res) {
    var bookId = req.params.id;
    // console.log(bookId);
    var newData = req.body;
    res.json(newData);
    var jsonObj = [];
    var data = fs.readFileSync('./books.json');
    jsonObj = JSON.parse(data);
    // console.log(jsonObj[9].id);
    for(var i=0; i<jsonObj.length; i++) {
        if(jsonObj[i].id == bookId) {
            jsonObj[i] = newData;
        }
    }
    var finalData = JSON.stringify(jsonObj);
	fs.writeFile('./books.json',finalData, function(err){
		if(err){
			return console.error(err);
		}	
	});
	// res.json(finalData);
});
let server = app.listen(8084,'0.0.0.0',function() {
	let host = server.address().address
	let port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
});