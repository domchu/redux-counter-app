import { useSelector, useDispatch } from "react-redux";
import { actions } from "./Store/index";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const reset = () => {
    dispatch(actions.reset());
  };

  return (
    <>
      <div className="counter-container">
        <h2>Counter | Redux</h2>
        <h3>{counter}</h3>
        <div className="btn-container">
          <button className="btn" onClick={increment}>
            Increment
          </button>
          <button className="btn" onClick={reset}>
            Reset
          </button>
          <button className="btn" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
