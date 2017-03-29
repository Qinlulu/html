/**
 * Created by Administrator on 2016/12/3 0003.
 */
var fs=require("fs")
var path=require("path")
var dir="../../qinlulu"

function writes(dir,callback){

fs.readdirSync(dir).forEach(function(file){
    var filename=path.join(dir,file)
console.log(filename)
    if(fs.statSync(filename).isDirectory()){
        console.log(filename)
        writes(filename,callback)
    }else{
        console.log(filename)
    }
})
}
writes(dir,function(filename){
    console.log(filename)
})