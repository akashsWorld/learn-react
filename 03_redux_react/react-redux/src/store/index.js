import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices";
import { authSlice } from "./slices";

// const initialState = {
//     counter:0,
//     showCounter:false
// }

/*const reducer = (state= initialState,action)=>{

    // In the reducer function the old state cant be mutate. 
    // So there are many bad possibilities where we have to deal with lot of states and manage them.
    // So this method is not a right approach to do state change.
    // And also the action.type is may change due to typo so in the app can have face some problem.


    if(action.type === 'increment'){
        return {
            counter: state.counter+1,
            showCounter: state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter -1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'incrementval'){
        return{
            counter: state.counter + action.payload,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrementval'){
        return{
            counter: state.counter - action.payload,
            showCounter: state.showCounter
        }
    }
    if(action.type=== 'toggle'){
        return {
            counter:state.counter,
            showCounter: !state.showCounter
        }
    }

    return {
        counter: state.counter,
        showCounter:state.showCounter
    }
}
*/

// Create store
const store = configureStore({
    // Use multiple slices to manage states and also separation of state purpose.
    // The configureStore method create a big reducer behind the scene by combining the slices.
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
