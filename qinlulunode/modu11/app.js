/**
 * Created by Administrator on 2016/12/8 0008.
 */
//同步的
//console.log("one")
var sync=function(){
   // console.log("123")
    throw new Error("this is err")
}
try{
    sync()
}catch(err){
    console.log("this is err :"+err)
}
//console.log("two")


//异步的
var childprocess=require("child_process")
var async=setTimeout(function(){
    throw new Error("thi s ")
})

process.on("uncaughtException",function(err){
    console.log("this is err :"+err)
})
//标准输出
process.stdout.write("123\n")
//标准输入
process.stdin.on("data",function(data){
    console.log(data.toString())
   process.stdin.emit("end")
})
//检测输入完成  退出
process.stdin.on("end",function(){
    console.log("down")
})

//childprocess.spawn("node",["server.js"])

