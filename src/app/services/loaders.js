import { setHome, setResume, setFun } from './reducer'

// These are where we get our data! Treat them like any other thunk
export const loadHome = () => async (dispatch, getState, services) => {
  setHome(null)
  const { data }  = await services.client('/api/home')
  dispatch(setHome(data))
  return data;
};

export const loadResume = () => async (dispatch, getState, services) => {
  setResume(null)
  const { data }  = await services.client('/api/resume')
  dispatch(setResume(data))
  return data;
};

export const loadFun = () => async (dispatch, getState, services) => {
  setFun(null)
  const { data }  = await services.client('/api/fun')
  dispatch(setFun(data))
  return data;
};
