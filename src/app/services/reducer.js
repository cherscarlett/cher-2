const SET_HOME = 'SET_HOME'
const SET_RESUME = 'SET_RESUME'
const SET_FUN = 'SET_FUN'

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

export const setFun = (data) => {
  return {
    type: SET_FUN,
    data,
  }
}

export const selectFun = (state) => {
  return state.fun || {}
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
    case SET_FUN:
      return {
        ...state,
        fun: action.data,
      }
    default:
      return state
  }
}
