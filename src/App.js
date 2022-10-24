import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <h2>Counter | Redux</h2>
      <h3>{counter}</h3>
    </>
  );
}

export default App;
