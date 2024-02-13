const redux = require('@reduxjs/toolkit');

const initializationState = {
    counter : 0
}

const counterReducer = (oldState = initializationState , action)=>{
    if(action.type==='increment-two'){
        return {
            counter:oldState.counter+action.payload
        }
    }
    return oldState;
}

// Create Store with the reducer function.
const store = redux.configureStore({reducer: counterReducer});

// subscribe method is fuction which excute every time when the state changes.
const subscribeMethod=()=>{
    const latestState = store.getState();
    console.log(latestState);
}

// The way to subscribe the store.
store.subscribe(subscribeMethod)


// Way to initialize an Action.
// { The type field is an important feild, if it is not found then throws an error.}
store.dispatch({type:'increment-two',payload:2});
store.dispatch({type:'increment-two',payload:2});
store.dispatch({type:'increment-two',payload:2});
store.dispatch({type:'increment-two',payload:2});
store.dispatch({type:'increment-two',payload:2});