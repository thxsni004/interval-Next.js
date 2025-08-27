import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    idProof1Type:"",
    idProof1File:null,
    idProof2Type:"",
    idProof2File:null,
    uploadReason:"",
    hasWorkExperience:null,
}

const idProofSlice = createSlice({
    name:"idProof",
    initialState,
    reducers:{
        saveIdProof:(state,action)=>{
            return{...state, ...action.payload};
        },
        clearIdProof:()=>initialState,
    },
});
export const {saveIdProof,clearIdProof} = idProofSlice.actions;
export default idProofSlice.reducer