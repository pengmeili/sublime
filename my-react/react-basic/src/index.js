import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import LifeCycle from "./LifeCycle";
import ControlInput from './ControlInput'
import NoControlInput from "./NoControlInput";

// const user = {
//   firstName: 'xiao',
//   lastName: 'hei'
// }

// function formatName(user) {
//   return user.firstName + user.lastName;
// }

// const ele = <h2>hello, {formatName(user)}</h2>;

// function getGeeting(user) {
//   if(user) {
//     return <h1>hello, { user.firstName + user.lastName }</h1>
//   } else {
//     return <h1>hello, react</h1>
//   }
// }

// function tick() {
//   const elem = (
//     <div>
//       <div>{ ele }</div>
//        <div>{ getGeeting(user) }</div>
//       <h1>hello, world！</h1>
//       <h2>{ new Date().toLocaleTimeString() }</h2>
//     </div>
//   )
//   ReactDOM.render(elem, document.querySelector('#root'))
// }

// setInterval(tick, 1000)


// ReactDOM.render(<div>
//   <div>{ ele }</div>
//   <div>{ getGeeting(user) }</div>
// </div>, document.querySelector('#root'));


// 循环列表
// const arr = ['1', '2', '3'];
// const ulEle = (
//   <ul>
//     {
//       arr.map((item, index) => {
//         return <li key={ index }>{ item }</li>
//       })
//     }
//   </ul>
// )

// ReactDOM.render(ulEle, document.querySelector('#root'))




// 循环渲染并过虑
// const goods = [
//   { id: 1, price: 100, title: '小米' },
//   { id: 2, price: 1000, title: '华为' },
//   { id: 3, price: 1100, title: '苹果' }
// ]

// const filterEle = (
//   <ul>
//     {goods.map(good => {
//       return (good.price >= 1000 ? <li key={ good.id }>{ good.title }</li> : null)
//     })}
//   </ul>
// )

// ReactDOM.render(filterEle, document.querySelector('#root'))

// 函数式声明
// function Welcome(props) {
//   return (Object.keys(props).length>0?<h1>welcome,{ props.name }</h1>:<h1>welcome,react</h1>)
// }
// ReactDOM.render(<Welcome />, document.querySelector('#root'));

// ReactDOM.render(<App name="你好"/>, document.querySelector('#root'));
// ReactDOM.render(<LifeCycle/>, document.querySelector('#root'));
// ReactDOM.render(<ControlInput/>, document.querySelector('#root'));
ReactDOM.render(<NoControlInput/>, document.querySelector('#root'));
