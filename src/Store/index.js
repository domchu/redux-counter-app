import { createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action) => {
  if (action.type === "ICN") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DCN") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "RES") {
    return { counter: action.payload };
  }

  return state;
};

const store = createStore(reducerFn);

export default store;
