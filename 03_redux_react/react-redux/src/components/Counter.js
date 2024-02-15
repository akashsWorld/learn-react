import { useState } from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // Subscribe the store the state props passed autometically when the state is change.
  // Here also can use useStore hook but useSelector is more efficiant.
  const counter = useSelector((state) => state.counter);

  const show = useSelector(state => state.showCounter);

  // This hook gives the dispatch function where we just have to send the action prop.
  const dispath = useDispatch();

  const [changeVal, setChangeVal] = useState(0);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value} >{counter}</div>}
      <button onClick={() => dispath({ type: "increment" })}>Increment</button>
      <button onClick={() => dispath({ type: "decrement" })}>Decrement</button>
      <input
        value={changeVal}
        onChange={(eve) => setChangeVal(+eve.target.value)}
      />
      <button
        onClick={() => dispath({ type: "incrementval", payload: changeVal })}
      >
        Increment Value
      </button>
      <button
        onClick={() => dispath({ type: "decrementval", payload: changeVal })}
      >
        Decrement Value
      </button>
      <button onClick={()=>dispath({type:'toggle'})}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
