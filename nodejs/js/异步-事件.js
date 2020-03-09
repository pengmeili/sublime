var http = require('http');
var server = http.createServer();
server.on('request',function (req,res) {
  res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
  res.write('<h1>你正在访问你的node.js服务器！</h1>');
  res.end();
});
server.listen(80,function () {
  console.log('服务器已启动！')
})
