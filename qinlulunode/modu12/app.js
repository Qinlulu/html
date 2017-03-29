/**
 * Created by Administrator on 2016/12/10.
 */
//打印hello word

var express=require("express");

var app=express();

app.get("/",function(req,res){
    res.send("hello word")
})
app.listen(8888)



//创建新目录