/**
 * Created by Administrator on 2016/12/18.
 */
var revise=require("../modules/revise")
module.exports=function(req,res){
    var username=req.query.user;
    var age=req.query.age;
revise(username,age,req,res)

}