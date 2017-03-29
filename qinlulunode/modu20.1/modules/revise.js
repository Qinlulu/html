/**
 * Created by Administrator on 2016/12/17.
 */

var mysql=require("mysql");
var express = require("express");
var app = express();
//var los=require("./los");

var option={
    host:"127.0.0.1",
    user:"root",
    password:"111111",
    database:"cm1501d"
}

var connection=mysql.createConnection(option)
module.exports=function(username,age,req,res){

    connection.query("update cm1501d set user='王义平'  where user='王ee平'",function(err,datas){
        connection.query("select * from cm1501d",function(err,datas){
            //res.render("form")
            //console.log("444")
            //console.log(datas)

        })
    })
}
