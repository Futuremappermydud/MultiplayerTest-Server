var express = require("express");
var server = require("http").Server(app);
var io = require("socket.io")(server, {});
var app = express();

var port = process.env.PORT || 7777

app.use(express.static(__dirname));

app.get("/", function(req, res) {
 res.render("index");
})

app.listen(port, function() {
 console.log("running on " + port);
})

io.sockets.on("connection", function(socket)
{
    console.log("Connected");
});
