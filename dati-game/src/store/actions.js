let actions = {
  ADD: function(state, action){
    state.num++
    return state
  },
  ADD5:function(state, action){
      state.num = state.num + action.num;
      return state
  },
  DECREMENT: function(state, action){
      state.num--
      return state;
  }
}
export default actions