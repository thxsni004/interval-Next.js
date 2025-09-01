
"use client";
import { Formik, Form } from "formik";
import {
  Button,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { saveIdProof, clearIdProof } from "../../redux/features/idProofSlice";
import FormSelect from "../../components/form/FormSelect";
import FileUploadField from "../../components/form/FileUploadField";
// import FormRadioGroup from "../../components/form/FormRadioGroup";
import { idProofSchema } from "./validation";
import FormTextField from "@/components/form/FormTextField";

export default function IdProofForm() {
  const dispatch = useDispatch();
  const idProofOptions = [
    "Aadhar Card",
    "Voter ID",
    "Driving Licence",
    "Passport",
  ];
  const workExperienceOptions = ["Yes", "No"];

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        my: { xs: 3, md: 5 },
        backgroundColor: "#eeecf3ff",
        p: { xs: 3, md: 4 },
        borderRadius: 4,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: "#333" }}>
          ID Proofs & Work Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Upload any two valid government-issued ID proofs for identity confirmation.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          idProof1Type: "",
          idProof1File: null,
          idProof2Type: "",
          idProof2File: null,
          uploadReason: "",
          hasWorkExperience: null,
        }}
        validationSchema={idProofSchema}
        onSubmit={(values) => {
          console.log("idproofdetails", values);
          // dispatch(saveIdProof(values));
        }}
      >
        {({ values, setFieldValue, resetForm, errors, touched }) => (
          <Form>
            {/* ID Proof 1 */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ color: "#4a596a" }}>
                ID Proof 1 *
              </Typography>
              <FormSelect name="idProof1Type" options={idProofOptions} label="Select ID Proof Type" fullWidth />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5, color: "#131111ff" }}>
                    Upload ID Proof
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file. Max 5MB (PDF, JPG, PNG)
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                  <FileUploadField name="idProof1File" />
                </Box>
              </Box>
            </Box>

            {/* ID Proof 2 */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ color: "#4a596a" }}>
                ID Proof 2
              </Typography>
              <FormSelect name="idProof2Type" options={idProofOptions} label="Select ID Proof Type" fullWidth />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5, color: "#131111ff" }}>
                    Upload ID Proof
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file. Max 5MB (PDF, JPG, PNG)
                  </Typography>
                </Box>
                <Box sx={{ width: { xs: "100%", md: "auto" } }}>
                  <FileUploadField name="idProof2File" />
                </Box>
              </Box>
            </Box>

            {/* Reason Section */}
            {(!values.idProof1File || !values.idProof2File) && (
              <Box
                sx={{
                  background: "#fff",
                  borderRadius: 3,
                  p: 3,
                  mb: 3,
                  border: "1px solid #e6e6fa",
                }}
              >
                <FormTextField
                  name="uploadReason"
                  label="Reason (if ID proof not uploaded)"
                  multiline
                  rows={3}
                  fullWidth
                  value={values.uploadReason}
                  onChange={(e) => setFieldValue("uploadReason", e.target.value)}
                />
              </Box>
            )}

            {/* Work Experience */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2} sx={{ color: "#4a596a" }}>
                Prior Work Experience *
              </Typography>
              <FormControl component="fieldset">
                <FormLabel component="legend" sx={{ mb: 1 }}>
                  Do you have any prior work experience that needs to be verified?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasWorkExperience"
                  value={values.hasWorkExperience}
                  onChange={(e) => setFieldValue("hasWorkExperience", e.target.value === "true")}
                >
                  <FormControlLabel value="true" control={<Radio />} label="Yes" />
                  <FormControlLabel value="false" control={<Radio />} label="No" />
                </RadioGroup>
                {touched.hasWorkExperience && errors.hasWorkExperience && (
                  <Typography variant="caption" color="error">
                    {errors.hasWorkExperience}
                  </Typography>
                )}
              </FormControl>
            </Box>
            {/* Form Actions */}
            <Box
              sx={{ display: "flex",
                 justifyContent: "center", 
                 mt: 3,
                  gap:2,
                  flexDirection:{xs:'column' , md:'row'}

                }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  resetForm();
                  dispatch(clearIdProof());
                }}
                  sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  px: 3,
                  borderColor: "#e8aeb7",
                  color: "#b56576",
                  "&:hover": {
                    borderColor: "#b56576",
                    backgroundColor: "#fdecef",
                  },
                }}
              >
                Clear Form
              </Button>

              <Box sx={{ display: "flex", gap: 2 ,flexDirection:{xs:'column' , md:'row'} }}>
                <Button variant="outlined" sx={{ 
                  borderRadius:3,
                  textTransform:'none',
                  px:3,
                  borderColor:'#a19b9bff',
                  color:'#635e5eff',
                  "&:hover":{
                    borderColor:'#a19191ff',
                    backgroundColor:'#fcf3f3ff'
                  }
                 }}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                   sx={{
                  borderRadius: 3,
                  textTransform: "none",
                  px: 4,
                  backgroundColor: "#5b8da1ff",
                  "&:hover": {
                    backgroundColor: "#658d8fff",
                  },
                  boxShadow: "0 4px 10px rgba(111,177,181,0.3)",
                }}
                >
                 {values.hasWorkExperience === false ? "Preview" : "Next"}
                </Button>
              </Box>
            </Box> 
          </Form>
        )}
      </Formik>
    </Box>
  );
}
