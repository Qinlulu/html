/**
 * Created by Administrator on 2016/12/8 0008.
 */
//守护子进程
//var cluster=require("cluster")

/*

 var count=1
 if(cluster.isMaster){
 cluster.fork()
 cluster.on("exit",function(){
 if(count>2) return ;
 cluster.fork()
 count++
 })
 }else if(cluster.isWorker){
 var http=require("http")
 http.createServer(function(req,res){
 res.end("this is qinlulu")
 }).listen(8080,function(){
 console.log("8080")
 })
 aa()
 }
 */


//输入输出
/*

 var childprocess=require("child_process")

 process.stdout.write("122\n")
 process.stderr.write("404\n")

 process.stdin.on("data",function(data){
 console.log(data.toString())
 process.stdin.emit("end")
 })


 process.stdin.on("end",function(){
 console.log("down")
 })
 */

//for循环
/*var arr=["one","two","three"]

 for(var i=0;i<arr.length;i++){
 (function(i){
 setTimeout(function(){
 console.log(arr[i])
 })
 }
 )(i)
 }
 console.log("wu")
 */

//http 创建服务 URL操作 querystring

var http=require("http")
var url=require("url")
var Querystring=require("querystring")

http.createServer(function(req,res){


   var urls=req.url
    var href=url.parse(urls).query
    var hrefs=(url.parse(urls))


    console.log(urls)
   console.log(href)
   console.log(hrefs)


console.log( Querystring.parse("ssss=DSFDS"))
console.log( Querystring.stringify({
    "name":"qinlulu",
    "age":"22"
}))


    res.end("this is qinlulu")
}).listen(8080,function(){
    console.log("8080")
})
