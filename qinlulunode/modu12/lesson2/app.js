/**
 * Created by Administrator on 2016/12/10.
 */

var express=require("express")
var path=require("path")

var app=express()
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
//app.use(express.static(path.join(__dirname, 'public')));

var index=require("./routes/index")
var user=require("./routes/user")

app.get("/",index)
app.get("/user",user)

app.listen(8888)
