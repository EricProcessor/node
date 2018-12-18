let http = require('http');
let url = require('url');

http.createServer((req,res)=>{
    // console.log(req.url)
    // var query = url.parse(req.url,true);
    // console.log(query);
    
    // res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    res.writeHead(200,{'Content-Type':'text/plain;charset=utf-8'});

    if(req.url !='/favicon.ico'){
        // console.log(req.url);
        let result = url.parse(req.url,true);
        console.log('aid='+result.query.aid);
        console.log('cid='+result.query.cid);
    }

    res.write("你好Node....1111");

    res.end();
}).listen(1916);
console.log("服务启动成功.....")