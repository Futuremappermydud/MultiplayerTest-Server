var express = require("express");
var fs = require("fs");
var app = express();

var port = process.env.PORT || 7777
console.log("Started");
app.listen(port, function() {
 console.log("running on " + port);
})