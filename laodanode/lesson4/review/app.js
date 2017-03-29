/**
 * Created by Nan on 2016/11/30.
 */

//方法一：
//require('./fruit').apple();
//require('./fruit').banana();
//require('./fruit').pear();
//module.exports.apple = apple;
//module.exports.banana = banana;
//module.exports.pear = pear;

//方法二：
//var fruit = require('./modules/node-fruit');
var fruit = require('node-fruit');
fruit.apple();
fruit.banana();
fruit.pear();





