var express = require("express");

var app = new express();

app.get("/",function(req,res,next){
    console.log("这是路由中间件");
    next();
})
app.get("/",function(req,res){
    console.log("这是路由中间件2222");
    res.send("首页");
})
app.listen(3000,"127.0.0.1");