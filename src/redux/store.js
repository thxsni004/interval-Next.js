import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from './features/personalDetailsSlice'
import healthHistoryReducer from './features/healthHistorySlice'
import idProofReducer from './features/idProofSlice'

 export const store =configureStore({
    reducer:{
        personalDetails:personalDetailsReducer,
        healthHistory:healthHistoryReducer,
        idProof:idProofReducer,
    }
 })

