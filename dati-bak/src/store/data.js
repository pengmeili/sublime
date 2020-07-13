import { createStore } from 'redux';
import actions from './actions'
import state from './state'

let data = state

// 创建出reduce函数
let ActionFnObj = actions

function reducer(state=data, action) {
 if(action.type.indexOf('redux') === -1){
  state = ActionFnObj[action.type](state, action)
  return {...state}
 } else{
     return state;
 }
}

const store = createStore(reducer);

export default store;