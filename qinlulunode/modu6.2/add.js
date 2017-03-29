/**
 * Created by Administrator on 2016/12/1 0001.
 */
var fs=require("fs")
//方法一
/*fs.readFile("first.text",function(err,data){
    if(err) return console.error(err)
        console.log(data.toString())
    fs.writeFile("wtite.text",data,function(err){
        if(err) return console.error(err)
    })
})*/

var read="first.text"
var write="wrirtcea.text"

//方法二
/*var reade=function(read){
    fs.readFile(read,function(err,data){
        writes(write,data)
    })
}
var writes=function(write,data){
    fs.writeFile(write,data)
}

reade(read)*/

//方法三
//fs.createReadStream(read).pipe(fs.createWriteStream(write))

//方法四
var  reads=fs.createReadStream(read)
var writes=fs.createWriteStream(write)

reads.pipe(writes)
