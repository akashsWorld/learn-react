import {createSlice} from '@reduxjs/toolkit';


const initialCounterState = {
    counter:0,
    showCounter:false
}
/* Using createSlice we can also create multiple slice for multiple states and combine
    them as an object give it to the configure store, 
and configure store then create a big reducer function internally.*/
// Thats why createSlice used to create reducer function.

export const counterSlice = createSlice({
    name:'counter', // The name must be unique to identify the slice.
    initialState:initialCounterState,
    reducers:{
        // Here state can mutate because create slice internally copy the non change states 
        // and change the modified state in immutable way.
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter= state.counter + action.payload;
        },
        decrease(state,action){
            state.counter = state.counter - action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
    }
})

export const counterActions = counterSlice.actions;


const initialAuthState = {
    isAuthenticated :false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState:initialAuthState,
    reducers:{
        loginAndLogout(state){
            state.isAuthenticated= !state.isAuthenticated    
        }
    }
})

export const authActions = authSlice.actions;