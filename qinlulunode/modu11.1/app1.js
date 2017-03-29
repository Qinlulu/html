/**
 * Created by Administrator on 2016/12/9.
 */

var express=require("express")

var app=express()

app.get("/",function(req,res){
    res.send("qinlulu")
}).listen(8880,function(){
    console.log("this is 8880")
})