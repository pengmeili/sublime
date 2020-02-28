// var a = 10;
// exports.str = a;
// exports.show = function () {
//   console.log('aaa');
//   return '1111'
// }

let userName = 'brain';
function show() {
  console.log(userName);
}

// exports.show = show
module.exports = show;
console.log(exports === module.exports) // true

global.userAgent = 'web' // 调用 global.userAgent 或是userAgent
