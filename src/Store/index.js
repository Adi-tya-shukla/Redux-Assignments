import {configureStore } from '@reduxjs/toolkit';
import counterSlice from './CounterSlice';
import authSlice from './AuthenticationSlice';

const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        auth : authSlice.reducer 
    },
 });
 
 export const authActions = authSlice.actions;
 export const counterActions =  counterSlice.actions; 
 export default store;
 

 