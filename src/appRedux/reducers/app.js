import { TOGGLE_AUTH_MODEL } from 'constants/app'

const INIT_STATE = {
  showAuthModel: false
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case TOGGLE_AUTH_MODEL: {
      return {
        ...state,
        showAuthModel: !state.showAuthModel
      }
    }
    default:
      return state
  }
}
