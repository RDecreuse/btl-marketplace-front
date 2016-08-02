express = require 'express'
sysPath = require 'path'
http = require 'http'
httpProxy = require 'http-proxy'

apiProxy  = httpProxy.createServer({
  target:'http://localhost:8080'
});

console.log("reading coffee script express configuration")

exports.startServer = (port, path, callback) ->
  app = express();
  console.log("Start server, port = ");
  console.log(port);
  console.log("path = ");
  console.log(path);
  app.use express.static path

  app.all "/api/*", (req, res) ->
    delete req.headers.host;
    apiProxy.web(req, res)

  app.all '/*', (request, response) ->
    response.sendfile sysPath.resolve sysPath.join path, 'index.html'

  server = http.createServer app
  server.listen parseInt(port, 10), callback
  server
