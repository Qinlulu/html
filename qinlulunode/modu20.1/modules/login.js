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

var logins=require("./logins")

var connection=mysql.createConnection(option)
module.exports=function(username,password,req,res){
   // var $query="select * from cm1501d where user='"+username+"'and password='"+password+"'"
var $query="insert into cm1501d (user,password) values ('"+username+"','"+password+"')";

    connection.query($query,function(err,datas){
        if(err) return console.error(err);
        if(datas.affectedRows){
            logins(req,res)
        }
    });
       //connection.query("insert into cm1501d (user,password) values(?,?)",[username,password]);
}
