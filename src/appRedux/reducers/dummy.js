import { DUMMY_CONST_SUCCESS } from 'constants/dummy'

const INIT_STATE = {
  dummyData: {}
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case DUMMY_CONST_SUCCESS: {
      return {
        ...state,
        dummyData: action.payload
      }
    }
    default:
      return state
  }
}
