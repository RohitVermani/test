var express = require ("express");

var app = express();
var port = process.env.PORT || 3000;

 app.get("/",function(req,res){


res.send("Hello worlddddddddddddddd...43rferfr4r====4532123.");

 })

app.listen(port,function(){

	console.log("connected")
})
