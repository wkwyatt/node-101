var http = require('http');
// console.log(http);	

var server = http.createServer(function(req, res) {
	//req = http request
	//res = http response

	// console.log(req);
	// console.log(res);
	
	res.writeHead(200, 
	{
		'content-type':'text/html'
	});

	console.log("hello");
	setInterval(function() {
		console.log("World");
	}, 3000)
	res.end();
	// Reads the request as html
	// res.writeHead(200, 
	// {
	// 	'content-type':'text/html'
	// });
	// res.end('<h1>Hello world</h1>');
});

server.listen(8000);
console.log("server is listening on 8000");