const fs = require('fs');
// 异步方式
// function deleteDir(p) {
//   fs.readdir(p,function(err,list){
//     list.forEach(function (v,i) {
//       fs.stat(p+'/'+v,function(err,stats){
//         if(stats.isFile()){
//           fs.unlink(p+'/'+v,function (err) {
//             if(err) return err
//             console.log(p+'/'+v+'删除成功！') // 无限的回调--回调地狱
//           })
//         } else {
//           deleteDir(p+'/'+v)
//         }
//       })
//     })
//   })
// }

// 同步方式
function deleteDir(path){
  const file = [];
  if(fs.existsSync(path)){
    files = fs.readdirSync(path);
    files.forEach(function (file,index) {
      let curPath = path + '/' + file;
      if (fs.statSync(curPath).isFile()){
        fs.unlinkSync(curPath)
        console.log(curPath+'删除成功！')
      } else {
        deleteDir(curPath)
      }
    })
    fs.rmdirSync(path)
    console.log(path+'删除成功！')
  }
}

deleteDir('../webpackTest');
