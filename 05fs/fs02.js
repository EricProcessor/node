var fs = require("fs");

// fs.stat("upload",function(err,stats){
//     if(err){
//         // console.log(err)
//         fs.mkdir("upload",function(err1){
//             if(err1){
//                 console.log(err1)
//                 return false;
//             }else{
//                 console.log("创建upload目录成功")
//             }
//         })
//     }else{
//         console.log("目录已经存在");
//         console.log(stats.isDirectory());
//     }
// })
var filesArr = [];
fs.readdir("html",function (err,files) {
    if(err){
        console.log(err)
    }else{
        console.log(files);
        (function getFile(i){
            if(i == files.length){
                console.log(filesArr);
                return;
            }else{
                fs.stat('html/'+files[i],function(error,stats){
                    // console.log(files[i])
                    if(stats.isDirectory()){
                        filesArr.push(files[i])
                    }
                    getFile(i+1)
                })
            }
        })(0)
        
    }
}) 