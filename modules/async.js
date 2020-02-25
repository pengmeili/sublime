const fs = require('fs');
const readFile = function (fileName) {
  return new Promise((resolve,reject) => {
    fs.readFile(fileName,(err,data) =>{
      if(err) reject(err);
      resolve(data);
    })
  })
}
// promise方法
// readFile('data/1.txt').then(res =>{
//   console.log(res.toString());
//   return readFile('data/2.txt');
// }).then(res => {
//   console.log(res.toString());
//   return readFile('data/3.txt')
// }).then(res => {
//   console.log(res.toString())
// })

// generator方法
// function * gen(){
//   yield readFile('data/1.txt');
//   yield readFile('data/2.txt');
//   yield readFile('data/3.txt');
// }
// let g1 = gen()
// g1.next().value.then(res =>{
//   console.log(`g1----${res.toString()}`)
//   return g1.next().value;
// }).then(res =>{
//   console.log(`g1----${res.toString()}`)
//   return g1.next().value
// }).then(res =>{
//   console.log(`g1----${res.toString()}`)
// })


// async 方法
//   async function fn() {
//     try{
//       let f1 = await readFile('data/1.txt');
//       let f2 = await readFile('data/2.txt');
//       let f3 = await readFile('data/3.txt');
//     }catch (e) {}
//     console.log(f1.toString())
//     console.log(f2.toString())
//     console.log(f3.toString())
//   }
//   fn();

// 如果这三个请求是单独的三个请求，则可以使用promise.all()W
  async function fn(){
    let [a,b,c] = await Promise.all([
      readFile('data/1.txt'),
      readFile('data/2.txt'),
      readFile('data/3.txt')
    ]);
    console.log(a.toString())
    console.log(b.toString())
    console.log(c.toString())
  }
  fn();

//执行方法 node .\async.js
