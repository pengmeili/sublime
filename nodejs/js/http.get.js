const http = require('http');
const fs = require('fs');
http.get('http://nodejs.cn/index.json',function (res) {
  //console.log(res)
  // 以流的方式监听事件
  // res.on('data',function (res) {
  //   console.log('----------------');
  //   console.log(res.toString())
  // })
  console.log(res)
  res.pipe(fs.createWriteStream('./a.html'))
})
