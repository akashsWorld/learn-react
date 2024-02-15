import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {

  // Subscribe the store the state props passed autometically when the state is change.
  // Here also can use useStore hook but useSelector is more efficiant.
  const counter = useSelector(state=>state.counter);

  // This hook gives the dispatch function where we just have to send the action prop.
  const dispath = useDispatch();



  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={()=>dispath({type:'increment'})}>Increment</button>
      <button onClick={()=>dispath({type:'decrement'})}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
