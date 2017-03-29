/**
 * Created by Administrator on 2016/12/7 0007.
 */

var chilprocess=require("child_process")
var cluster=require("cluster")
var count=1;
if(cluster.isMaster){
    cluster.fork()
    cluster.on("exit",function(){
        if(count>2) return console.log("aaa")
            cluster.fork()
        count++
    })
}else{
   var http=require("http")
    http.createServer(function(req,res){
       // res.end("qinlulu")
    }).listen(8080,function(){
        console.log("listen is 8080")
    })
    app()
}
