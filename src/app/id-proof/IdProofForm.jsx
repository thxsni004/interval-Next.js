// app/id-proof/IdProofForm.jsx
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
import FormRadioGroup from "../../components/form/FormRadioGroup";
import { idProofSchema } from "./validation";

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
        my: 5,
        backgroundColor: "#ffff",
        p: 4,
        borderRadius: 5,
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          ID Proofs & Work Experience
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Upload any two valid government-issued ID proofs for identity
          confirmation.
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
          dispatch(saveIdProof(values));
          alert("ID Proof information submitted successfully!");
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            {/* ID Proof 1 Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                ID Proof 1 *
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: "black", fontSize: 14, mb: 1 }}>
                  Choose
                </Typography>
                <FormSelect
                  name="idProof1Type"
                  options={idProofOptions}
                  label="Select ID Proof Type"
                />
              </Box>

              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: "text.secondary", m: 2, fontSize: 10 }}
                >
                  Please upload a clear scanned copy. Max file size: 5MB.
                  Allowed formats: PDF, JPG, PNG.
                </Typography>
                <FileUploadField name="idProof1File" />
              </Box>
            </Box>

            {/* ID Proof 2 Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                ID Proof 2
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography sx={{ color: "black", fontSize: 14, mb: 1 }}>
                  Choose
                </Typography>
                <FormSelect
                  name="idProof2Type"
                  options={idProofOptions}
                  label="Select ID Proof Type"
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: "text.secondary", m: 2, fontSize: 10 }}
                >
                  Please upload a clear scanned copy. Max file size: 5MB.
                  Allowed formats: PDF, JPG, PNG.
                </Typography>
                <FileUploadField
                  name="idProof2File"
                  // label="Please upload a clear scanned copy. Max file size: 5MB. Allowed formats: PDF, JPG, PNG."
                />
              </Box>
            </Box>

            {/* Upload Reason Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Unable to Upload ID Proofs?
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                If you are unable to upload the ID proofs, please mention the
                reason below:
              </Typography>

              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Type here..."
                value={values.uploadReason}
                onChange={(e) => setFieldValue("uploadReason", e.target.value)}
                name="uploadReason"
              />
            </Box>

            {/* Work Experience Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Prior Work Experience *
              </Typography>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you have any prior work experience that needs to be
                  verified?
                </FormLabel>
                <RadioGroup
                  row
                  name="hasWorkExperience"
                  value={values.hasWorkExperience}
                  onChange={(e) =>
                    setFieldValue(
                      "hasWorkExperience",
                      e.target.value === "true"
                    )
                  }
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes, I have prior work experience."
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No, I do not have prior work experience."
                  />
                </RadioGroup>
              </FormControl>
            </Box>

            {/* Form Actions */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}
            >
              <Button
                variant="outlined"
                onClick={() => resetForm()}
                sx={{ minWidth: 120 }}
              >
                Clear Form
              </Button>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="outlined" sx={{ minWidth: 120 }}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ minWidth: 120 }}
                >
                  {values.hasWorkExperience === false ? "Preview" : "Submit"}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
