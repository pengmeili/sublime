console.log('2模块加载了')
const a = 1;
const b = 10;
let c =300;

// export {
//   a,
//   b,
//   c
// }

// 也可使用别名
export {
  a as aaa,
  b as banana,
  c as cup
}
