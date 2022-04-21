import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './auth/slice';
const rootReducer  = {
  auth: AuthSlice,
 
}

const store = configureStore({
  reducer: rootReducer,
})


export default store
