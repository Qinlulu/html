/**
 * Created by Administrator on 2016/12/15.
 */

var express=require("express")
var app=express()


app.get("/",function(req,res){
    var data={
        name:"qin",
        age:"22",
        job:"web"
    }
    res.json(JSON.stringify(data))
})

app.listen(8080,function(){
    console.log("listen 8080")
})
