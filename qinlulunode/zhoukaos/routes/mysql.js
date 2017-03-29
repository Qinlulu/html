/**
 * Created by Administrator on 2016/12/19.
 */
//var mysql = require("mysql")
var option = {
    host: "127.0.0.1",
    user: "root",
    password: "111111",
    database: "cm1501d"
}

var connect = mysql.createConnection(option)

connect.query("select * from cm1501d", function (err, datas) {
    if (err)  return console.error(err);
    if (datas.length) {
        console.log(datas)
    }

})