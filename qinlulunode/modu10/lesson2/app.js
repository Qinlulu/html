/**
 * Created by Administrator on 2016/12/7 0007.
 */

var wprocess = require("child_process");
//同步
 function error() {
 throw new Error("252525")
 }

 try {
 error();
 } catch (err) {
 console.log("this is error : "+err)
 }

//异步错误


var asyncaa = setTimeout(function () {
        throw  new Error("123")
    })
try {
    asyncaa();
} catch (err) {
}
process.on("uncaughtException", function (err) {
    console.log("this is error : "+err)
})
