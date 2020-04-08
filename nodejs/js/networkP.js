// 抓取指定信息  也可以再加上分页
// http://pic275.nipic.com/pic/20200312/31119221_141809892000_4.jpg
// http://pic275.nipic.com/file/20200312/31119221_141809892000_2.jpg
var http = require('http');
var fs = require('fs');
http.get('http://www.nipic.com/photo/renwu/richang/index.html',function (res) {
  let data = ''; // 定义一个变量用于存放一段一段的html数据
  res.on('data',function (a) {
    data += a.toString();
  });
  res.on('end',function () {
    // console.log(data)  数据已请求完成
    // 编写正则表达式匹配图片
    var reg = /data-src="(.*?)"/img;
    let result;  // 此方法只执行一次
    var arr = [];
    while(result = reg.exec(data)) {
      arr.push(result[1])
    }
    arr.forEach(function (item) {
      const newUrl = item.replace('/pic/','/file/').replace('4.jpg','2.jpg');
      getImage(newUrl)
      http.get(newUrl,function (res) {
        let time = new Date().getTime();
        var stream = fs.createWriteStream('./files/'+ time +'.jpg');
        res.pipe(stream) // 有的图片下载不下来，可以用bagpipe或是async代替，处理大并发的情况
      })
    })
  })
})
