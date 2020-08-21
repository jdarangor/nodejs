 var server = require("./serverModulePag23");
 var router = require("./routerPag24");
 var requestHandlers = require("./requestHandlers");

 var handle = {};
 handle["/"] = requestHandlers.start;
 handle["/start"] = requestHandlers.start;
 handle["/upload"] = requestHandlers.upload;

 server.start(router.route, handle);