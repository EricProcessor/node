var express = require("express");

var app = new express();

app.get('/',function(req,res){

    res.send("你好express");
})
app.get('/newscontent/:aid',function(req,res){

    console.log(req.params);
    var aid =req.params.aid;
    res.send("newscontent模块"+aid);
})

app.get('/product',function(req,res){
    console.log(req.query);
    res.send("product"+req.query.aid);
})


app.listen(3000,"127.0.0.1");