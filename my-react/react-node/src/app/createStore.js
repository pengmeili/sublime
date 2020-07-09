function createStore(initState) {
  let state = initState;
  let listeners = [];

  /* 订阅 */
  function subscribe(listener) {
    listeners.push(listener);
  }

  function changeState(newState) {
    state = newState;
    /* 通知 */
    console.log('listeners:'+listeners.length)
    for(let i = 0; i < listeners.length; i++){
      const listener = listeners[i];
      listener();
    }
  }

  function getState() {
    return state;
  }

  return {
    subscribe,
    changeState,
    getState
  }
}

export default createStore;
