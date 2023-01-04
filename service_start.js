var Service = require('node-windows').Service;
var svc = new Service({
 name:'Service name',
 description: 'TailorBuilt UDP Server router.',
 script: 'udp_server.js'
});

svc.on('install',function(){
 svc.start();
	console.log('UDP Router started!')
});

svc.install();
