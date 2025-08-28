import * as Yup from "yup";

export const idProofSchema=Yup.object({
     idProof1Type: Yup.string(),
 
    //  .required("Please select  your id proof"),
     idProof1File:Yup.mixed()
           .notRequired()
       .nullable()
    //  .required("upload file")
     .test("fileSize", 
      "File size must be less than 5MB" ,
      (value)=>{
        if(!value) return true;
        return value.size <= 5 * 1024 * 1024
     }),
      idProof2Type: Yup.string(), //optional
  idProof2File: Yup.mixed()
  .nullable()
  .notRequired()
  .test(
    "fileSize",
    "File size must be less than 5MB",
    (value) => {
      if (!value) return true; //skip validation if empty
      return value.size <= 5 * 1024 * 1024
    }
  ),

   uploadReason: Yup.string().when("idProof1File", {
    is: (idProof1File) => !idProof1File , //if first file missing
    then: () =>
      Yup.string().required(
        "Please provide a reason if you cannot upload ID proofs"
      ),
    otherwise: () => Yup.string().nullable(),
  }),


  // hasWorkExperience: Yup.boolean().required(
  //   "Please select work experience option"
  // ),

hasWorkExperience: Yup.string()
  .required("Please select work experience option")
  .oneOf(["true", "false"], "Please select work experience option"),

})

