import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState:{ cartISVisible : false},
    reducers:{
        toggle(state){
            state.cartISVisible = !state.cartISVisible;
        }
    }
})
export const uiActions = uiSlice.actions;
export default uiSlice;