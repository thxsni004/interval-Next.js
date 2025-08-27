"use client";
import { FormControlLabel, Checkbox, FormHelperText,Box } from "@mui/material";
import { useField } from "formik";

export default function FormCheckbox({ label, ...props }) {

      const [field, meta] = useField(props);

      return(
         <Box>
      <FormControlLabel
        control={
          <Checkbox
            {...field}
            checked={field.value}
            color="primary"
          />
        }
        label={label}
      />
      {meta.touched && meta.error && (
        <FormHelperText error>{meta.error}</FormHelperText>
      )}
      </Box>
      )
}