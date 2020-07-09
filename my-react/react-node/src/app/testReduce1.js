// 有计划的状态管理  reducer 是一个计划函数，接收老的 state，按计划返回新的 state
import React from "react";
import createStore1 from "./createStore1";
import reducer from "./redux";

function testReduce1() {
  let initState = {
    count: 0
  }
  let store = createStore1(reducer, initState);

  store.subscribe(() => {
    let state = store.getState();
    console.log(state.count);
  });

  store.dispatch({
    type: 'INCREMENT'
  });
  store.dispatch({
    type: 'DECREMENT'
  });
  store.dispatch({
    type: 'abc'
  })

  return(
    <div>{store.getState().count}</div>
  )
}

export default testReduce1;
