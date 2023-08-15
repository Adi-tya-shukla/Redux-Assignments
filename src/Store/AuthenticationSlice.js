

import { createSlice} from '@reduxjs/toolkit';


const authInitial = { isAuthenticated : false}

const authSlice = createSlice({
name : 'authentication',
initialState : authInitial,
reducers:{
    logInMethod(state){
        state.isAuthenticated = true
    },
    logOutMethod(state){
state.isAuthenticated = false;
    }
}

}) 

export default authSlice;