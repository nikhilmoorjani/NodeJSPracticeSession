/**
 * Created by nikhil on 17-Apr-16.
 */
var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response){
    console.log("User requested a profile");
}
function forum(request, response){
    console.log("User requested a forum");
}
app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server started..");