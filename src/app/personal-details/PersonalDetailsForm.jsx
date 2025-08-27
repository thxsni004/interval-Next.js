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
          dispatch(savePersonalDetails(values));
          // alert("Form submitted!");
        }}
      >
        {({ resetForm, values }) => (
          <Form>
            {/* Section 1 */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={1}>
                Personal Information
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Enter your basic personal and contact details.
              </Typography>

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

              {designationCard && (
                <Box
                  sx={{
                    mt: 2,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: "grey.200",
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
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={1}>
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
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                  mt: 3,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                    Graduation/Post-Graduation Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file. Max 1GB
                  </Typography>
                </Box>
                <FileUploadField name="graduationCertificate" />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ mr: 2, fontWeight: 500 }}>
                    Plus Two (12th Grade) Certificate
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upload 1 supported file . Max 1GB
                  </Typography>
                </Box>
                <FileUploadField name="plusTwoCertificate" />
              </Box>
            </Box>

            {/* Section 3 */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #e0e0e0",
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

            {/* Buttons */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 2,
              }}
            >
              <Button
                variant="outlined"
                // color="secondary"
                onClick={() => {
                  resetForm();
                  dispatch(clearPersonalDetails());
                  setDesignationCard("");
                }}
              >
                Clear Form
              </Button>
              <Button type="submit" variant="contained">
                Next
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
