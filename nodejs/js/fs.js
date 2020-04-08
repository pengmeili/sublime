const fs = require('fs');
// console.log('写入前准备');
// fs.writeFile('./data.json','aaa',function (err) {
//   if(err) return console.log(err)
//   console.log('write success')
// })
fs.stat('./data.json',function (err, state) {
  if(err) throw err
  console.log(state)
  console.log(state.isFile())
})
