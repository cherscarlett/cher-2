const SET_HOME = 'SET_HOME'
const SET_RESUME = 'SET_RESUME'

export const setHome = (data) => {
  return {
    type: SET_HOME,
    data,
  }
}

export const selectHome = (state) => {
  return state.home || {}
}

export const setResume = (data) => {
  return {
    type: SET_RESUME,
    data,
  }
}

export const selectResume = (state) => {
  return state.resume || {}
}

// This example opts for a very simple Redux store
// As these scale in complexity, it might be worth
// it to check out more opinionated redux designs.
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        home: action.data,
      }
    case SET_RESUME:
      return {
        ...state,
        resume: action.data,
      }
    default:
      return state
  }
}
