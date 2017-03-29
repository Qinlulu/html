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
    connection.query("select * from yanzheng",function(err,datas){
        console.log(datas)

    })
connection.end()