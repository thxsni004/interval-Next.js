import { createSlice } from "@reduxjs/toolkit";

const initialState={
    fullName:"",
    email:"",
    phone:"",
    designation:"",
    highestQualification:"",
    graduationCertificate:null,
    plusTwoCertificate:null,
    reason:"",
};

const personalDetailsSlice = createSlice({
    name:"personalDetails",
    initialState,
    reducers:{
        savePersonalDetails:(state,action)=>{
            return{...state,...action.payload};
        },
        clearPersonalDetails:()=> initialState,
    },
});

export const {savePersonalDetails,clearPersonalDetails} = personalDetailsSlice.actions;
export default personalDetailsSlice.reducer;