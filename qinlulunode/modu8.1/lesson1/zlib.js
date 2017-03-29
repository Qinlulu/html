/**
 * Created by Administrator on 2016/12/5 0005.
 */
var fs = require("fs")
var zlib = require("zlib")



 /*var gzip=zlib.createGzip();

 var reads=fs.createReadStream("./readme.md")
 var writes=fs.createWriteStream("./readme.md.gz")

 reads.pipe(gzip).pipe(writes)

*/

fs.readFile("./readme.md.gz", function (err, data) {
    if (err)  return console.error(err);

    zlib.gunzip(data,function(err,dat){
        if (err)  return console.error(err);
        console.log(dat.toString())
    })
})






