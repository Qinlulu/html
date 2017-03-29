/**
 * Created by Administrator on 2016/12/13.
 */
var express=require("express")
var router=express.Router()

router.get("/form",function(req,res){
    res.render("form")
})
module.exports=router
