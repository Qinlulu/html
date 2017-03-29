/**
 * Created by Administrator on 2016/12/6 0006.
 */
var child=require("child_process");

//process.stdout.write("qwe")
process.stdin.on("data",function(){
    process.stdout.write("data")
})

child.exec("copy a c")