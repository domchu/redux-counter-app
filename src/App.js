import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "ICN" });
  };
  const decrement = () => {
    dispatch({ type: "DCN" });
  };
  const reset = () => {
    dispatch({ type: "RES", payload: 0 });
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
