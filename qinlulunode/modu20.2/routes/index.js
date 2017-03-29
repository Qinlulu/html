/**
 * Created by Administrator on 2016/12/17.
 */
var form=require("./form");
module.exports=function(app){
    app.get("/",function(req,res){
      
        res.render("index")
    })
    app.post("/form",form)
}