const a = 5;
const b = 12;
const sum = ()=>{
  console.log(a+b)
}

const show = ()=>{
  console.log('this is show!')
}

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age
  }
  showName(){
    return `我的名字是${this.name}`
  }
}

export {
  a,
  b,
  sum,
  show
}

export default {
  Person
}
