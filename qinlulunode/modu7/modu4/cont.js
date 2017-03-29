/**
 * Created by Administrator on 2016/12/2 0002.
 */
const fs=require("fs")
const path=require("path")

var dir="../../module7"
function cont(dir,callback){
fs.readdirSync(dir).forEach(function(file){
    //console.log(file)
    var filename=path.join(dir,file)

    if(fs.statSync(filename).isDirectory()){
       console.log(filename)
        console.log(path.basename(filename))

        cont(filename,callback)
        //console.log("true")
        //cont(filename,callback)
    }else{
        callback(filename)
   }
})
}

cont(dir,function(filename){
   console.log(filename)
    console.log(path.basename(filename))
})
/*fs.readdir(dir,function(err,data){
    console.log(data)
    foreach()
    var dirname=path.join(dir,)
})*/


