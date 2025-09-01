"use client";
import { Box } from "@mui/material";
import { useField } from "formik";
import FormTextField from "./FormTextField";


export default function ConditionalField({ conditionField, name, label, ...props }) {
  const [field] = useField(conditionField);  //get calue of the conditiona radio
  const [detailField, detailMeta] = useField(name);  //detail text input

    if (!field.value) return null;  // if false -> dont't render anything

return(
    <Box sx={{ mt: 1, ml: 3 }}>
      <FormTextField
        label={label}
        name={name}
        multiline
        rows={3}
        error={detailMeta.touched && Boolean(detailMeta.error)}
        helperText={detailMeta.touched && detailMeta.error}
        {...props}
      />
    </Box>
)
}