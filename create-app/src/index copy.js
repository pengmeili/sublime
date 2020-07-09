import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import LifeCircle from './lifeCircle';
import ControlInput from './ControlInput';
import NoControlInput from './NoControlInput';
import FormSimple from './FormSimple';

// const user = {
//   firstName: 'peng',
//   lastName: 'xiaohei'
// }
// function formatName(user) {
//   return user.firstName + user.lastName;
// }
//
// function Greeting(user){
//   if(user) {
//     return <h1>hello, {formatName(user)}</h1>
//   }
//   return <h1>hello, react!</h1>
// }
// ReactDOM.render(
//   <div>{Greeting(user)}</div>,
//   document.querySelector('#root')
// )

/*
* JSX 循环
* */
// const arr = ['1','2','3','4'];
// const elem = (
//   <ul>
//     {
//       arr.map((item, index) => {
//         // 循环绑定的jsx元素，必须要有key来区分不同的元素，否则会报错
//         return <li key={index}>{item + '--'+ index}</li>
//       })
//     }
//   </ul>
// )
// ReactDOM.render(
//   elem,
//   document.querySelector('#root')
// )

/*
* JSX 循环过滤
* */

// const goods = [
//   {id:1, price: 100, title: "小米手机"},
//   {id:2, price: 1000, title: "小米5手机"},
//   {id:3, price: 1050, title: "小米7手机"},
//   {id:4, price: 1090, title: "小米10手机"},
//   {id:5, price: 2000, title: "小米9手机"},
// ]
//
// const filterEle = (
//   <ul>
//     {goods.map((good, index) => {
//       return (
//         good.price > 1000 ? <li key={good.id}>{good.title}</li>: null
//       )
//     })}
//   </ul>
// )
//
// ReactDOM.render(
//   filterEle,
//   document.querySelector('#root')
// )

/*
* 函数式声明
* */
// function Welcome(props) {
//   return <h2>welcome, {props.name}!</h2>
// }
// ReactDOM.render(
//   <Welcome name='brain'/>,
//   document.querySelector('#root')
// )

/*
* 类声明
* */

// ReactDOM.render(
//   <App name={'你好！'}/>,
//   document.querySelector('#root')
// )
// ReactDOM.render(
//   <LifeCircle />,
//   document.querySelector('#root')
// )
// ReactDOM.render(
//   <ControlInput />,
//   document.querySelector('#root')
// )

// ReactDOM.render(
//   <NoControlInput />,
//   document.querySelector('#root')
// )

ReactDOM.render(
  <FormSimple />,
  document.querySelector('#root')
)