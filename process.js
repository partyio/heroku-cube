var options = require("./config"),
    cube = require("./node_modules/cube/"),
    server = cube.server(options);

if (process.env.COLLECTOR_APP) {

  server.register = function(db, endpoints) {
    cube.collector.register(db, endpoints);
  };

} else if (process.env.EVALUATOR_APP) {

  server.register = function(db, endpoints) {
    cube.evaluator.register(db, endpoints);
  };
}

server.start();
