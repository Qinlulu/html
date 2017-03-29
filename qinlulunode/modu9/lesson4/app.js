/**
 * Created by Administrator on 2016/12/7 0007.
 */
var childprocess=require("child_process")


//process.stdout.write("45456465")
process.stdin.on("data",function(data){
    if(data){
        console.log(data.toString())
        //console.log("this is stdin")
        //process.exit()
        process.stdin.emit("end")
    }
})
