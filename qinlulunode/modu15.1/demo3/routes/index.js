/**
 * Created by Administrator on 2016/12/13.
 */
var express=require("express")
var app=express()

var form=require("./form")
var login=require("./login")
var logins=require("./logins")

module.exports=function(app){
    app.get("/form",form)
    app.post("/login",login)
    app.get("/logins",logins)
}
