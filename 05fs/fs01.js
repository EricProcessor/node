// var fs = require("fs");
// fs.stat("html",(err,stats)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("文件:"+stats.isFile());
//     console.log("目录:"+stats.isDirectory());
// })
var fs = require("fs");
// fs.stat("index.txt",(err,stats)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("文件:"+stats.isFile());
//     console.log("目录:"+stats.isDirectory());
// });

// fs.mkdir("css",(err)=>{
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("创建目录成功");
// })
// fs.writeFile('t.txt',"你好nodejs",function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("写入成功");
// })
// fs.appendFile('t1.txt','这是追加的内容',function(err){
//     if(err){
//         console.log(err);
//         return false;
//     }
//     console.log("追加成功");
// })
fs.readFile('index.txt',function(err,data){
        if(err){
        console.log(err);
        return false;
        }
         console.log(data.toString());
        //  console.log(data);
})