var http = require('http');
var https = require('https');

exports.get = function() {

	var options = {
	  	host: 'www.google.com',
	  	port: 80,
	  	path: '/'
	};

	http.get(options, function(resp) {

		console.log('Got response: ' + resp.statusCode);

		var buffer = "";

	   	resp.on("data", function(data) { 
	   		buffer = buffer + data; 
	   	});

	   	resp.on("end", function(data) { 
	   		console.log(buffer); 
	   	});
	}).on("error", function(e) {
		console.log("Got error: " + e.message);
	});
}