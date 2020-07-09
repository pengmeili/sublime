let initState = {
  name: 'pengml1',
  description: 'she is a girl'
}

export default function InfoReducer(state, action) {
  if(!state){
    state = initState;
  }
  switch (action.type) {
    case 'SET_NAME':
      return{
        ...state,
        name: action.name
      }
    case 'SET_DESCRIPTION':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}
