/**
 * Created by Administrator on 2016/12/16.
 */
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(8080,function(){
    console.log("listen 8080")
})