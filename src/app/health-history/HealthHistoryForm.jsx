"use client";
import { Formik, Form } from "formik";
import {
  Button,
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Divider,
} from "@mui/material";
import { useDispatch } from "react-redux";

import FormCheckbox from "../../components/form/FormCheckbox";
import ConditionalField from "../../components/form/ConditionalField";
import { healthHistorySchema } from "./validation";
import FormSelect from "../../components/form/FormSelect";

import {
  saveHealthHistory,
  clearHealthHistory,
} from "@/redux/features/healthHistorySlice";

import FormTextField from "../../components/form/FormTextField";
import FormRadioGroup from "@/components/form/FormRadioGroup";

export default function HealthHistoryForm() {
  const dispatch = useDispatch();
  const bmiOptions = ["Underweight", "Normal", "Overweight", "Obese", "Other"];

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
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Health History
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please provide accurate information about your health history,
          existing conditions, allergies, and related concerns. This will help
          us ensure a safe and supportive workplace. All responses will remain
          confidential.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          height: "",
          weight: "",
          bmiCategory: "",
          medicalHistory: { hasHistory: false, details: "" },
          conditions: { hasCondition: false, details: "" },
          allergies: { hasAllergies: false, details: "" },
          sensory: { hasSensory: false, details: "" },
          declaration: false,
        }}
        validationSchema={healthHistorySchema}
        onSubmit={(values) => {
            console.log("Health history submitted:", values);
          // dispatch(saveHealthHistory(values));
          // You would typically navigate to another page or show success message here
          // alert("Health history submitted successfully!");
        }}
      >
        {({ values, setFieldValue, resetForm }) => (
          <Form>
            {/* Physical Measurements Section */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2} >
                Physical Measurements
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Box sx={{ flex: "1 1 200px" }}>
                  <Typography
                    sx={{ color: "text.secondary", fontSize: 14, mb: 1 }}
                  >
                    Height (in cm)*
                  </Typography>
                  <FormTextField name="height" placeholder="Enter height" />
                </Box>

                <Box sx={{ flex: "1 1 200px" }}>
                  <Typography
                    sx={{ color: "text.secondary", fontSize: 14, mb: 1 }}
                  >
                    Weight (in kg)*
                  </Typography>
                  <FormTextField name="weight" placeholder="Enter weight" />
                </Box>
              </Box>
         </Box>
         {/* BMI CATEGORY  */}
              <Box sx={{background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",}}>
                <Typography
                 variant="subtitle1" fontWeight={600} mb={2} 
                >
                  BMI Category*
                </Typography>
                <FormRadioGroup
                  name="bmiCategory"
                  options={bmiOptions}
                  label="Select BMI Category"
                />
              </Box>
   

            {/* Medical History Section */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2} >
                Medical History
              </Typography>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you have any personal medical history? (e.g., past
                  illnesses, surgeries, or hospitalizations)*
                </FormLabel>
                <RadioGroup
                  row
                  name="medicalHistory.hasHistory"
                  value={values.medicalHistory.hasHistory}
                  onChange={(e) =>
                    setFieldValue(
                      "medicalHistory.hasHistory",
                      e.target.value === "true"
                    )
                  }
                >

                  <FormControlLabel
                  value={true}
                  control={<Radio/>}
                  label="Yes"
                  />
                   <FormControlLabel
                   value={false}
                   control={<Radio/>}
                   label="No"
                   />
                </RadioGroup>
              </FormControl>

              <ConditionalField
                conditionField="medicalHistory.hasHistory"
                name="medicalHistory.details"
                label="Please specify your medical history"
              />
            </Box>

            {/* Medical Conditions Section */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Medical Conditions
              </Typography>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you currently have any diagnosed medical conditions? (e.g.,
                  diabetes, hypertension)*
                </FormLabel>
                <RadioGroup
                  row
                  name="conditions.hasCondition"
                  value={values.conditions.hasCondition}
                  onChange={(e) =>
                    setFieldValue(
                      "conditions.hasCondition",
                      e.target.value === "true"
                    )
                  }
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <ConditionalField
                conditionField="conditions.hasCondition"
                name="conditions.details"
                label="Please specify your medical conditions"
              />
            </Box>

            {/* Allergies Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Allergies
              </Typography>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you have any known allergies or sensitivities? (e.g.,
                  medications, food, environmental)*
                </FormLabel>
                <RadioGroup
                  row
                  name="allergies.hasAllergies"
                  value={values.allergies.hasAllergies}
                  onChange={(e) =>
                    setFieldValue(
                      "allergies.hasAllergies",
                      e.target.value === "true"
                    )
                  }
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <ConditionalField
                conditionField="allergies.hasAllergies"
                name="allergies.details"
                label="Please specify your allergies"
              />
            </Box>

            {/* Sensory/Neurological Section */}
            <Box
              sx={{
                background: "#ffffff",
                borderRadius: 2,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Sensory/Neurological Health
              </Typography>

              <FormControl component="fieldset">
                <FormLabel component="legend">
                  Do you have any sensory (vision, hearing) or neurological
                  health concerns? (e.g., seizures, migraines)
                </FormLabel>
                <RadioGroup
                  row
                  name="sensory.hasSensory" 
                  value={values.sensory.hasSensory}
                  onChange={(e) =>
                    setFieldValue(
                      "sensory.hasSensory",
                      e.target.value === "true"
                    )
                  }
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>

              <ConditionalField
                conditionField="sensory.hasSensory"
                name="sensory.details"
                label="Please specify your sensory/neurological concerns"
              />
            </Box>

            {/* Declaration Section */}
            <Box
              sx={{
                background: "#fff",
                borderRadius: 3,
                p: 3,
                mb: 3,
                border: "1px solid #dadae2ff",
              }}
            >
              <Typography variant="subtitle1" fontWeight={600} mb={2}>
                Declaration
              </Typography>

              <Typography variant="body2" color="text.secondary" paragraph>
                I hereby declare that the information provided above is true and
                accurate to the best of my knowledge. I understand that this
                form is intended to support a healthy and secure work
                environment, and I consent to the information being used with
                due confidentiality and care.
              </Typography>

              <FormCheckbox
                name="declaration"
                label="I agree and confirm the above declaration"
              />
            </Box>

            {/* Form Actions */}
            <Box
              sx={{ display: "flex",
                 justifyContent: "center", 
                 mt: 3,
                  gap:2,
                  flexDirection:{xs:'column' , md:'row'}
                //   display: "flex",
                // justifyContent: "center",
                // mt: 3,
               
                // flexWrap:'wrap'
                }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  resetForm();
                  dispatch(clearHealthHistory());
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
                  Next
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
