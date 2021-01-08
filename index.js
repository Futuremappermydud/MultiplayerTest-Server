var express = require("express");
var fs = require("fs");
var app = express();

var port = process.env.PORT || 7777
console.log("Started");
app.listen(port, function() {
 console.log("running on " + port);
})
var http = require('http');


var options = {
  host: 'api.ipify.org',
  path: '/?format=plain'
};

callback = function(response) {
  var str = '';

  //another chunk of data has been received, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been received, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

http.request(options, callback).end();