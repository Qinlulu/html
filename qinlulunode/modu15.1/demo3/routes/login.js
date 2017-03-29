/**
 * Created by Administrator on 2016/12/13.
 */
var express=require("express")
var router=express.Router()
var a=require("../modules/login")
router.post("/login",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
   // console.log(password)
    a(username,password,res)
})
module.exports=router
