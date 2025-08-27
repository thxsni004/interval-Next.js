import { createSlice } from "@reduxjs/toolkit";

const initialState={
    height:"",
    weight:"",
    bmiCategory:"",
    // otherBmi:"",
    medicalHistory:{hasHistory:false,details:""},
    conditions:{hasCondition:false,details:""},
    allergies:{hasAllergies:false,details:""},
    sensory:{hasSensory:false,details:""},
    declaration:false,


};
const healthHistorySlice= createSlice({
    name:"healthHistory",
    initialState,
    reducers :{
        saveHealthHistory:(state,action)=>{
return {...state, ...action.payload}
        },
        clearHealthHistory:()=>initialState,

    },

});

export const{saveHealthHistory,clearHealthHistory} = healthHistorySlice.actions

export default healthHistorySlice.reducer;