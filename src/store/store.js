import { reducer } from "./reducers";
function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
  }

  function getState() {
    return { state };
  }

  return {
    getState,
    dispatch,
  };
}

export default createStore(reducer);
