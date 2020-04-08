var http = require('http');
var url = require('url');
var util = require('util');

// get请求
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  var params = url.parse(req.url,true).query;
  res.write("姓名：" + params.name);
  res.write('\n');
  res.write('usr:' + params.url);
  res.end();
}).listen(3000);
console.log('监听已启动')
