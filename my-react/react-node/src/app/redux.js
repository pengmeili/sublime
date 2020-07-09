export default function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log({
        ...state,
        count: state.count + 1
      })
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}
