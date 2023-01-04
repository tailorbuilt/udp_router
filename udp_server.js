var dgram = require('dgram');

var server = dgram.createSocket('udp4');
var client = dgram.createSocket('udp4');

const router = require ('./router.json');
console.log("GPS Identifier: " + router.id);
console.log("Listening for UDP traffic on port " + router.listen_port);

server.on('message',function(msg, rinfo){
	console.log('recieved from client: ' + msg);
	console.log("sending to " + router.ip_address + ":" + router.send_port);
	client.send(Buffer.from('>RTR,ID=' + router.id + ',' + msg ), router.send_port, router.ip_address);
});

server.bind(router.listen_port);

