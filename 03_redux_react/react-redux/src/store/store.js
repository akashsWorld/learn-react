import {configureStore} from '@reduxjs/toolkit'

const initialState = {
    counter:0
}


const reducer = (state= initialState,action)=>{

    if(action.type === 'increment'){
        return {
            counter: state.counter+1
        }
    }
    if(action.type === 'decrement'){
        return{
            counter: state.counter -1
        }
    }

    return {
        counter: state.counter
    }
}

// Create store
const store = configureStore({reducer:reducer})

export default store;
