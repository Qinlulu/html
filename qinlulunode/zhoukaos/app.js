/**
 * Created by Administrator on 2016/12/21.
 */
var fs=require("fs")
var childprocess=require("child_process")
path=require("path")


fs.readdirSync("../zhoukaos").forEach(function(file){
    var filename=path.join(__dirname,file)
    var size=fs.statSync(filename).size
if(fs.statSync(filename).isDirectory)
    console.log(size)
})