/**
 * Created by Administrator on 2016/12/10.
 */
var express=require("express")
var route=express.Router();

route.get("/",function(reg,res){
    res.send("thaais")
})

module.exports=route
