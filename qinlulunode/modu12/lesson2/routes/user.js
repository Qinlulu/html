/**
 * Created by Administrator on 2016/12/10.
 */
/**
 * Created by Administrator on 2016/12/10.
 */
var express=require("express")
var route=express.Router();

route.get("/user",function(reg,res){
    res.send("thaaisuser")
})

module.exports=route
