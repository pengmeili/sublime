import React, {useState, useEffect, useContext, useReducer} from "react";
import { Prompt } from "react-router";

const themes = {
  light: {
    foreground: '#000',
    background: '#eee'
  },
  dark: {
    foreground: '#fff',
    background: '#222'
  }
}

const ThemeContext = React.createContext(themes.light);
// hooks 方法
function Example() {
  const [count, setCount ] = useState(0);  // 0 是默认值

  useEffect(() => {  // 做了componentDidMount和componentDidUpdate 做的事情
    document.title = `You clicked ${count} times.`;  // 也叫用副作用
  })

  return (
    <div>
      <Prompt when={count%2 === 0 ? true:false} message="确认要跳转吗"/>
      <p>You click { count } times.</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
      <Counter initialCount={ 2 } />
      <MainApp />
    </div>
  )
}


// 计数器
// function Counter({ initialCount }) {
//   const [ count, setCount ] = useState(initialCount);
//
//   function handleClick(status){
//     switch (status) {
//       case 'reset':
//         setCount(initialCount);
//         break;
//       case 'minus':
//         setCount((prevCount) => {
//           return prevCount > 1 ? prevCount-1: prevCount
//         });
//         break;
//       case 'add':
//         setCount(prevCount => prevCount+1);
//         break;
//     }
//   }
//   return (
//     <div>
//       Count: { count }
//       <button onClick={handleClick.bind(this, 'reset')}>Reset</button>
//       <button onClick={handleClick.bind(this, 'minus')}>-</button>
//       <button onClick={handleClick.bind(this, 'add')}>+</button>
//     </div>
//   )
// }

// reducer counter
// const initialState = { count: 1 }
function reducer(state, action){
  switch (action.type) {
    case 'minus':
      return state.count > 1 ? { count: state.count - 1 } : { count: state.count };
    case 'add':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  return(
    <>
      Count: { state.count }
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
    </>
  )
}

function MainApp() {
  return(
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar(props) {
  return(
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton(){
  const theme = useContext(ThemeContext);
  return(
    <button style={{background: theme.background, color: theme.foreground}}>
      I am styled  by theme context!
    </button>
  )
}


// ES6 class

// class Example extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 }
//   }
//
//   componentDidMount() {
//     document.title = `you click ${ this.state.count } times`
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     document.title = `you click ${ this.state.count } times`
//   }
//
//   handleClick() {
//     this.setState({
//       count: this.state.count+1
//     })
//   }
//
//   render() {
//     return(
//       <div>
//         <p>You clicked { this.state.count } times</p>
//         <button onClick={ this.handleClick.bind(this) }>click me</button>
//       </div>
//     )
//   }
// }

export default Example;
