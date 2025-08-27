import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from './features/personalDetailsSlice'

 export const store =configureStore({
    reducer:{
        personalDetails:personalDetailsReducer,
    }
 })

