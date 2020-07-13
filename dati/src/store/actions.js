let actions = {
  SET_TIMU: function(state, action) {
    state.timuList = action.content
    return state
  }
}
export default actions