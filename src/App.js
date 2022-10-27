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
      <h2>Counter | Redux</h2>
      <h3>{counter}</h3>

      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
}

export default App;
