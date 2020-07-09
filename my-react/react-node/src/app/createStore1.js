function createStore1(reducer, initState) {
  let state = initState;
  let listeners = [];

  function subscribe(listener) {
    listeners.push(listener);
  }

  function dispatch(action) {
    state = reducer(state, action);
    for(let i = 0; i < listeners.length; i++){
      const listener = listeners[i];
      listener();
    }
  }

  dispatch({
    type: Symbol()
  })

  function getState() {
    return state
  }

  return {
    subscribe,
    dispatch,
    getState
  }

}
export default createStore1;
