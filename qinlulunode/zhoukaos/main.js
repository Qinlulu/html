/**
 * Created by Administrator on 2016/12/19.
 */
var cluster = require("cluster")
if (cluster.isMaster) {
    var fork = cluster.fork()
    cluster.on("exit", function () {
        var fork = cluster.fork()
    })
} else {
    var http = require("./routes/http")
    var mysql = require("./routes/mysql")
    //a()
}
