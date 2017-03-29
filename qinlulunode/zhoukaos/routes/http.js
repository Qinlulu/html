/**
 * Created by Administrator on 2016/12/19.
 */
var http = require("http")
http.createServer(function (req, res) {
    res.end("yyy")
}).listen(8080, function () {
    console.log("listen 8080")
})

