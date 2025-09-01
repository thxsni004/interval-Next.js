"use client";
import { Formik, Form } from "formik";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  savePersonalDetails,
  clearPersonalDetails,
} from "@/redux/features/personalDetailsSlice";
import { personalDetailsSchema } from "./validation";
import FormTextField from "../../components/form/FormTextField";
import FormSelect from "../../components/form/FormSelect";
import FileUploadField from "../../components/form/FileUploadField";
import { useState } from "react";

export default function PersonalDetailsForm() {
  const dispatch = useDispatch();
  const [designationCard, setDesignationCard] = useState("");

  return (
    
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        my: {xs:3 , md:5},
        backgroundColor: "#eeecf3ff",
        p:  {xs:3 , md:4},
        borderRadius: 4,
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom  sx={{ color: "#333" }}> 
          Personal Details
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please provide your personal information and upload the required
          educational documents.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          fullName: "",
          email: "",
          phone: "",
          designation: "",
          highestQualification: "",
          graduationCertificate: null,
          plusTwoCertificate: null,
          reason: "",
        }} 
        validationSchema={personalDetailsSchema}
        onSubmit={(values) => {
           console.log("Submitted values:", values);
          // dispatch(savePersonalDetails(values));
          // alert("Form submitted!");
        }}
      >
        {({ resetForm, values }) => (
          <Form>
            {/* Section 1 */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border:  "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={1}  sx={{ color: "#4a596aff" }}>
                Personal Information
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Enter your basic personal and contact details.
              </Typography>
              <Box sx={{ display: "grid", gap: 1}}>

              <FormTextField name="fullName" label="Full Name" fullWidth />
              <FormTextField name="email" label="Email Address" fullWidth />
              <FormTextField name="phone" label="Phone Number" fullWidth />
              <FormTextField
                name="designation"
                label="Current Designation"
                tooltip="Enter your selected designation"
                onTooltipClick={() => setDesignationCard(values.designation)}
                fullWidth
              />
              </Box>

              {designationCard && (
                <Box
                  sx={{
                    mt: 2,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: "#eeecf3ff",
                    display: "inline-block",
                  }}
                >
                  <Typography variant="body2">{designationCard}</Typography>
                </Box>
              )}
            </Box>

            {/* Section 2 */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={1}  sx={{ color: "#4a4a6a" }} >
                Educational Certificate
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Enter your highest qualification details and upload a clear copy
                of the corresponding certificate for validation.
              </Typography>

              <FormSelect
                name="highestQualification"
                label="Highest Qualification"
                options={["Graduation", "Post Graduation"]}
                fullWidth
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2,
                  mt: 3,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 ,color: "#131111ff"}}>
                    Graduation/Post-Graduation Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file. Max 1MB
                  </Typography>
                </Box>
                <FileUploadField name="graduationCertificate" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                 flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: "space-between",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ mr: 2, fontWeight: 500 ,color: "#131111ff"}}>
                    Plus Two (12th Grade) Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file . Max 1MB
                  </Typography>
                </Box>
                <FileUploadField name="plusTwoCertificate" />
              </Box>
            </Box>

            {/* Section 3 reason field */}
            {(!values.graduationCertificate || !values.plusTwoCertificate)&&(

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
                name="reason"
                label="Reason (if certificate not uploaded)"
                multiline
                rows={3}
                fullWidth
              />
            </Box>
                     )}

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
                gap:2,
                flexWrap:'wrap'
              }}
            >
              <Button
                variant="outlined"
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
                onClick={() => {
                  resetForm();
                  dispatch(clearPersonalDetails());
                  setDesignationCard("");  //null designationcard
                }}
              >
                Clear Form
              </Button>
              <Button type="submit" variant="contained"
               sx={{
                 borderRadius: 3,
                  textTransform: "none",
                  px: 4,
               backgroundColor: "#5b8da1ff",
                  "&:hover": {
                    backgroundColor: "#658d8fff",
                  },
                  boxShadow: "0 4px 10px rgba(111,177,181,0.3)",

              }}>
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
