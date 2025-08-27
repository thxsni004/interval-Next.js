import * as Yup from "yup";

export const idProofSchema=Yup.object({
     idProof1Type: Yup.string().required("Please enter your id proof"),
     idProofFile:Yup.mixed()
     .required("id proof is required")
     .test("fileSize", "File size must be less than 5MB" ,(value)=>{
        if(!value) return true;
        return value.size<=5 * 1024 * 1024
     }),
      idProof2Type: Yup.string(),
  idProof2File: Yup.mixed().test(
    "fileSize",
    "File size must be less than 5MB",
    (value) => {
      if (!value) return true;
      return value.size <= 5 * 1024 * 1024;
    }
  ),

   uploadReason: Yup.string().when(["idProof1File", "idProof2File"], {
    is: (idProof1File, idProof2File) => !idProof1File && !idProof2File,
    then: () =>
      Yup.string().required(
        "Please provide a reason if you cannot upload ID proofs"
      ),
    otherwise: () => Yup.string().nullable(),
  }),
  hasWorkExperience: Yup.boolean().required(
    "Please select work experience option"
  ),
})