import { createStore1, combineReducers } from './redux/index'
import counterReducer from "./reduces/counter";
import infoReducer from "./reduces/info";

function moreReducer() {
  const reducer = combineReducers({
    counter: counterReducer,
    info: infoReducer
  });
  let initState = {
    counter: {
      count: 0
    },
    info: {
      name: 'pengml1',
      description: '我们是前端开发者'
    }
  }
  let store = createStore1(reducer, initState);

  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count, state.info.name, state.info.description)
  })
  store.dispatch({
    type: 'INCREMENT'
  })
  store.dispatch({
    type: 'SET_NAME',
    name: 'xiaohei'
  })
  return null
}

export default moreReducer
