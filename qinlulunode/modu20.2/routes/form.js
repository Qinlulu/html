/**
 * Created by Administrator on 2016/12/17.
 */
var express=require("express")
var router=express.Router()
var login=require("../modules/login")

router.post("/form",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    //.log(username)
   // console.log(password)
login(username,password,req,res)

})
module.exports=router
