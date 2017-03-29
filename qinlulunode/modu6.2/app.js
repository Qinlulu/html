/**
 * Created by Administrator on 2016/12/1 0001.
 */
var  fs=require("fs");
fs.readFile('./readme.text', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
})