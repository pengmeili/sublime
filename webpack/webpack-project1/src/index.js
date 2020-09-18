// import $ from 'jquery';
// console.log($) // undefined

// require('@babel/polyfill');
// const str = require('./a');
// console.log(str);
require('./css/index.scss');

// const fn = ()=> {
//   console.log('es6')
// }
// @addSkill
// class A{ // new A()
//   a = 1;
// }
// function addSkill(target) {
//   target.say = "hello world";
// }

// let a = new A();
// console.log(a.a)

// function * gen(params) {
//   yield 1
// }

// console.log(gen().next())

// 'aaa'.includes('a');

import pic1 from './images/pic1.jpg';
let image = new Image();
image.src = pic1;
document.body.appendChild(image);


