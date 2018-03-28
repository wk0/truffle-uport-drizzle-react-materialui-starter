const initialState = {
  data: null,
  isLoading: true
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return Object.assign({}, state, {
        data: action.payload
      })
    case 'USER_LOGGED_OUT':
      return Object.assign({}, state, {
        data: null
      })
    default:
      return state
  }
}

export default userReducer
