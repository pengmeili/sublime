const url = require('url');
const u = 'http://music.163.com:80/aaa/index.html?id=10&name=test#/discover/playList';
// console.log(url.parse(u)); // 老的url模块
// console.log(new url.URL(u)); // WHATWG标准url模块
const obj = new url.URL(u)
const searchParams = new URLSearchParams(obj.searchParams);
// for(let p of searchParams){
//   console.log(p) // [ 'id', '10' ]
// }
console.log(searchParams.get('id')) //获取指定搜索参数的第一个值
// searchParams.delete('id') //从搜索参数列表里删除指定的搜索参数及其对应的值。
// console.log(searchParams.entries())
console.log(searchParams.getAll('id'))


