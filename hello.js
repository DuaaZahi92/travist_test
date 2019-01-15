re('http');
http.createServer(function (req, res) {
 ; res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n'); 
}).listen(process.env.PORT || 3000);

console.log('Server running at http://localhost:' + app.server.address().port);
