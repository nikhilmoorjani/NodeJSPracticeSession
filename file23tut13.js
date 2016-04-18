/**
 * Created by nikhil on 17-Apr-16.
 */
//creating a basic http server

//js-- for web browser
//node -- code for server

//server.js

//use built in http core module
var http = require('http');

//request = info about user request & its is trying to access
//response -- server send back
function onRequest(request, response){
    console.log("A user made a request "+request.url);
    response.writeHead(200, /*header info data here*/{"Context-Type": "text/plain"});
    response.write("Here is some response data");
    response.end();
}


//callback, server has to be listening for the request
//server listening for users through port 8888
http.createServer(onRequest).listen(8888);
console.log("Server is now running....");

//one request is for favicon in the same request which points to the icon of that web page
