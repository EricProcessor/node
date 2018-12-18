let http = require('http');

http.createServer((req,res)=>{
    // res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    res.write("你好Node");

    res.end();
}).listen(1916);
console.log("服务启动成功.....")