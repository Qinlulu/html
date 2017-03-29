/**
 * Created by Administrator on 2016/12/6 0006.
 */
var childprocess=require("child_process")
childprocess.spawn("node",["server.js"])

/*
childprocess.exec("qa.js",function(err,data){
    console.log(data)
})*/
