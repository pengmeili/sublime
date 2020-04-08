let path = require('path');
let p1 = '../../../path/./c/./d.html';
// console.log(path.normalize(p1)) //..\..\..\path\c\d.html
let p2 = './data/test.html';
// console.log(path.join('code', p2)); //  code\data\test.html
// console.log(path.dirname(p2)); //  ./data
// console.log(path.basename(p2)); //  test.html

console.log(path.parse(p2)) // { root: '', dir: './data', base: 'test.html', ext: '.html', name: 'test' }
