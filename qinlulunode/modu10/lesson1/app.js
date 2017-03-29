 /**
 * Created by Administrator on 2016/12/7 0007.
 */
var cluster=require("cluster");
var os=require("os");
var childprocess=require("child_process")
//处理器 四核
//console.log(os.cpus().length)

if(cluster.isMaster){
    //console.log("123")
    var work=cluster.fork()

    work.send({"name":"nihao"})

    work.on("message",function(data){
        console.log(data.na)
    })
   // work.send({"nme":"wangyiping"})

}else{
    process.on("message",function(data){
        console.log(data.name)
        process.send({"na":"123"})
       // console.log(data.nme)

    })
}

