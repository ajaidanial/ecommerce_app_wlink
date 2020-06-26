import { DUMMY_CONST, DUMMY_CONST_SUCCESS } from 'constants/dummy'

export const dummyAction1 = (data) => {
  return {
    type: DUMMY_CONST,
    payload: data
  }
}

export const dummyAction2 = (data) => {
  return {
    type: DUMMY_CONST_SUCCESS,
    payload: data
  }
}
