"use client";
import { TextField, MenuItem } from "@mui/material";
import { useField } from "formik";

export default function FormSelect({ label, options, ...props }) {
  const [field, meta] = useField(props);

    return (
    <TextField
      select       //its work dropdown mode 
      fullWidth
      label={label}
      {...field}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >
        {options.map((opt, i) => (
        <MenuItem key={i} value={opt}>
          {opt}
        </MenuItem>
      ))}
    </TextField>
  );
}