var express = require("express");
var app = express();
app.use(express.static('public'));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.send("ejs演示")
});
app.get("/news",function(req,res){
    var arr = ['因算得上是的士速递','是打发斯蒂芬','程序从是法人'];
    res.render('news',{
        list:arr
    })
})

app.listen("3000","127.0.0.1");