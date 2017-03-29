/**
 * Created by Administrator on 2016/12/17.
 */

var  http=require("http")
var cluster=require("cluster")
var childer=require("child_process")
if(cluster.isMaster){
    http.createServer(function(req,res){
        var fork=cluster.fork()
        fork.send({name:"qwe"})
    }).listen(8080)
}else{
    process.on("message",function(data){
        console.log(data.send)
    })
}