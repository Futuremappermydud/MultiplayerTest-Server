var express = require("express");
var app = express();
var server = require("http").Server(app);
 
app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/client/index.html");
});
app.use("/client", express.static(__dirname + "/client"));
 
var port = process.env.PORT || 3000;
server.listen(port);
console.log("Server started. Port = " + port);
 
var io = require("socket.io")(server, {});
var shortid = require('shortid');
 
io.sockets.on("connection", function(socket)
{
    var clientName = shortid.generate();
    console.log("client was connected, name = " + clientName);
 
    socket.on("getMyName", function()
    {
        socket.emit("onGetMyName", { name: clientName });
    });
 
    socket.on("sendMyNameToAllClients", function()
    {
        socket.broadcast.emit("onSendMyNameToAllClients", { name: clientName });
        console.log(clientName);
    });
});
