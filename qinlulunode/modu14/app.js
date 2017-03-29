/**
 * Created by Administrator on 2016/12/12.
 */

var express=require("express")
var app=express()

//var ins=require("./routes/index")

app.get("/",function(req,res){
    res.render("index",{tittle:"hello word"})
})

app.listen(8888)
