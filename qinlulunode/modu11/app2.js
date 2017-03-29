/**
 * Created by Administrator on 2016/12/9.
 */

var domain = require("domain")

var oDomain = domain.create();
var fs = require("fs")
//oDomain.bind()

function readfile(name, callback) {
    fs.readFile(name, oDomain.bind(function (err, data) {
            return callback(err, data)
        })
    )
}
readfile("./text.text", function (err, data) {
    console.log(data.toString())
    a()
})

oDomain.on("error", function () {
    console.log("hhhh")
})
