//pulls in the http library so that we can use it
var http = require ("http");


//FS = filesystem,. Pull in the files system module
var fs = require("fs");

//req = request(contains info about user for request)
//res = an empty object that we fill with our response
function handlerFtn(req, res){

	res.writeHead(200, {"Content-Type": "text/html"});


	fs.readFile("./index.html", function(err, data){
		if(err){
			console.log(err);
			return;
		}

		res.write(data)

		
	});
	res.end();
	// //write html for user
	// //back ticks not single quotes ` not '
	// res.write(`


	// 	`);

	

	//send and close request
}

// create new aserver based on handler ftn
var server = http.createServer(handlerFtn);


//listen for new connections on this port
//port must be between 1025-65535
//ports 0-1024 are used fro admin
//80port is http

server.listen(8080);

console.log("hello server")
