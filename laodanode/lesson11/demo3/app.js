/**
 * Created by haonan on 2016/12/8.
 */

var fs = require('fs');

var arrServer = ['server1.txt', 'server2.txt'];
for (var i = 0; i < arrServer.length; i++) {

    (function (i) {
        setTimeout(function () {
            fs.readFile(arrServer[i], function (err, data) {
                if (err) return console.error(err);
                console.log(data.toString());
            });
        },0);
    })(i);
}