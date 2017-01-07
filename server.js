/**
 * Created by ubuntu on 16/6/16.
 */
var express = require ('express');
var app = express();
/*
app.get('/', function(req , res ){
    res.send("Hello World");
});
*/
require('./routes/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine','jade');
//app.engine('html' , require('jade').renderFile);

var cal = function(){
    console.log("Server start on port 3000");
};
var server = app.listen(3000 ,"127.0.0.1" , cal);
