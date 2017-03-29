/**
 * Created by Administrator on 2016/12/13.
 */

var mysql=require("mysql");

var connection=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"111111",
    database:"1501d"
});

module.exports=function(username,password,callback){
    var quewry ="select * from yanzheng  where user='" + username +"' and password='" + password + "'";
    connection.query(quewry,function(err,datas){
        callback(err,datas)

    })
}
