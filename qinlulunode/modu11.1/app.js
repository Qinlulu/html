/**
 * Created by Administrator on 2016/12/9 0009.
 */

var express=require("express")
var app=express()
var index1=require("./routes/index1")
var index2=require("./routes/index2")

app.get("/",index1)
app.get("/",index2)
app.listen(1111)