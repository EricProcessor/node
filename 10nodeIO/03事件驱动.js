var events = require("events");

var EventEmitter = new events.EventEmitter();
EventEmitter.on("hear2",function(data){
    console.log("这是hear2");
    console.log(data);
})
EventEmitter.on("hear",function(data){
    console.log(data);
    EventEmitter.emit("hear2","this is for hear2");
})
setTimeout(function(){
    console.log("开始广播");
    EventEmitter.emit("hear","发送的数据");

},1000);