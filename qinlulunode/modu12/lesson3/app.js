/**
 * Created by Administrator on 2016/12/11.
 */

var domain=require("domain")
var childprocess=require("child_process")

var oDomain=domain.create()


function app(){setTimeout(function(){
    console.log("5445")
    all()

    console.log("777")
},0)}

console.log("111")


app()
process.on("uncaughtException",function(){
    console.log("5555")
})

/*oDomain.run(app)

oDomain.on("error",function(err){
    console.log("789")
})*/

