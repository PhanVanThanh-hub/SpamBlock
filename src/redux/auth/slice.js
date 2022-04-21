
import {createSlice} from '@reduxjs/toolkit';

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        login:false
    },
    reducers: {
        login(state) {
            state.login=true;
        },
        logout(state){
            state.login=false;
        }   
    },
   
})
const { actions, reducer } = AuthSlice
export const { logout ,login} = actions

 


export default reducer