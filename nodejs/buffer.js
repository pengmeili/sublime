var buf = Buffer.from(new String('张三'));
// console.log(buf) //<Buffer e5 bc a0 e4 b8 89>

var buf1 = Buffer.from([97,98,65,66]);

console.log(buf1.toString()) // abAB

console.log(Buffer.alloc(10)) //创建一个长度为 10、且用 0 填充的 Buffer
console.log(Buffer.alloc(10, 1)) //创建一个长度为 10、且用 0x1 填充的 Buffer

var buf3 = Buffer.alloc(10)
// console.log(buf3.fill('a',0,4)) // <Buffer 61 61 61 61 00 00 00 00 00 00>
console.log(buf3.write('akjfkajfklajflkj',0,2))

var buf11 = Buffer.from('abcdefghijkl');
var buf12 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
console.log('复制前'+buf11) // 复制前abcdefghijkl
buf12.copy(buf11, 0);

console.log('复制后：'+buf11.toString()); //复制后：RUNOOBghijkl

