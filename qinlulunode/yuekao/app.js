/**
 * Created by Administrator on 2016/12/22.
 */

var http = require("http")
var fs = require("fs")

http.createServer(function (req, res) {
    fs.readFileSync("./public/stylesheets/server.css"})
    fs.readFileSync("./public/javascripts/server.js")
    fs.readFile("./views/server.html", function (err, data) {
        res.end(data)
    })
   // console.log("211")

    var arr = ["./views/server.html", "./public/stylesheets/server.css",
    "./public/javascripts/server.js"]
    var str = ""
    arr.forEach(function (file) {
        fs.readFile(file, function (err, data) {
            res.end(data.toString())
            str += data.toString()
            // console.log(str)
            // console.log(data.toString())
            res.end(str)
        })
    })
}).listen(8080, function () {
    console.log("listen 8080")
})

http.createServer(function (req, res) {
    fs.readFile("./public/javascripts/server.json", function (err, data) {
        //console.log(data.toString())
        res.end(data.toString())
    })
    //res.end("123")
}).listen(8081, function () {
    console.log("listen 8081")
})
