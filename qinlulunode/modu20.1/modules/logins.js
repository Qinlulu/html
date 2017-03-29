/**
 * Created by Administrator on 2016/12/17.
 */

var mysql=require("mysql");

var option={
    host:"127.0.0.1",
    user:"root",
    password:"111111",
    database:"cm1501d"
}

var connection=mysql.createConnection(option)
module.exports=function(req,res){
    connection.query("select * from cm1501d",function(err,datas){
    	res.render("forms",{data:datas})
    })
}
