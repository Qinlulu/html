/**
 * Created by Administrator on 2016/12/13.
 */

var  express=require("express")
var app=express();

var path=require("path")

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'public')));
//app.engine('html', ejs.__express);
app.get("/",function(req,res,next){
    res.render("index")

})
app.get("/user",function(req,res){
    res.render("user")
})

app.listen(8888)