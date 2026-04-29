import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        user:null,
        isLoggedIn:false,
    },
    reducers:{
        register:(state,action)=>{
            state.user = action.payload;
            state.isLoggedIn = true;
        },
        login:(state,action)=>{
            state.user = action.payload;
            state.isLoggedIn =true;
        },
        logout:(state) => {
            state.user =null;
            state.isLoggedIn=false;
        },},});
        export const { register, login, logout } = authSlice.actions;
        export default authSlice.reducer;
