/**
 * Created by nikhil on 17-Apr-16.
 */
//simple web file server

var http = require('http');
var fs = require('fs');

//set a 404 response
function send404Response(response){
    response.writeHead(404, {"Contect-Type": "text/plain"});
    response.write("Sorry, error 404.. Unable to find page");
    response.end();
}

//handle user request
function onRequest(request, response){
    if(request.method == 'GET' && request.url == "/"){
        response.writeHead(200, {"Contect-Type": "text/plain"});
        fs.createReadStream("./file24tut14.html").pipe(response);

    }else{
        send404Response(response);
    }

}

http.createServer(onRequest).listen(8888);
console.log("Server is up and running");