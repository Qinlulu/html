/**
 * Created by Administrator on 2016/12/14.
 */

var express=require("express")
var router=express.Router()
var a=require("../modules/logins")
router.get("/logins",function(req,res){
    //console.log(req.query)
   var username=req.query.username
    var password=req.query.password
   a(username,password,function(err,datas){
       if(err) return console.error(err);
       if(datas.length){
           res.json(datas)
       }else{
           res.json("抱歉  找不到信息")
       }
   })
})
module.exports=router