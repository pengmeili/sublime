const http = require('http');
http.createServer(function (req,res) {
  console.log(req.url)
  const path = req.url;
  switch (path) {
    case '/':
      res.write('<h1>homePage</h1>');
      break;
    case '/about.html':
      res.write('<h1>about</h1>');
      break;
    case '/map.html':
      res.write('<h1>map</h1>');
      break;
  }
  res.end();
}).listen(80,function () { // 监听80端口时地址栏里可以不用写端口号
  console.log('80监听已启动...');
})
