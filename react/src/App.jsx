import { useReducer } from "react";

import "./App.css";

const myReducer = (prevState, action) => {
  if (action == "+") {
    return prevState + 1;
  }else
  if (action == "-") {
    return prevState - 1;
  }else
  if (action == "reset") {
    return 0;
  } else{
    console.error("Wrong action passed")
  }
};

function App() {
  const [count, dispatch] = useReducer(myReducer, 0);

  return (
    <>
      <h1 className="main-header">{count}</h1>
      <div className="btns">
        <button onClick={() => dispatch("-")}>-</button>
        <button onClick={() => dispatch("reset")}>reset</button>
        <button onClick={() => dispatch("+")}>+</button>
      </div>
    </>
  );
}

export default App;
