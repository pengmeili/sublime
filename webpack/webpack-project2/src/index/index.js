console.log('home1')

class Log {
  constructor(){
    console.log('error')
  }
}

let t = new Log();

const xhr = new XMLHttpRequest();
// xhr.open('GET', '/api/user', true);
// xhr.onload = function(){
//   console.log(xhr.response)
// }
// xhr.send()

xhr.open('GET', '/user', true);
xhr.onload = function(){
  console.log(xhr.response)
}
xhr.send()

console.log(process.env.NODE_ENV, process.env.BASE_API)
