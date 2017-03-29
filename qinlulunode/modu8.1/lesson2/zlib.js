/**
 * Created by Administrator on 2016/12/6 0006.
 */
var zlib=require("zlib")
var fs=require("fs")
var gzip=zlib.createGzip();


var read=fs.createReadStream("./qin.txt")
var write=fs.createWriteStream("./qin.txt.gz")

read.pipe(gzip).pipe(write)

/*
fs.readFile("./qin.txt.gz",function(err,data){
        if(err) return console.error(err);
       zlib.gunzip(data,function(err,aa){
           console.log(aa.toString())

       })
})


var inp="asdfguhgyafdhuasgfhjusd";

zlib.deflate(inp,function(err,data){
    if(err) return console.error(err);
    zlib.inflate(data,function(err,da){
        if(err) return console.error(err);
    console.log(da.toString())
    })
})*/
