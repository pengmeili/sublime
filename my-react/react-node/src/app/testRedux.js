import React from "react";
import createStore from './createStore';

function testRedux(){
  let initState = {
    counter: {
      count: 0
    },
    info: {
      name: '',
      description: ''
    }
  }

  let store = createStore(initState);

  store.subscribe(() => {
    let state = store.getState();
    console.log(`${state.info.name}：${state.info.description}`);
  });
  store.subscribe(() => {
    let state = store.getState();
    console.log(state.counter.count);
  });

  store.changeState({
    ...store.getState(),
    info: {
      name: '前端九部',
      description: '我们都是前端爱好者！'
    }
  });

  store.changeState({
    ...store.getState(),
    counter: {
      count: 1
    }
  });

  return(
    <>
      <div>{ store.getState().info.name }:{store.getState().info.description}</div>
      <div>counter is { store.getState().counter.count }</div>
    </>
  )
}

export default testRedux
