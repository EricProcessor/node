var http = require('http');
var sd = require('silly-datetime');

var app = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
    res.write("你好..."+d);
    console.log()
    res.end();
}).listen(8002,"127.0.0.1");