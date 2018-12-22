var fs = require("fs");
function getMime(){
    console.log(1);
    fs.readFile('mime.json',(err,data)=>{
        console.log(2);
       return data;
    })
    console.log(3);
}
console.log(getMime());