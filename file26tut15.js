/**
 * Created by nikhil on 17-Apr-16.
 */
//connect framework
//npm install connect ---> to download connect framework

var connect = require('connect');
var http = require('http');

//create a connect dispatcher before using connect object

var app = connect();

//middleware to handle user request
function doFirst(request, response, next){
    console.log("Nikhil");
    //next();
}
function doSecond(request, response, next){
    console.log("NikhilTwo");
    next();
}


app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(8888);
console.log("Server running...........");
