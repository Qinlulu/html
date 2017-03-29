/**
 * Created by Administrator on 2016/12/17.
 */
var form=require("./form");
var revise=require("./revise");
module.exports=function(app){
    app.get("/",function(req,res){
        res.render("index")
    })
    app.get("/revises",function(req,res){

        res.render("form")
    })
    app.post("/form",form)
    app.get("/revise",revise)
}