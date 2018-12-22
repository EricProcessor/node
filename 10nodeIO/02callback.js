var fs = require("fs");
function getMime(callback){
    // console.log(1);
    fs.readFile('mime.json',(err,data)=>{
        callback(data);
    })
    // console.log(3);
}
getMime((result)=>{
    console.log(result.toString())
})