/**
 * Created by Administrator on 2016/12/12.
 */
var express = require('express');
var app = express();

var u=require("./user.js")
module.exports=function(app){
    app.get("/a",function(req,res){
        res.render("index",{tittle:"wwwww",head:"qqqqq"})
    })
    app.get("/user",function(req,res){
        res.render("user")
    })
    app.get("/absout",function(req,res){
        res.render("absout")
    })
    app.get("/u",u)
}

