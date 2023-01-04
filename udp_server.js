var dgram = require('dgram');

var server = dgram.createSocket('udp4');
var client = dgram.createSocket('udp4');

server.on('message',function(msg, rinfo){
	console.log('I received this message from client: ' + msg);
	client.send(Buffer.from(msg), 9999, 'dyer911.tailorbuilt.software');
});

server.bind(9090);

