var Service = require('node-windows').Service;
var svc = new Service({
 name:'Service name',
 description: 'TailorBuilt UDP Server router.',
 script: 'udp_server.js'
});

svc.on('uninstall',function(){
 console.log('Router Service stopped!')
});

svc.uninstall();
