import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: 'Counter',
    initialState: {
        counter: 0
    },
    reducers: {
        increase: (state,action)=>{
            state.counter = state.counter+1
        },
        decrease: (state,action) =>{
            state.counter = state.counter-1;
        },
        reset: (state, action)=>{
            state.counter = 0;
        }
    }

})

export const {increase, decrease, reset} = countSlice.actions;
export default countSlice.reducer;