var http = require('http');
var config = require("./config.js")
var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    res.write("你好...");
    console.log(config.str);
    res.end();
}).listen(8002,"127.0.0.1");