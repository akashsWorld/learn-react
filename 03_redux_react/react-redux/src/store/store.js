import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    counter:0,
    showCounter:false
}


const reducer = (state= initialState,action)=>{

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

// Create store
const store = configureStore({reducer:reducer})

export default store;
